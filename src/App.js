import React from 'react';
import TextToSpeech from './components/TextToSpeech/'
import SpeechToText from './components/SpeechToText/'

import './app.scss'

function App() {
  return (
    <div className="container">
      <h1 className="title">Gesture-Speech-Recognition</h1>
      <div className="item">
        <TextToSpeech/>
      </div>
      <div className="item">
        <SpeechToText/>
      </div>
    </div>
  )
}

export default App;
