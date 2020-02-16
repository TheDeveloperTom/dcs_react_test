import React from "react";
import styled from "styled-components";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { PauseCircle } from "styled-icons/boxicons-regular/PauseCircle";

const adjustStrSize = (str, length = 2, filler = "0") => {
  while (str.length < length) str = filler + str;
  return str;
};

const Countdown = styled.div`
  display: inline-block;
  font-size: 30px;
  font-weight: 900;
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
    <div>
      <Countdown>
        {minutes}:{seconds}
      </Countdown>

      {remainingTime > 0 && (
        <ToggleTimerButton onClick={toggleTimer}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </ToggleTimerButton>
      )}
    </div>
  );
}
