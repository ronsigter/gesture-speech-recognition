import React, { useState, useContext, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { StateContext } from "../../Context";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export default () => {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const { state } = useContext(StateContext);

  useEffect(() => {
    speak({ text: state.data.predict });
  }, [state.data.predict]);

  return (
    <>
      <Row style={{ height: "80%" }}>
        <textarea
          style={{ width: "100%", height: "100%" }}
          placeholder="Type what you want to hear"
          value={state.data.predict}
          onChange={event => setValue(event.target.value)}
        />
      </Row>
      <Row>
        <Button
          size="large"
          type="primary"
          onClick={() => speak({ text: value })}
          block
        >
          Speak
        </Button>
      </Row>
      <Row>
        <Button variant="danger" onClick={() => setValue("")} block>
          Clear
        </Button>
      </Row>
    </>
  );
};
