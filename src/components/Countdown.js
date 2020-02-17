import React from "react";
import {
  CountdownWrapper,
  CountdownTimer,
  ToggleTimerButtonWrapper,
  ToggleTimerButton,
  PlayIcon
} from "./CountdownStyles";

const adjustStrSize = (str, length = 2, filler = "0") => {
  while (str.length < length) str = filler + str;
  return str;
};

export default function({ remainingTime = 0, toggleTimer, isPaused = false }) {
  const minutes = adjustStrSize(`${Math.floor(remainingTime / 60)}`);
  const seconds = adjustStrSize(`${remainingTime % 60}`);

  return (
    <CountdownWrapper>
      <CountdownTimer>
        {minutes}:{seconds}
      </CountdownTimer>

      {remainingTime > 0 && (
        <ToggleTimerButtonWrapper>
          <ToggleTimerButton onClick={toggleTimer}>
            <PlayIcon paused={isPaused} />
          </ToggleTimerButton>
        </ToggleTimerButtonWrapper>
      )}
    </CountdownWrapper>
  );
}
