import React from "react";

const TodoItem = ({ task, deleteTodo, toggleComplete }) => {
  return (
    <>
      <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.input}
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </li>
    </>
  );
};

export default TodoItem;
