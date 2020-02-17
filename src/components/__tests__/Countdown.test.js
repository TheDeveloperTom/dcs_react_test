import React from "react";
import { shallow } from "enzyme";
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

  describe("renders correct time", () => {
    it("0 shows 00:00", () => {
      const c = mount(<Countdown {...props} remainingTime={0} />);
      expect(c.first("CountdownTimer").text()).toMatch("00:00");
    });
    it("100 shows 01:40", () => {
      const c = mount(<Countdown {...props} remainingTime={100} />);
      expect(c.first("CountdownTimer").text()).toMatch("01:40");
    });
  });

  describe("shows button only when remainingTime > 0", () => {
    it("doesn't display button when remainingTime <= 0", () => {
      const c = mount(<Countdown {...props} remainingTime={0} />);
      expect(c.find("ToggleTimerButton").length).toEqual(0);
    });
    it("doesn't display button when remainingTime > 0", () => {
      const c = mount(<Countdown {...props} remainingTime={5} />);
      expect(c.find("ToggleTimerButton").length).toEqual(1);
    });
  });

  it("shows pause when isPaused=false", () => {
    const c = mount(<Countdown {...props} remainingTime={5} isPaused={true} />);

    expect(c.find("PlayIcon").prop("paused")).toEqual(true);
  });

  it("Invokes passed callback when the button is clicked", () => {
    const c = mount(<Countdown {...props} remainingTime={1} />);
    c.find("ToggleTimerButton").simulate("click");
    expect(props.toggleTimer).toHaveBeenCalled();
  });
});
