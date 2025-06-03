import { ChatItem, ChatItemFormItem, ChatItemType } from '@aws/mynah-ui'

export const voiceInputMode: ChatItemFormItem = {
    type: 'switch',
    id: 'voice-input-mode',
    tooltip: 'Turn OFF voice input coding',
    alternateTooltip: 'Turn ON voice input coding',
    value: 'false',
    icon: 'megaphone',
}

export const voiceInputModeOn: ChatItem = {
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: '🎤 Voice Input Mode - ON',
}

export const voiceInputModeOff: ChatItem = {
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: 'Voice Input Mode - OFF',
}

export const voiceInputListening: ChatItem = {
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: '🎤 Listening... (Speak now)',
}

export const voiceInputProcessing: ChatItem = {
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: '⏳ Processing speech...',
}

export const voiceInputError: (message: string) => ChatItem = (message: string) => ({
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: `❌ Voice Input Error: ${message}`,
})

export const voiceInputNotSupported: ChatItem = {
    type: ChatItemType.DIRECTIVE,
    contentHorizontalAlignment: 'center',
    fullWidth: true,
    body: '⚠️ Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.',
}
