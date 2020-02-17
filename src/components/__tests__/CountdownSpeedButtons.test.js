import React from "react";
import CountdownSpeedButtons from "../CountdownSpeedButtons";

describe("CountdownSpeedButtons", () => {
  const props = {
    speedOptions: [1, 1.5, 2],
    activeSpeed: 1,
    setActiveSpeed: jest.fn()
  };
  const component = mount(<CountdownSpeedButtons {...props} />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("renders correct number of speed buttons", () => {
    expect(component.find("SpeedButton")).toHaveLength(
      props.speedOptions.length
    );
  });

  it("renders correct text inside buttons", () => {
    expect(
      component
        .find("SpeedButton")
        .at(0)
        .text()
    ).toContain(`${props.speedOptions[0]}x`);
  });

  it("invokes a given callback on buttons click", () => {
    component
      .find("button")
      .first()
      .simulate("click");
    expect(props.setActiveSpeed).toHaveBeenCalled();
  });

  it("correctly select the active speed button", () => {
    const nextProps = {
      ...props,
      speedOptions: [1, 2, 3],
      activeSpeed: 3
    };

    const component = mount(<CountdownSpeedButtons {...nextProps} />);

    expect(
      component
        .find("SpeedButton")
        .find("SpeedButton")
        .at(2) // to find 3 speed we need index -1.prop("active")).toEqual(true);
        .prop("active")
    ).toEqual(true);
  });
});
