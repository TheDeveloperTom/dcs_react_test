import React from "react";
import styled, { keyframes, css } from "styled-components";

const blink = keyframes`
  to {
    visibility: hidden;
  }
`;
const Text = styled.p`
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
