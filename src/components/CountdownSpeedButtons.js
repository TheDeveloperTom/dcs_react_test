import React from "react";

export default ({ setActiveSpeed, speedOptions = [1, 1.5, 2] }) => (
  <>
    {speedOptions.map(speed => (
      <button key={speed} onClick={() => setActiveSpeed(speed)}>
        {speed}x
      </button>
    ))}
  </>
);
