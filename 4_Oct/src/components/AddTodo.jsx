import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <h2>Todo Application</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTodo;
