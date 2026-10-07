import { readCheckedFile } from './checkedFileIo'
import { CommandValidation, InvokeOutput, requiresPathAcceptance, validatePath } from './toolShared'
import { Features } from '@aws/language-server-runtimes/server-interface/server'
import { FSREAD_MAX_PER_FILE, FSREAD_MAX_TOTAL } from '../constants/constants'

export interface FsReadParams {
    paths: string[]
}

export interface FileReadResult {
    path: string
    content: string
    truncated: boolean
}

export class FsRead {
    static maxResponseSize = FSREAD_MAX_PER_FILE
    static maxResponseSizeTotal = FSREAD_MAX_TOTAL
    private readonly logging: Features['logging']
    private readonly workspace: Features['workspace']
    private readonly lsp: Features['lsp']
    private readonly maxPerFile: number
    private readonly maxTotal: number

    constructor(
        features: Pick<Features, 'lsp' | 'workspace' | 'logging'> & Partial<Features>,
        maxPerFile?: number,
        maxTotal?: number
    ) {
        this.logging = features.logging
        this.workspace = features.workspace
        this.lsp = features.lsp
        this.maxPerFile = maxPerFile ?? FsRead.maxResponseSize
        this.maxTotal = maxTotal ?? FsRead.maxResponseSizeTotal
    }

    /**
     * `targetPaths` are the canonical paths the approval check evaluated for
     * `params.paths`, in the same order; `params.paths` are never resolved here.
     */
    public async validate(params: FsReadParams, targetPaths: string[]): Promise<void> {
        for (const targetPath of targetPaths) {
            await validatePath(targetPath, this.workspace.fs.exists)
        }
    }

    public async requiresAcceptance(
        params: FsReadParams,
        approvedPaths?: Map<string, Set<string>>
    ): Promise<CommandValidation> {
        // Check every path and collect each canonical result, so the caller
        // receives one resolved target per requested path even when the first
        // path already requires approval.
        const canonicalPaths: string[] = []
        let firstRequired: CommandValidation | undefined
        for (const path of params.paths) {
            const validation = await requiresPathAcceptance(
                path,
                'fsRead',
                this.workspace,
                this.logging,
                approvedPaths,
                { flagMultiplyLinkedFiles: 'read' }
            )
            if (!validation.canonicalPaths?.[0]) {
                // The check could not resolve this path; refuse rather than
                // proceed with a target the check did not evaluate.
                return { requiresAcceptance: true, warning: validation.warning }
            }
            canonicalPaths.push(validation.canonicalPaths[0])
            if (validation.requiresAcceptance && !firstRequired) {
                firstRequired = validation
            }
        }
        if (firstRequired) {
            return { ...firstRequired, canonicalPaths }
        }
        return { requiresAcceptance: false, canonicalPaths }
    }

    /** Uses the checked targets without resolving the original aliases again. */
    public async invoke(params: FsReadParams, targetPaths: string[]): Promise<InvokeOutput> {
        const fileResult: FileReadResult[] = []
        for (const [i, path] of params.paths.entries()) {
            const targetPath = targetPaths[i]
            const content = await this.readFile(targetPath)
            this.logging.info(`Read file: ${targetPath}, size: ${content.length}`)
            fileResult.push({ path, content, truncated: false })
        }

        return this.createOutput(fileResult)
    }

    private async readFile(filePath: string): Promise<string> {
        this.logging.info(`Reading file: ${filePath}`)
        return await readCheckedFile(this.workspace, filePath, this.logging)
    }

    private createOutput(fileResult: FileReadResult[]): InvokeOutput {
        let totalSize = 0
        for (const result of fileResult) {
            const exceedsMaxSize = result.content.length > this.maxPerFile
            if (exceedsMaxSize) {
                this.logging.info(`FsRead: truncating ${result.path} to first ${this.maxPerFile} characters`)
                result.content = result.content.substring(0, this.maxPerFile - 3) + '...'
                result.truncated = true
            }
            totalSize += result.content.length
        }

        if (totalSize > this.maxTotal) {
            throw Error('Files are too large, please break the file read into smaller chunks')
        }

        return {
            output: {
                kind: 'json',
                content: fileResult,
            },
        }
    }

    public getSpec() {
        return {
            name: 'fsRead',
            description:
                'A tool for reading files.\n\n' +
                '## Overview\n' +
                'This tool returns the contents of files.\n\n' +
                '## When to use\n' +
                '- When you need to examine the content of a file or multiple files\n' +
                '- When you need to analyze code or configuration files\n\n' +
                '## When not to use\n' +
                '- When you need to search for patterns across multiple files\n' +
                '- When you need to process files in binary format\n\n' +
                '## Notes\n' +
                '- Prioritize reading multiple files at once by passing in multiple paths rather than calling this tool with a single path multiple times\n' +
                '- When reading multiple files, the total characters combined cannot exceed 400K characters, break the step into smaller chunks if it happens\n' +
                '- This tool is more effective than running a command like `head -n` using `executeBash` tool\n' +
                '- If a file exceeds 200K characters, this tool will only read the first 200K characters of the file with a `truncated=true` in the output',
            inputSchema: {
                type: 'object',
                properties: {
                    paths: {
                        description:
                            'List of file paths to read in a sequence, e.g. `["/repo/file.py"]` for Unix-like system including Unix/Linux/macOS or `["d:\\repo\\file.py"]` for Windows.',
                        type: 'array',
                        items: {
                            type: 'string',
                            description:
                                'Absolute path to a file, e.g. `/repo/file.py` for Unix-like system including Unix/Linux/macOS or `d:\\repo\\file.py` for Windows.',
                        },
                    },
                },
                required: ['paths'],
            },
        } as const
    }
}
