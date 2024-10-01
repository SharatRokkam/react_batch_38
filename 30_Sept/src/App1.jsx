import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";

const App1 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log("inside the useEffect");
  }, [incrementCount]);

  return (
    <>
      <h1>count : {count}</h1>
      <Button incrementCount={incrementCount} />
    </>
  );
};

export default App1;
