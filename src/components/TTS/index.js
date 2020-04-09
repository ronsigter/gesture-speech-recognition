import React, { useState, useContext, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { StateContext } from "../../Context";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Col
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "100%" }}
        >
          <h1 
            style={{ fontSize: "16vw" }}
          >
            {state.data.predict
              ? state.data.predict
              : "Connect to Bluetooth First"}
          </h1>
        </Col>
      </Row>
      <Row>Use the gesture gloves</Row>
    </>
  );
};
