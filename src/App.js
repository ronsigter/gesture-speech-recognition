import React, { useState } from 'react';
import onHandleSpeak from './utils/TextToSpeech'
import SpeechToText from './utils/SpeechToText'

function App() {
  const [textToRead, setTextToRead] = useState("")

  return (
    <div className="App">
      <input
        value={textToRead}
        onChange={(e) => setTextToRead(e.target.value)}
      />
      <button onClick={() => onHandleSpeak(textToRead)}>
        Speak
      </button>
      <br/>
      <SpeechToText/>
    </div>
  );
}

export default App;
