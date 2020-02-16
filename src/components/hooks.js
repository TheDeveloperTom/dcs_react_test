import { useEffect } from "react";

export const useCountdownStart = (
  isCountdownGoing,
  speed,
  setRemainingTime
) => {
  useEffect(() => {
    if (isCountdownGoing) {
      const interval = setInterval(
        () => setRemainingTime(remainingTime => remainingTime - 1),
        1000 / speed
      );
      return () => clearInterval(interval);
    }
  }, [isCountdownGoing, speed, setRemainingTime]);
};

export const useCountdownReset = (
  remainingTime,
  isCountdownGoing,
  speed,
  setCountdownGoing,
  setActiveSpeed
) => {
  useEffect(() => {
    if (isCountdownGoing && remainingTime <= 0) {
      setCountdownGoing(false);
      setActiveSpeed(1);
    }
  }, [
    remainingTime,
    isCountdownGoing,
    speed,
    setCountdownGoing,
    setActiveSpeed
  ]);
};

export const useCountdownSoundOnEnd = (
  timeIsUpSound,
  remainingTime,
  isCountdownGoing,
  speed
) => {
  useEffect(() => {
    if (isCountdownGoing && remainingTime <= 0) {
      timeIsUpSound.playbackRate = speed;
      timeIsUpSound.play();
    }
  }, [isCountdownGoing, remainingTime, speed, timeIsUpSound]);
};
