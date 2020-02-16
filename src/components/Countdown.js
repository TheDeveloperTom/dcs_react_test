import React from "react";
import styled from "styled-components";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { PauseCircle } from "styled-icons/boxicons-regular/PauseCircle";

const adjustStrSize = (str, length = 2, filler = "0") => {
  while (str.length < length) str = filler + str;
  return str;
};

const CountdownWrapper = styled.div`
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
`;

const CountdownTimer = styled.div`
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
`;

const ToggleTimerButton = styled.button`
  display: inline-block;
`;

const PauseIcon = styled(PauseCircle)`
  color: black;
  width: 20px;
`;

const PlayIcon = styled(PlayCircle)`
  color: black;
  width: 20px;
`;

export default function({ remainingTime = 0, toggleTimer, isPaused = false }) {
  const minutes = adjustStrSize(`${Math.floor(remainingTime / 60)}`);
  const seconds = adjustStrSize(`${remainingTime % 60}`);

  return (
    <CountdownWrapper>
      <CountdownTimer>
        {minutes}:{seconds}
      </CountdownTimer>

      {remainingTime > 0 && (
        <ToggleTimerButton onClick={toggleTimer}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </ToggleTimerButton>
      )}
    </CountdownWrapper>
  );
}
