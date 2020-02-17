import React from "react";
import styled, { keyframes, css } from "styled-components";

const blink = keyframes`
  to {
    visibility: hidden;
  }
`;
const Text = styled.p`
  letter-spacing: 0.1em;
  font-size: 20px;
  padding: 20px 0 0;
  ont-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  ${props =>
    props.blinking &&
    css`
      animation: ${blink} 1s steps(5, start) infinite;
    `};

  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

export default ({ halfway, remainingTime }) => {
  if (remainingTime === 0) {
    return <Text red>Time’s up!</Text>;
  }

  if (remainingTime <= halfway) {
    return (
      <Text blinking={remainingTime < 10} red={remainingTime < 20}>
        More than halfway there!
      </Text>
    );
  }
  return null;
};
