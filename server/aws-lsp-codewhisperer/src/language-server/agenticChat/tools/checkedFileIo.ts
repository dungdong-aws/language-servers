import { Features } from '@aws/language-server-runtimes/server-interface/server'
import { FileOperationError } from '../errors'

export type GuardedFileSystem = Features['workspace']['fs'] & {
    readFileNoFollow?: (path: string) => Promise<string>
    updateFileNoFollow?: (
        path: string,
        transform: (content: string) => string,
        options?: { create?: boolean; readExisting?: boolean }
    ) => Promise<void>
}

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

function unsupportedRuntime(): FileOperationError {
    return new FileOperationError(
        'Required filesystem operation is unavailable in this runtime',
        'The language-server runtime must be updated before this file operation can run.'
    )
}

export async function readCheckedFile(
    workspace: Features['workspace'],
    targetPath: string,
    logging?: DebugLogger
): Promise<string> {
    try {
        if (process.platform === 'win32') return await workspace.fs.readFile(targetPath)
        const operation = (workspace.fs as GuardedFileSystem).readFileNoFollow
        if (typeof operation !== 'function') throw unsupportedRuntime()
        return await operation.call(workspace.fs, targetPath)
    } catch (error) {
        logFileAccess(logging, 'io.failed', { targetPath, operation: 'read' }, error)
        throw error
    }
}

export async function updateCheckedFile(
    workspace: Features['workspace'],
    targetPath: string,
    transform: (content: string) => string,
    options: { create?: boolean; readExisting?: boolean } = {},
    logging?: DebugLogger
): Promise<void> {
    try {
        if (process.platform === 'win32') {
            const content = options.readExisting === false ? '' : await workspace.fs.readFile(targetPath)
            await workspace.fs.writeFile(targetPath, transform(content))
            return
        }
        const operation = (workspace.fs as GuardedFileSystem).updateFileNoFollow
        if (typeof operation !== 'function') throw unsupportedRuntime()
        await operation.call(workspace.fs, targetPath, transform, options)
    } catch (error) {
        logFileAccess(logging, 'io.failed', { targetPath, operation: 'update' }, error)
        throw error
    }
}
