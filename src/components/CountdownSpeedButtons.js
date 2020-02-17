import React from "react";
import { ButtonsWrapper, SpeedButton } from "./CountdownStyles";

export default ({
  setActiveSpeed,
  activeSpeed = 1,
  speedOptions = [1, 1.5, 2]
}) => (
  <ButtonsWrapper>
    {speedOptions.map(speed => (
      <SpeedButton
        active={activeSpeed === speed}
        key={speed}
        onClick={() => setActiveSpeed(speed)}
      >
        {speed}x
      </SpeedButton>
    ))}
  </ButtonsWrapper>
);
