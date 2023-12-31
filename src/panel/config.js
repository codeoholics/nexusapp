import { createGlobalState } from 'react-hooks-global-state'

const botImageUrl =
  'data:image/png;base64,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'
export const AppInitialState = {
  messages: [],
  loading:false,
  lastreceivedmessage: '',
  texttospeech: {
    enabled: false,
    status: 'NONE',
    speaking: false
  },
  speechrecognition: {
    enabled: false,
    pauseRecognizing: false,
    status: 'NONE',
    transcript: '',
    error: null,
    restartSpeech: false
  },
  config: {
    botImageUrl: botImageUrl,
    speechRecognition: false,
    textToSpeech: false,
    inputBoxPlaceholder: 'Type your message here'
  }
}
export const { useGlobalState, getGlobalState, setGlobalState } =
  createGlobalState(AppInitialState)

export const getGlobalSpeakRecognitionState = () => {
  return getGlobalState('speechrecognition')
}

export function setLoadingState(loading){
  setGlobalState('loading',loading)
}