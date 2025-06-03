import { MynahUI } from '@aws/mynah-ui'
import { voiceInputError, voiceInputListening, voiceInputNotSupported } from '../texts/voiceInput'

// Declare VSCode webview API for TypeScript
declare global {
    function acquireVsCodeApi(): any
}

// Define a type for the SpeechRecognition API
interface SpeechRecognition extends EventTarget {
    continuous: boolean
    interimResults: boolean
    lang: string
    start(): void
    stop(): void
    onstart: (event: Event) => void
    onerror: (event: SpeechRecognitionErrorEvent) => void
    onend: (event: Event) => void
}

interface SpeechRecognitionErrorEvent extends Event {
    error: string
    message: string
}

// Get the appropriate SpeechRecognition constructor based on browser support
const SpeechRecognitionAPI =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition ||
    (window as any).mozSpeechRecognition ||
    (window as any).msSpeechRecognition
console.log('API', SpeechRecognitionAPI)
export class SpeechRecognitionService {
    private recognition: SpeechRecognition | null = null
    private isListening: boolean = false
    private mynahUi: MynahUI
    private currentTabId: string

    constructor(mynahUi: MynahUI) {
        this.mynahUi = mynahUi
        this.currentTabId = mynahUi.getSelectedTabId() || ''
        if (SpeechRecognitionAPI) {
            this.recognition = new SpeechRecognitionAPI() as SpeechRecognition
            this.recognition.continuous = false
            this.recognition.lang = 'en-US'

            // Set up event listeners to track microphone state
            this.setupEventListeners()
        }
    }

    private setupEventListeners(): void {
        if (!this.recognition) return

        this.recognition.onstart = () => {
            console.log('Microphone is now active')
            this.isListening = true
            this.mynahUi.addChatItem(this.currentTabId, voiceInputListening)
        }

        this.recognition.onerror = event => {
            console.error('Speech recognition error:', event.error)
            this.isListening = false

            // Provide more helpful error messages
            let errorMessage = event.error
            if (event.error === 'not-allowed') {
                errorMessage =
                    'Microphone access denied. Please check your browser permissions and allow microphone access.'
            } else if (event.error === 'permissions-policy') {
                errorMessage =
                    'Microphone access blocked by permissions policy. This is likely due to VSCode sandbox restrictions.'
            }

            this.mynahUi.addChatItem(this.currentTabId, voiceInputError(errorMessage))
        }

        this.recognition.onend = () => {
            console.log('Microphone turned off')
            this.isListening = false
        }
    }

    public isSupported(): boolean {
        return this.recognition !== null
    }

    public startListening(tabId: string): boolean {
        if (!this.isSupported()) {
            this.mynahUi.addChatItem(tabId, voiceInputNotSupported)
            return false
        }

        if (this.isListening) {
            return true
        }

        try {
            this.currentTabId = tabId

            // Check if we're in VSCode's webview context
            const isVSCodeWebview = typeof (globalThis as any).acquireVsCodeApi !== 'undefined'
            if (isVSCodeWebview) {
                const vscode = globalThis.acquireVsCodeApi
                console.log('API', vscode)
            }
            console.log('Using', this.recognition)
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(() => {
                    // Got microphone access, start recognition
                    if (this.recognition) {
                        this.recognition.start()
                    }
                })
                .catch(err => {
                    console.error('Error accessing microphone:', err)
                    this.mynahUi.addChatItem(
                        this.currentTabId,
                        voiceInputError(`Microphone access failed: ${err.message}`)
                    )
                })
            return false
        } catch (error) {
            console.error('Error starting speech recognition:', error)
            this.mynahUi.addChatItem(
                tabId,
                voiceInputError(
                    `Failed to start microphone: ${error instanceof Error ? error.message : 'Unknown error'}`
                )
            )
            return false
        }
    }

    public stopListening(): void {
        if (this.isListening && this.recognition) {
            this.recognition.stop()
        }
    }

    public isActive(): boolean {
        return this.isListening
    }
}
