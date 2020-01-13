import React, { useState } from "react"
import { useSpeechRecognition } from "react-speech-kit"

import { Button, Input } from 'antd'

export default () => {
  const [value, setValue] = useState("")
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setValue(result)
    }
  })

  return (
    <div className="speechtext-container">
      <div className="item">
        <Input.TextArea
          rows="5"
          value={value}
          onChange={event => setValue(event.target.value)}
          disabled
        />
      </div>
      {listening &&
        <div className="item">
          <div>Go ahead I'm listening</div>
        </div>
      }
      <div className="item">
        <Button
          size="large"
          type="primary"
          onClick={listen}
          disabled={listening}
        >
          <span role="img">🎤 Listen</span>
        </Button>
        <Button
          size="large"
          type="danger"
          onClick={stop}
          disabled={!listening}
        >
          <span role="img">🚫 Stop Listening</span>
        </Button>
      </div>
    </div>
  )
}
