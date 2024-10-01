import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveValue(num) {
    console.log("inside expensive calculation");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  let doubledValue = useMemo(() => expensiveValue(input), [input]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>Count : {count}</h3>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Value : {doubledValue}</div>
    </>
  );
};

export default App;


// useCallback :
