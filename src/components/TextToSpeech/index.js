import React, { useState } from "react"
import { useSpeechSynthesis } from "react-speech-kit"

import { Button, Input } from 'antd'

export default () => {
  const [value, setValue] = useState("")
  const { speak } = useSpeechSynthesis()

  return (
    <div className="tts">
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <div className="item">
        <Button
          size="large"
          type="primary"
          onClick={() => speak({ text: value })}
          disabled={value.length <= 0}
        >
          <span role="img">🔈 Speak</span>
        </Button>
        <Button
          size="large"
          onClick={() => setValue("")}
        >
          <span role="img">Clear</span>
        </Button>
      </div>
    </div>
  )
}
