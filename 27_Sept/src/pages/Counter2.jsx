import useCounter from "./useCounter";

const Counter1 = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Count : {count}</h1>
      <button onMouseOver={increment}>Increment</button>
      <button onMouseOver={decrement}>Decrement</button>
    </>
  );
};

export default Counter1;
