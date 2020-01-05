import React from 'react';
import TextToSpeech from './utils/TextToSpeech'
import SpeechToText from './utils/SpeechToText'

function App() {
  return (
    <div className="App">
      <TextToSpeech/>
      <br/>
      <SpeechToText/>
    </div>
  );
}

export default App;
