import { constants } from 'fs'
import { open, FileHandle } from 'fs/promises'
import { Features } from '@aws/language-server-runtimes/server-interface/server'

type DebugLogger = Pick<Features['logging'], 'debug'>

/** Diagnostic failures must not change the operation. Never pass content or full tool inputs here. */
export function logFileAccess(
    logging: DebugLogger | undefined,
    event: string,
    details: {
        toolUseId?: string
        toolName?: string
        targetPath?: string
        canonicalPaths?: string[]
        requiresAcceptance?: boolean
        operation?: string
        fd?: number
    },
    error?: unknown
): void {
    try {
        logging?.debug(
            `[file-access] ${JSON.stringify({
                event,
                ...details,
                ...(error === undefined
                    ? {}
                    : {
                          errorName: error instanceof Error ? error.name : 'UnknownError',
                          errorCode: error instanceof Error ? (error as NodeJS.ErrnoException).code : undefined,
                      }),
            })}`
        )
    } catch {
        // Logging is best effort, including while handling an I/O failure.
    }
}

/** Opens the target retained by the acceptance check and validates the resulting handle. */
async function openRegularFile(targetPath: string, flags: number, logging?: DebugLogger): Promise<FileHandle> {
    let handle: FileHandle
    try {
        if (!constants.O_NOFOLLOW) {
            throw new Error('Final-component no-follow file access is not supported on this platform')
        }
        handle = await open(targetPath, flags | constants.O_NOFOLLOW | constants.O_NONBLOCK)
    } catch (error) {
        logFileAccess(logging, 'open.failed', { targetPath }, error)
        throw error
    }
    logFileAccess(logging, 'open.completed', { targetPath, fd: handle.fd })
    try {
        if (!(await handle.stat()).isFile()) {
            throw new Error('Expected a regular file')
        }
        logFileAccess(logging, 'handle.checked', { targetPath, fd: handle.fd })
        return handle
    } catch (error) {
        logFileAccess(logging, 'handle.checkFailed', { targetPath, fd: handle.fd }, error)
        await closeFile(handle, targetPath, logging)
        throw error
    }
}

async function closeFile(handle: FileHandle, targetPath: string, logging?: DebugLogger): Promise<void> {
    const fd = handle.fd
    try {
        await handle.close()
        logFileAccess(logging, 'handle.closed', { targetPath, fd })
    } catch (error) {
        logFileAccess(logging, 'handle.closeFailed', { targetPath, fd }, error)
        throw error
    }
}

export async function readCheckedFile(
    workspace: Features['workspace'],
    targetPath: string,
    logging?: DebugLogger
): Promise<string> {
    // Use the workspace filesystem provider on Windows.
    if (process.platform === 'win32') {
        logFileAccess(logging, 'io.workspaceProvider', { targetPath, operation: 'read' })
        return workspace.fs.readFile(targetPath)
    }
    const handle = await openRegularFile(targetPath, constants.O_RDONLY, logging)
    try {
        const content = await handle.readFile({ encoding: 'utf8' })
        logFileAccess(logging, 'io.completed', { targetPath, operation: 'read', fd: handle.fd })
        return content
    } catch (error) {
        logFileAccess(logging, 'io.failed', { targetPath, operation: 'read', fd: handle.fd }, error)
        throw error
    } finally {
        await closeFile(handle, targetPath, logging)
    }
}

/** Compute and write through one handle, without truncation until the opened object has been checked. */
export async function updateCheckedFile(
    workspace: Features['workspace'],
    targetPath: string,
    transform: (content: string) => string,
    options: { create?: boolean; readExisting?: boolean } = {},
    logging?: DebugLogger
): Promise<void> {
    if (process.platform === 'win32') {
        logFileAccess(logging, 'io.workspaceProvider', { targetPath, operation: 'update' })
        const content = options.readExisting === false ? '' : await workspace.fs.readFile(targetPath)
        await workspace.fs.writeFile(targetPath, transform(content))
        return
    }
    let handle: FileHandle
    try {
        handle = await openRegularFile(
            targetPath,
            options.readExisting === false ? constants.O_WRONLY : constants.O_RDWR,
            logging
        )
    } catch (error) {
        if (!options.create || (error as NodeJS.ErrnoException).code !== 'ENOENT') {
            throw error
        }
        // Create the missing destination exclusively.
        handle = await openRegularFile(targetPath, constants.O_RDWR | constants.O_CREAT | constants.O_EXCL, logging)
    }
    try {
        const existing = options.readExisting === false ? '' : await handle.readFile({ encoding: 'utf8' })
        const content = Buffer.from(transform(existing), 'utf8')
        // readFile advances the offset; positional writes must start from the beginning.
        let offset = 0
        while (offset < content.length) {
            const { bytesWritten } = await handle.write(content, offset, content.length - offset, offset)
            if (bytesWritten === 0) {
                throw new Error('File write made no progress')
            }
            offset += bytesWritten
        }
        await handle.truncate(content.length)
        logFileAccess(logging, 'io.completed', { targetPath, operation: 'update', fd: handle.fd })
    } catch (error) {
        logFileAccess(logging, 'io.failed', { targetPath, operation: 'update', fd: handle.fd }, error)
        throw error
    } finally {
        await closeFile(handle, targetPath, logging)
    }
}
