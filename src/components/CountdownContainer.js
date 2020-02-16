import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import SpeedButtons from "./CountdownSpeedButtons";
import Countdown from "./Countdown";
import {
  useCountdownStart,
  useCountdownReset,
  useCountdownSoundOnEnd
} from "./hooks";
import CountdownStatusText from "./CountdownStatusText";

const RemainingTimeInput = styled.input``;
const CountdownStartButton = styled.button``;

function CountdownContainer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [minutes, setMinutes] = useState("");
  const [isCountdownGoing, setCountdownGoing] = useState(false);
  const [speed, setActiveSpeed] = useState(1);
  const halfway = useRef(null);
  const timeIsUpSound = useRef(new Audio(require("../assets/time-is-up.mp3")))
    .current;

  const setCountdownTime = useCallback(() => {
    const timeInSeconds = Number(minutes) * 60;
    setRemainingTime(timeInSeconds);
    setMinutes("");
    setCountdownGoing(true);
    halfway.current = Math.floor(timeInSeconds / 2);
  }, [minutes]);

  useCountdownStart(isCountdownGoing, speed, setRemainingTime);

  useCountdownReset(
    remainingTime,
    isCountdownGoing,
    speed,
    setCountdownGoing,
    setActiveSpeed
  );
  useCountdownSoundOnEnd(timeIsUpSound, remainingTime, isCountdownGoing, speed);

  return (
    <>
      <RemainingTimeInput
        placeholder="(Min)"
        value={minutes}
        onChange={evt => setMinutes(evt.target.value)}
      />
      {!!Number(minutes) && (
        <CountdownStartButton onClick={setCountdownTime}>
          Start
        </CountdownStartButton>
      )}

      {halfway.current && (
        <CountdownStatusText
          halfway={halfway.current}
          remainingTime={remainingTime}
        />
      )}

      <Countdown
        remainingTime={remainingTime}
        toggleTimer={() => setCountdownGoing(!isCountdownGoing)}
        isPaused={!isCountdownGoing}
      />
      <SpeedButtons setActiveSpeed={setActiveSpeed} />
    </>
  );
}

export default CountdownContainer;
