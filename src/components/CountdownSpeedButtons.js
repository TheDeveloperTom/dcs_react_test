import React from "react";

export default ({ setActiveSpeed }) => (
  <>
    <button onClick={() => setActiveSpeed(1)}>1x</button>
    <button onClick={() => setActiveSpeed(1.5)}>1.5x</button>
    <button onClick={() => setActiveSpeed(2)}>2x</button>
    <button onClick={() => setActiveSpeed(10)}>10x</button>
  </>
);
