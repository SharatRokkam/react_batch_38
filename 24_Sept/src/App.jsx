import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Reviews from "./pages/Reviews";
import Specification from "./pages/Specification";

// Static and Dynamic Routing

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dynamic Routing  */}
          <Route path="/product/:id" element={<ProductDetails />}>
            {/* Nested Routing  */}
            <Route path="reviews" element={<Reviews />} />
            <Route path="specification" element={<Specification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
