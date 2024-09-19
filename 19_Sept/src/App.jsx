import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import DisplayPage from "./pages/DisplayPage";

const App = () => {
  const [formData, setFormData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage setFormData={setFormData} />} />

          <Route
            path="/display"
            element={<DisplayPage formData={formData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
