import React from "react";
import { Text } from "./CountdownStyles";

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
