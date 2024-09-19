import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayPage = ({ formData }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Submitted Data</h1>

      {/* Loop through formData to display all submitted entries */}
      {formData.map((data, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Department:</strong> {data.department}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating}
          </p>
          <hr />
        </div>
      ))}

      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default DisplayPage;
