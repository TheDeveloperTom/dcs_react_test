import React from "react";
import styled, { css } from "styled-components";
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SpeedButton = styled.button`
  flex-basis: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 50px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  color: #00d7c3;
  margin-left: 20px;
  outline: none;

  &:first-child {
    margin-left: 0;
  }
  &:hover {
    box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
    border: 3px solid #00d7c3;
  }

  ${props =>
    props.active &&
    css`
      box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
      border: 3px solid #00d7c3;
    `}
`;

export default ({
  setActiveSpeed,
  activeSpeed,
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
