import React, { useState, useContext } from "react"
import axios from 'axios'

import { StateContext } from '../../Context'
import { useSpeechRecognition } from "react-speech-kit"

import { Button, Input } from 'antd'

export default () => {
  const [value, setValue] = useState("")
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setValue(result)
    }
  })
  const { dispatch } = useContext(StateContext)

  // axios.post('https://courses.startasl.com/mod/glossary/view.php?hook=how%20are%20you&searchbutton=Search&mode=search&id=463',
  // { headers: { "Origin": "google.com" }})
  // .then( response => {
  //   console.log(response)
  // })

  return (
    <div className="tts">
      <div className="item">
        <Button
          size="large"
          type="primary"
          onClick={() => dispatch({
            type: "updateTab",
            payload: "tts"
          })}
        ><span>Go to Text to Speech</span>
        </Button>
      </div>
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
        disabled
        readOnly
      />
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
