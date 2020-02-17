import styled, { keyframes, css } from "styled-components";

const pulsate1 = keyframes`
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;

  }
`;

export const CountdownWrapper = styled.div`
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  position: relative;
`;

export const CountdownTimer = styled.div`
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
`;

export const ToggleTimerButtonWrapper = styled.div`
  position: absolute;
  right: -50px;
  top: calc(50% - 50px);
`;

export const ToggleTimerButton = styled.button`
  display: inline-block;
  background: transparent;
  border: 0;
  outline: 0;
`;

export const PlayIcon = styled.a`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    rgba(0, 0, 0, 0.5) 60%,
    rgba(255, 255, 255, 1) 62%
  );
  border-radius: 50%;
  position: relative;
  display: block;
  box-shadow: 0px 0px 25px 3px rgba(1, 0, 1, 0.1);

  &:after {
    content: "";
    position: absolute;

    border-color: transparent transparent transparent #fff;
    transition: 100ms all ease;
    cursor: pointer;
    transform: translateX(-50%) translateY(-50%);
    height: 30px;
    border-style: double;
    border-width: 0px 0 0px 30px;

    ${props =>
      props.paused &&
      css`
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 0 15px 25px;
        transform: translateX(-40%) translateY(-50%);
      `}
    left: 50%;
    top: 50%;
    z-index: 100;
    transition: 150ms all ease;
  }

  &:before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    ${props =>
      props.paused &&
      css`
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        animation: ${pulsate1} 2s;
        -webkit-animation-direction: forwards;
        animation-direction: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: steps;
        animation-timing-function: steps;
        opacity: 1;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.75);
        top: -30%;
        left: -30%;
        background: rgba(198, 16, 0, 0);
      `}
  }
`;

export const RemainingTimeInput = styled.input`
  border-radius: 50px;
  overflow: hidden;
  height: 100%;
  font-size: 20px;
  position: absolute;
  width: 450px;
  background: ghostwhite;
  transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.57);
  outline: 0;
  color: #0a2e38;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  border: gray;
  font-family: "Share Tech Mono", monospace;
`;

export const RemainingTimeInputWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 50px;
  margin-bottom: 20px;
`;

export const CountdownStartButton = styled.button`
  font-family: "Share Tech Mono", monospace;
  font-size: 20px;
  width: 100px;
  background-color: black;
  height: 50px;
  border-radius: 30px;
  padding: 0px;
  color: white;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;
