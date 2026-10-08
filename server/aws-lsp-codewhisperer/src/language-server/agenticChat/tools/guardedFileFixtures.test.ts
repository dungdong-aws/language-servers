import { Features } from '@aws/language-server-runtimes/server-interface/server'
import { GuardedFileSystem } from './checkedFileIo'

/** Use the installed runtime's actual I/O implementation in filesystem integration tests. */
export function withGuardedFileOperations(filesystem: Features['workspace']['fs']): GuardedFileSystem {
    const { readFileNoFollow, updateFileNoFollow } =
        require('@aws/language-server-runtimes/runtimes/util/standalone/guardedFile') as Required<
            Pick<GuardedFileSystem, 'readFileNoFollow' | 'updateFileNoFollow'>
        >
    return Object.assign(filesystem, { readFileNoFollow, updateFileNoFollow })
}
