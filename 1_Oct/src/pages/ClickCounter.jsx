import React from "react";
import withCounter from "./withCounter";
import withName from "./withName";

const ClickCounter = (props) => {
  const { count, increment, withName } = props;

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <div>{withName}</div>
    </>
  );
};

export default withName(withCounter(ClickCounter, 5));
