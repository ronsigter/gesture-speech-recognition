import React, { useState } from 'react';
import TextToSpeech from './components/TextToSpeech/'
import SpeechToText from './components/SpeechToText/'
import WebBluetooth from './components/WebBluetooth/'
import GestureGraph from './components/GestureGraph'

import './app.scss'
import { Button } from 'antd'

function App() {
  const [tab, setTab] = useState("bluetooth")
  return (
    <div className="container">
      <div>
        <Button onClick={() => setTab("app")}>App</Button>
        <Button onClick={() => setTab("bluetooth")}>Bluetooth</Button>
        <Button onClick={() => setTab("graph")}>Gesture Graph</Button>
      </div>
      <h1 className="title">Gesture-Speech-Recognition</h1>
      { tab === "app" &&
        <>
          <div className="item">
            <TextToSpeech/>
          </div>
          <div className="item">
            <SpeechToText/>
          </div>
        </>
      }
      { tab === "bluetooth" &&
        <div className="item">
          <WebBluetooth/>
        </div>
      }
      { tab === "graph" &&
        <div className="graph">
          <GestureGraph/>
        </div>
      }
    </div>
  )
}

export default App;
