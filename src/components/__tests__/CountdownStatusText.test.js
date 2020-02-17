import React from "react";
import CountdownStatusText from "../CountdownStatusText";

describe("CountdownStatusText", () => {
  const props = {
    halfway: 10,
    remainingTime: 20
  };
  const component = mount(<CountdownStatusText {...props} />);

  it("renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("renders correct text when remainingTime === 0", () => {
    const nextProps = {
      ...props,
      remainingTime: 0
    };

    const component = mount(<CountdownStatusText {...nextProps} />);

    expect(
      component
        .find("Text")
        .at(0)
        .prop("red")
    ).toEqual(true);
  });

  it("it starts blinking when remaining time > halfway", () => {
    const nextProps = {
      ...props,
      remainingTime: 5
    };

    const component = mount(<CountdownStatusText {...nextProps} />);

    expect(
      component
        .find("Text")
        .at(0)
        .prop("blinking")
    ).toEqual(true);
  });

  it("doesn't renders when remaining time > halfway", () => {
    const component = mount(<CountdownStatusText {...props} />);

    expect(component.find("Text")).toHaveLength(0);
  });
});
