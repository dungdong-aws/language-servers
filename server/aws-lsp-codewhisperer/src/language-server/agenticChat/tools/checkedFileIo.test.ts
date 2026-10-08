import * as assert from 'assert'
import * as sinon from 'sinon'
import { TestFeatures } from '@aws/language-server-runtimes/testing'
import { GuardedFileSystem, readCheckedFile, updateCheckedFile, logFileAccess } from './checkedFileIo'
import { FileOperationError } from '../errors'

describe('checked file runtime delegation', () => {
    let features: TestFeatures
    let filesystem: GuardedFileSystem
    let read: sinon.SinonStub
    let update: sinon.SinonStub
    let rawRead: sinon.SinonStub
    let rawWrite: sinon.SinonStub
    let platform: sinon.SinonStub

    beforeEach(() => {
        features = new TestFeatures()
        platform = sinon.stub(process, 'platform').value('linux')
        read = sinon.stub().resolves('fixture')
        update = sinon.stub().resolves()
        rawRead = sinon.stub().resolves('before')
        rawWrite = sinon.stub().resolves()
        filesystem = Object.assign(features.workspace.fs, {
            readFile: rawRead,
            writeFile: rawWrite,
            readFileNoFollow: read,
            updateFileNoFollow: update,
        })
    })

    afterEach(() => sinon.restore())

    it('passes the checked read target to the runtime', async () => {
        assert.strictEqual(await readCheckedFile(features.workspace, 'checked-target'), 'fixture')
        sinon.assert.calledOnceWithExactly(read, 'checked-target')
        assert.strictEqual(read.firstCall.thisValue, filesystem)
        sinon.assert.notCalled(rawRead)
    })

    it('delegates one complete update with the existing transform and options', async () => {
        const transform = (content: string) => content + ' after'
        const options = { create: true, readExisting: false }
        await updateCheckedFile(features.workspace, 'checked-target', transform, options)
        sinon.assert.calledOnceWithExactly(update, 'checked-target', transform, options)
        assert.strictEqual(update.firstCall.thisValue, filesystem)
        sinon.assert.notCalled(rawRead)
        sinon.assert.notCalled(rawWrite)
    })

    it('refuses an unavailable capability before reading or writing', async () => {
        delete filesystem.readFileNoFollow
        delete filesystem.updateFileNoFollow
        await assert.rejects(readCheckedFile(features.workspace, 'checked-target'), FileOperationError)
        await assert.rejects(
            updateCheckedFile(features.workspace, 'checked-target', () => 'changed'),
            FileOperationError
        )
        sinon.assert.notCalled(rawRead)
        sinon.assert.notCalled(rawWrite)
    })

    it('preserves runtime errors without an unguarded fallback', async () => {
        const failure = Object.assign(new Error('Open failed'), { code: 'ELOOP' })
        read.rejects(failure)
        update.rejects(failure)
        await assert.rejects(readCheckedFile(features.workspace, 'checked-target'), error => error === failure)
        await assert.rejects(
            updateCheckedFile(features.workspace, 'checked-target', () => 'changed'),
            error => error === failure
        )
        sinon.assert.notCalled(rawRead)
        sinon.assert.notCalled(rawWrite)
    })

    it('retains the Windows provider path without invoking guarded operations', async () => {
        platform.value('win32')
        assert.strictEqual(await readCheckedFile(features.workspace, 'checked-target'), 'before')
        await updateCheckedFile(features.workspace, 'checked-target', content => content + ' after')
        sinon.assert.calledWithExactly(rawWrite, 'checked-target', 'before after')
        rawRead.resetHistory()
        await updateCheckedFile(features.workspace, 'new-target', () => 'new', { create: true, readExisting: false })
        sinon.assert.notCalled(rawRead)
        sinon.assert.calledWithExactly(rawWrite, 'new-target', 'new')
        sinon.assert.notCalled(read)
        sinon.assert.notCalled(update)
    })

    it('does not write when a Windows transform fails', async () => {
        platform.value('win32')
        await assert.rejects(
            updateCheckedFile(features.workspace, 'checked-target', () => {
                throw new Error('Transform failed')
            }),
            /Transform failed/
        )
        sinon.assert.notCalled(rawWrite)
    })

    it('keeps diagnostics independent of operation errors and file content', async () => {
        const failure = Object.assign(new Error('private-message'), { code: 'ELOOP' })
        read.rejects(failure)
        const debug = sinon.stub()
        await assert.rejects(
            readCheckedFile(features.workspace, 'checked-target', { debug }),
            error => error === failure
        )
        assert.ok(debug.firstCall.args[0].includes('ELOOP'))
        assert.ok(!debug.firstCall.args[0].includes('private-message'))
        logFileAccess(
            {
                debug: () => {
                    throw new Error('Unavailable')
                },
            },
            'example',
            { targetPath: 'checked-target' }
        )
    })
})
