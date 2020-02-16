import React from "react";
import CountdownSpeedButtons from "../CountdownSpeedButtons";

describe("CountdownSpeedButtons", () => {
  const props = {
    speedOptions: [1, 1.5, 2],
    setActiveSpeed: jest.fn()
  };
  const component = mount(<CountdownSpeedButtons {...props} />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("renders correct number of speed buttons", () => {
    expect(component.find("button")).toHaveLength(props.speedOptions.length);
  });

  it("renders correct text inside buttons", () => {
    expect(component.first("button").text()).toContain(
      `${props.speedOptions[0]}x`
    );
  });

  it("invokes a given callback on buttons click", () => {
    component.first("button").simulate("click");
    expect(props.setActiveSpeed).toHaveBeenCalled();
  });
});
