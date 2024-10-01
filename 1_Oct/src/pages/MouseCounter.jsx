import React from "react";
import withCounter from "./withCounter";

const MouseCounter = (props) => {
  const { count, increment } = props;

  return (
    <>
      <h2>Count : {count}</h2>
      <button onMouseOver={increment}>Increment</button>
    </>
  );
};

export default withCounter(MouseCounter, 10);
