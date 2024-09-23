import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ name }) => {
  return (
    <>
      <GrandChild name={name} />
    </>
  );
};

export default Child;
