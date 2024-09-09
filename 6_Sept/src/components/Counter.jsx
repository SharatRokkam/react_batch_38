import { useState } from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//named and default

const Counter = () => {
  // Syntax
  //   const [variable, setterFunction] = useState(initialState);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      {/* <button onClick={decrement}>Decrement</button> */}
    </div>
  );
};

export default Counter;
