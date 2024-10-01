import React from "react";

const Button = ({ incrementCount }) => {
  console.log("inside button");

  return (
    <>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
};

export default React.memo(Button);
