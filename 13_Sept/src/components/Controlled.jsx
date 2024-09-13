import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    //it prevents the form to get submitted automatically
    e.preventDefault();
    alert(`Name is ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Controlled;
