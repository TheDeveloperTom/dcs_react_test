import React from "react";
import Countdown from "../Countdown";

describe("Countdown", () => {
  const props = {
    remainingTime: 0,
    toggleTimer: jest.fn(),
    isPaused: false
  };
  const component = mount(<Countdown {...props} />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  desctibe("renders correct time", () => {});
});
