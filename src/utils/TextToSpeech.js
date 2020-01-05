import React, { useState } from "react"
import { useSpeechSynthesis } from "react-speech-kit"

const TextToSpeech = () => {
  const [value, setValue] = useState("")
  const { speak } = useSpeechSynthesis()

  return (
    <div>
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  )
}

export default TextToSpeech