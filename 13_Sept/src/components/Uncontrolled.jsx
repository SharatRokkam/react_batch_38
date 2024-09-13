import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${inputRef.current.value}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
