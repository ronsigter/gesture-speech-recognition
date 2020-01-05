import React, { useState, useEffect, useRef } from 'react'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
// recognition.lang = 'en-US'

let noteContent = ""
let recognizing = false
recognition.onstart = function () {
  recognizing = true
}

recognition.onend = function () {
  recognizing = false
}

recognition.onerror = function (event) {
  recognizing = false
}

const SpeechToText = () => {
  const [listenToSpeaker, setListenToSpeaker] = useState(false)
  const speechText = useRef(null)

  const Listen = () => {
    setListenToSpeaker(true)
  }

  const Stop = () => {
    setListenToSpeaker(false)
  }

  useEffect(() => {
    recognition.stop()
    handleListen()
  }, [listenToSpeaker])

  const handleListen = () => {
    if (listenToSpeaker) {
      speechText.current.value = ""
      if (!recognizing) recognition.start()
      recognition.onend = () => recognition.start()
    } else {
      recognition.stop()
    }

    recognition.onresult = event => {
      const current = event.resultIndex
      let transcript = event.results[current][0].transcript

      const mobileRepeatBug = (current === 1 && transcript === event.results[0][0].transcript)

      if(!mobileRepeatBug) {
        noteContent = transcript
        speechText.current.value = noteContent
      }
    }
    // console.log(transcript)
  }

  return (
    <>
      <textarea
        style={{ height: '300px', width: '300px'}}
        ref={speechText}
      />
      <button onClick={() => Listen()} disabled={listenToSpeaker}>
        Talk
      </button>
      <button onClick={() => Stop()} disabled={!listenToSpeaker}>
        Stop
      </button>
    </>
  )
}

export default SpeechToText