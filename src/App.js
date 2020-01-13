import React from 'react';
import TextToSpeech from './components/TextToSpeech/'
import SpeechToText from './components/SpeechToText/'
import WebBluetooth from './components/WebBluetooth/'
import GestureGraph from './components/GestureGraph'

import './app.scss'
import { Button } from 'antd'

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1 className="title">Gesture-Speech-Recognition</h1>
      </div>
      {/* <SpeechToText/> */}
      <WebBluetooth/>
      <TextToSpeech/>
      <GestureGraph/>
    </div>
  )
}

export default App;
