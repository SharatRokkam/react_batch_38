import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = ({ setFormData }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new form data to the previous data using the setter
    setFormData((prevData) => [...prevData, { name, department, rating }]);
    // setFormData({ name, department, rating });
    navigate("/display");
  };

  return (
    <div>
      <h1>Employee Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            placeholder="Enter your department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            placeholder="Enter your rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
