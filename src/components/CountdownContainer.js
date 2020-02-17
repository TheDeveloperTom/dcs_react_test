import React, { useState, useRef, useCallback } from "react";
import SpeedButtons from "./CountdownSpeedButtons";
import Countdown from "./Countdown";
import {
  useCountdownStart,
  useCountdownReset,
  useCountdownSoundOnEnd
} from "./hooks";
import CountdownStatusText from "./CountdownStatusText";
import {
  RemainingTimeInputWrapper,
  RemainingTimeInput,
  CountdownStartButton
} from "./CountdownStyles";

function CountdownContainer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [minutes, setMinutes] = useState("");
  const [isCountdownGoing, setCountdownGoing] = useState(false);
  const [speed, setActiveSpeed] = useState(1);
  const halfway = useRef(null);
  const timeIsUpSound = useRef(new Audio(require("../assets/time-is-up.mp3")))
    .current;

  const handleInput = value =>
    Number.isNaN(value) || value < 0 ? null : setMinutes(value);

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
      <RemainingTimeInputWrapper>
        <RemainingTimeInput
          placeholder="Enter the countdown time"
          value={minutes}
          onChange={e => handleInput(e.target.value)}
        />

        <CountdownStartButton
          onClick={setCountdownTime}
          disabled={!Number(minutes)}
        >
          Start
        </CountdownStartButton>
      </RemainingTimeInputWrapper>

      <Countdown
        remainingTime={remainingTime}
        toggleTimer={() => setCountdownGoing(!isCountdownGoing)}
        isPaused={!isCountdownGoing}
      />

      {halfway.current && (
        <CountdownStatusText
          halfway={halfway.current}
          remainingTime={remainingTime}
        />
      )}

      {!!remainingTime && (
        <SpeedButtons activeSpeed={speed} setActiveSpeed={setActiveSpeed} />
      )}
    </>
  );
}

export default CountdownContainer;
