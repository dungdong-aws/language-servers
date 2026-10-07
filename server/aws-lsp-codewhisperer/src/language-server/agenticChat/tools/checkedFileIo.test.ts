import * as assert from 'assert'
import * as fs from 'fs/promises'
import { constants } from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as sinon from 'sinon'
import { TestFeatures } from '@aws/language-server-runtimes/testing'
import { readCheckedFile, updateCheckedFile } from './checkedFileIo'

const supported = process.platform !== 'win32' && !!constants.O_NOFOLLOW

;(supported ? describe : describe.skip)('checked file no-follow I/O', () => {
    let directory: string
    let file: string
    let features: TestFeatures
    let workspaceRead: sinon.SinonStub
    let workspaceWrite: sinon.SinonStub

    beforeEach(async () => {
        features = new TestFeatures()
        workspaceRead = sinon.stub().rejects(new Error('Unexpected unguarded read'))
        workspaceWrite = sinon.stub().rejects(new Error('Unexpected unguarded write'))
        features.workspace.fs = {
            ...features.workspace.fs,
            readFile: workspaceRead,
            writeFile: workspaceWrite,
        }
        directory = await fs.realpath(await fs.mkdtemp(path.join(os.tmpdir(), 'checked-file-')))
        file = path.join(directory, 'file.txt')
        await fs.writeFile(file, 'original fixture')
    })

    afterEach(async () => {
        sinon.restore()
        await fs.rm(directory, { recursive: true, force: true })
    })

    it('reads a regular file without a new runtime API', async () => {
        assert.strictEqual(await readCheckedFile(features.workspace, file), 'original fixture')
        sinon.assert.notCalled(workspaceRead)
    })

    it('logs open, checked handle, I/O and close without file contents', async () => {
        const debug = sinon.stub()
        await updateCheckedFile(features.workspace, file, () => 'private-fixture-content', {}, { debug })
        const events = debug.getCalls().map(call => JSON.parse(call.args[0].slice('[file-access] '.length)))
        assert.deepStrictEqual(
            events.map(event => event.event),
            ['open.completed', 'handle.checked', 'io.completed', 'handle.closed']
        )
        assert.ok(events.every(event => event.targetPath === file))
        assert.ok(!JSON.stringify(events).includes('private-fixture-content'))
        assert.ok(!JSON.stringify(events).includes('original fixture'))
        assert.strictEqual(events[0].fd, events[3].fd)
    })

    it('logs the open error code without retrying an unguarded read', async () => {
        const debug = sinon.stub()
        const error = Object.assign(new Error('private-error-content'), { code: 'ELOOP' })
        sinon.stub(fs, 'open').rejects(error)
        await assert.rejects(readCheckedFile(features.workspace, file, { debug }), candidate => candidate === error)
        const event = JSON.parse(debug.firstCall.args[0].slice('[file-access] '.length))
        assert.strictEqual(event.event, 'open.failed')
        assert.strictEqual(event.errorCode, 'ELOOP')
        assert.ok(!debug.firstCall.args[0].includes('private-error-content'))
        sinon.assert.notCalled(workspaceRead)
    })

    it('does not change file I/O when diagnostic logging throws', async () => {
        const debug = sinon.stub().throws(new Error('logger unavailable'))
        assert.strictEqual(await readCheckedFile(features.workspace, file, { debug }), 'original fixture')
        await updateCheckedFile(features.workspace, file, () => 'updated', {}, { debug })
        assert.strictEqual(await fs.readFile(file, 'utf8'), 'updated')
    })

    it('overwrites through a handle and truncates leftover bytes', async () => {
        await updateCheckedFile(features.workspace, file, () => 'short', { create: true, readExisting: false })
        assert.strictEqual(await fs.readFile(file, 'utf8'), 'short')
        sinon.assert.notCalled(workspaceWrite)
    })

    it('updates content without appending at the read offset', async () => {
        await updateCheckedFile(features.workspace, file, content => content.replace('original', 'updated'))
        assert.strictEqual(await fs.readFile(file, 'utf8'), 'updated fixture')
    })

    it('supports empty replacements and exclusive new-file creation', async () => {
        await updateCheckedFile(features.workspace, file, () => '')
        assert.strictEqual(await fs.readFile(file, 'utf8'), '')
        const created = path.join(directory, 'new.txt')
        await updateCheckedFile(features.workspace, created, () => 'new', { create: true, readExisting: false })
        assert.strictEqual(await fs.readFile(created, 'utf8'), 'new')
    })

    it('does not modify content when the transform rejects it', async () => {
        await assert.rejects(
            updateCheckedFile(features.workspace, file, () => {
                throw new Error('fixture rejection')
            }),
            /fixture rejection/
        )
        assert.strictEqual(await fs.readFile(file, 'utf8'), 'original fixture')
    })

    it('rejects final symlinks without an unguarded read or write fallback', async () => {
        const link = path.join(directory, 'link.txt')
        await fs.symlink(file, link)
        await assert.rejects(readCheckedFile(features.workspace, link), { code: 'ELOOP' })
        await assert.rejects(
            updateCheckedFile(features.workspace, link, () => 'changed', { create: true, readExisting: false }),
            { code: 'ELOOP' }
        )
        assert.strictEqual(await fs.readFile(file, 'utf8'), 'original fixture')
        sinon.assert.notCalled(workspaceRead)
        sinon.assert.notCalled(workspaceWrite)
    })

    it('rejects replacement of a previously resolved file with a symlink', async () => {
        const checkedPath = await fs.realpath(file)
        const other = path.join(directory, 'other.txt')
        await fs.writeFile(other, 'untouched fixture')
        await fs.unlink(file)
        await fs.symlink(other, file)
        await assert.rejects(readCheckedFile(features.workspace, checkedPath), { code: 'ELOOP' })
        await assert.rejects(
            updateCheckedFile(features.workspace, checkedPath, () => 'changed', { readExisting: false }),
            { code: 'ELOOP' }
        )
        assert.strictEqual(await fs.readFile(other, 'utf8'), 'untouched fixture')
    })

    it('rejects a dangling final symlink rather than creating its target', async () => {
        const missing = path.join(directory, 'missing.txt')
        const link = path.join(directory, 'dangling.txt')
        await fs.symlink(missing, link)
        await assert.rejects(
            updateCheckedFile(features.workspace, link, () => 'changed', { create: true }),
            { code: 'ELOOP' }
        )
        await assert.rejects(fs.stat(missing), { code: 'ENOENT' })
    })

    it('rejects non-regular files and closes the opened handle', async () => {
        const handle = await fs.open(directory, constants.O_RDONLY)
        const close = sinon.spy(handle, 'close')
        sinon.stub(fs, 'open').resolves(handle)
        await assert.rejects(readCheckedFile(features.workspace, directory), /Expected a regular file/)
        sinon.assert.calledOnce(close)
    })

    it('closes the handle when a transform fails', async () => {
        const handle = await fs.open(file, constants.O_RDWR)
        const close = sinon.spy(handle, 'close')
        sinon.stub(fs, 'open').resolves(handle)
        await assert.rejects(
            updateCheckedFile(features.workspace, file, () => {
                throw new Error('fixture rejection')
            }),
            /fixture rejection/
        )
        sinon.assert.calledOnce(close)
    })

    it('uses exclusive creation when a competing entry appears after a missing-file result', async () => {
        const open = sinon.stub(fs, 'open')
        open.onFirstCall().rejects(Object.assign(new Error('missing'), { code: 'ENOENT' }))
        open.onSecondCall().rejects(Object.assign(new Error('exists'), { code: 'EEXIST' }))
        await assert.rejects(
            updateCheckedFile(features.workspace, file, () => 'changed', { create: true }),
            { code: 'EEXIST' }
        )
        const flags = open.secondCall.args[1] as number
        assert.ok(flags & constants.O_CREAT)
        assert.ok(flags & constants.O_EXCL)
        assert.ok(flags & constants.O_NOFOLLOW)
        assert.strictEqual(flags & constants.O_TRUNC, 0)
    })
})
;(process.platform === 'win32' ? describe : describe.skip)('checked file Windows compatibility', () => {
    it('retains the existing workspace filesystem provider', async () => {
        const features = new TestFeatures()
        const read = sinon.stub().resolves('fixture')
        const write = sinon.stub().resolves()
        features.workspace.fs.readFile = read
        features.workspace.fs.writeFile = write
        assert.strictEqual(await readCheckedFile(features.workspace, 'checked-file'), 'fixture')
        await updateCheckedFile(features.workspace, 'checked-file', content => content + '-updated')
        sinon.assert.calledWithExactly(write, 'checked-file', 'fixture-updated')
    })
})
