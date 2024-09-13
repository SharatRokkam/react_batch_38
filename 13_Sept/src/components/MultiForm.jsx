import React, { useState } from "react";

const MultiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            value={formData.name}
            name="Name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={formData.email}
            name="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            value={formData.password}
            name="Password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiForm;
