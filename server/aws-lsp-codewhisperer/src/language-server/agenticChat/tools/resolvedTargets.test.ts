import * as assert from 'assert'
import * as sinon from 'sinon'
import { TestFeatures } from '@aws/language-server-runtimes/testing'
import { newAgent } from '@aws/language-server-runtimes/runtimes/agent'
import { FsToolsServer } from './toolServer'
import { FsRead } from './fsRead'
import { FsWrite } from './fsWrite'
import { FsReplace } from './fsReplace'
import { FileSearch } from './fileSearch'
import { ListDirectory } from './listDirectory'
import * as shared from './toolShared'
import * as checkedIo from './checkedFileIo'
import { workspaceUtils } from '@aws/lsp-core'

describe('checked filesystem targets', () => {
    const tools = [
        { name: 'fsRead', prototype: FsRead.prototype, input: { paths: ['alias'] } },
        {
            name: 'fsWrite',
            prototype: FsWrite.prototype,
            input: { path: 'alias', command: 'create', fileText: 'fixture' },
        },
        { name: 'fsReplace', prototype: FsReplace.prototype, input: { path: 'alias', diffs: [] } },
        { name: 'fileSearch', prototype: FileSearch.prototype, input: { path: 'alias', queryName: 'fixture' } },
        { name: 'listDirectory', prototype: ListDirectory.prototype, input: { path: 'alias' } },
    ]
    const pending: object[] = []

    afterEach(() => {
        pending.splice(0).forEach(shared.discardResolvedTargets)
        sinon.restore()
    })

    function prepare(input: object, name: string, targets: string[]) {
        const prepared = shared.withResolvedTargets(input, name, targets)
        pending.push(prepared)
        return prepared
    }

    it('does not modify the original input or retain a mutable targets array', () => {
        const original = { path: 'alias' }
        const targets = ['checked-target']
        const input = prepare(original, 'fsWrite', targets)
        targets[0] = 'changed-target'
        assert.deepStrictEqual(original, { path: 'alias' })
        assert.deepStrictEqual(input, original)
        assert.notStrictEqual(input, original)
        assert.strictEqual(shared.requireResolvedTarget(input, 'fsWrite'), 'checked-target')
    })

    it('rejects missing, fabricated, copied and cross-tool handoffs', () => {
        const input = prepare({ path: 'alias' }, 'fsRead', ['checked-target'])
        for (const untrusted of [{}, { __resolvedTargets: 'fabricated' }, { ...input }]) {
            assert.throws(() => shared.requireResolvedTarget(untrusted, 'fsRead'), /No checked targets/)
        }
        assert.throws(() => shared.requireResolvedTarget(input, 'fsWrite'), /No checked targets/)
        assert.strictEqual(shared.requireResolvedTarget(input, 'fsRead'), 'checked-target')
    })

    it('rejects replay, discarded targets, and path-count mismatches', () => {
        const used = prepare({}, 'fsRead', ['one'])
        shared.requireResolvedTarget(used, 'fsRead')
        assert.throws(() => shared.requireResolvedTarget(used, 'fsRead'), /No checked targets/)
        const discarded = prepare({}, 'fsRead', ['one'])
        shared.discardResolvedTargets(discarded)
        assert.throws(() => shared.requireResolvedTarget(discarded, 'fsRead'), /No checked targets/)
        const mismatched = prepare({}, 'fsRead', ['one', 'two'])
        assert.throws(() => shared.requireResolvedTargets(mismatched, 'fsRead', 1), /do not match/)
        assert.throws(() => shared.requireResolvedTargets(mismatched, 'fsRead', 2), /No checked targets/)
    })

    it('keeps overlapping invocations separate even when they complete in reverse order', async () => {
        const first = prepare({}, 'fsWrite', ['first'])
        const second = prepare({}, 'fsWrite', ['second'])
        const results = await Promise.all([
            Promise.resolve().then(() => shared.requireResolvedTarget(second, 'fsWrite')),
            Promise.resolve().then(() => shared.requireResolvedTarget(first, 'fsWrite')),
        ])
        assert.deepStrictEqual(results, ['second', 'first'])
    })

    for (const { name, prototype, input } of tools) {
        it(`${name} passes the same checked target through the registered validation and invocation`, async () => {
            const validate = sinon.stub(prototype, 'validate').resolves()
            const invoke = sinon.stub(prototype, 'invoke').resolves({ output: { kind: 'text', content: 'fixture' } })
            const features = new TestFeatures()
            await FsToolsServer(features)
            const registration = (features.agent.addTool as sinon.SinonStub)
                .getCalls()
                .find(c => c.args[0].name === name)
            assert.ok(registration)
            const handler = registration.args[1]
            const prepared = prepare(input, name, ['checked-target'])
            await handler(prepared)
            sinon.assert.calledOnce(validate)
            sinon.assert.calledOnce(invoke)
            const target = name === 'fsRead' ? ['checked-target'] : 'checked-target'
            assert.deepStrictEqual(validate.firstCall.args[1], target)
            assert.strictEqual(validate.firstCall.args[1], invoke.firstCall.args[1])
            await assert.rejects(handler(prepared), /No checked targets/)
            await assert.rejects(handler(input), /No checked targets/)
        })
    }

    it('preserves checked-input identity through the installed runtime validation and dispatch', async () => {
        const features = new TestFeatures()
        features.agent = newAgent()
        const validate = sinon.stub(FsRead.prototype, 'validate').resolves()
        const invoke = sinon.stub(FsRead.prototype, 'invoke').resolves({ output: { kind: 'text', content: 'fixture' } })
        const dispose = FsToolsServer(features)
        try {
            const input = prepare({ paths: ['alias'] }, 'fsRead', ['checked-target'])
            await features.agent.runTool('fsRead', input)
            sinon.assert.calledOnce(validate)
            sinon.assert.calledOnce(invoke)
            assert.strictEqual(invoke.firstCall.args[0], input)
            assert.deepStrictEqual(invoke.firstCall.args[1], ['checked-target'])
            await assert.rejects(features.agent.runTool('fsRead', input), /No checked targets/)
        } finally {
            dispose()
        }
    })

    it('returns no executable target for empty or whitespace-only input', async () => {
        const features = new TestFeatures()
        for (const input of ['', '   ']) {
            const result = await shared.requiresPathAcceptance(input, 'fsWrite', features.workspace, features.logging)
            assert.strictEqual(result.requiresAcceptance, true)
            assert.strictEqual(result.canonicalPaths, undefined)
        }
    })

    it('fsRead checks every path even after one requires approval', async () => {
        const check = sinon.stub(shared, 'requiresPathAcceptance')
        check
            .onFirstCall()
            .resolves({ requiresAcceptance: true, warning: 'approval needed', canonicalPaths: ['first'] })
        check.onSecondCall().resolves({ requiresAcceptance: false, canonicalPaths: ['second'] })
        const result = await new FsRead(new TestFeatures()).requiresAcceptance({ paths: ['a', 'b'] })
        assert.deepStrictEqual(result, {
            requiresAcceptance: true,
            warning: 'approval needed',
            canonicalPaths: ['first', 'second'],
        })
        sinon.assert.calledTwice(check)
    })

    it('fsRead provides no executable targets if any path could not be checked', async () => {
        sinon.stub(shared, 'requiresPathAcceptance').resolves({ requiresAcceptance: true })
        const result = await new FsRead(new TestFeatures()).requiresAcceptance({ paths: ['unresolved'] })
        assert.strictEqual(result.canonicalPaths, undefined)
    })

    it('fsRead reads only supplied targets when the requested aliases differ', async () => {
        const features = new TestFeatures()
        const read = sinon.stub(checkedIo, 'readCheckedFile').resolves('fixture')
        const result = await new FsRead(features).invoke({ paths: ['alias-a', 'alias-b'] }, ['checked-a', 'checked-b'])
        assert.deepStrictEqual(
            read.getCalls().map(c => c.args[1]),
            ['checked-a', 'checked-b']
        )
        assert.strictEqual(result.output.kind, 'json')
    })

    it('fsReplace validates, reads and writes only the supplied target', async () => {
        const features = new TestFeatures()
        const exists = sinon.stub().resolves(true)
        const read = sinon.stub().resolves('before')
        const write = sinon.stub().resolves()
        features.workspace.fs.exists = exists
        features.workspace.fs.readFile = read
        features.workspace.fs.writeFile = write
        sinon.stub(checkedIo, 'updateCheckedFile').callsFake(async (_workspace, target, transform) => {
            await write(target, transform(await read(target)))
        })
        const tool = new FsReplace(features)
        const input = { path: 'unresolved-alias', diffs: [{ oldStr: 'before', newStr: 'after' }] }
        await tool.validate(input, 'checked-target')
        await tool.invoke(input, 'checked-target')
        sinon.assert.calledWithExactly(exists, 'checked-target')
        sinon.assert.calledWithExactly(read, 'checked-target')
        sinon.assert.calledWithExactly(write, 'checked-target', 'after')
    })

    it('directory tools traverse only the supplied root', async () => {
        const features = new TestFeatures()
        const tree = sinon.stub(workspaceUtils, 'readDirectoryWithTreeOutput').resolves('fixture')
        const search = sinon.stub(workspaceUtils, 'readDirectoryRecursively').resolves([])
        await new ListDirectory(features).invoke({ path: 'unresolved-alias' }, 'checked-directory')
        await new FileSearch(features).invoke({ path: 'unresolved-alias', queryName: 'fixture' }, 'checked-directory')
        assert.strictEqual(tree.firstCall.args[1], 'checked-directory')
        assert.strictEqual(search.firstCall.args[1], 'checked-directory')
    })

    it('fsWrite append uses the supplied target without resolving the alias', async () => {
        const features = new TestFeatures()
        const exists = sinon.stub().resolves(false)
        const write = sinon.stub().resolves()
        features.workspace.fs.exists = exists
        features.workspace.fs.writeFile = write
        const tool = new FsWrite(features)
        // Append avoids the unrelated project-index update performed by create.
        features.workspace.fs.readFile = sinon.stub().resolves('before')
        sinon.stub(checkedIo, 'updateCheckedFile').callsFake(async (_workspace, target, transform) => {
            await write(target, transform(await features.workspace.fs.readFile(target)))
        })
        const params = { path: 'unresolved-alias', command: 'append' as const, fileText: 'after' }
        await tool.validate(params, 'checked-target')
        await tool.invoke(params, 'checked-target')
        sinon.assert.calledWithExactly(features.workspace.fs.readFile as sinon.SinonStub, 'checked-target')
        sinon.assert.calledOnce(write)
        assert.strictEqual(write.firstCall.args[0], 'checked-target')
    })
})
