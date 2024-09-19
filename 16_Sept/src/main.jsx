import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Call from "./pages/Call.jsx";
import Address from "./pages/Address.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />}>
        <Route path="address" element={<Address />} />
        <Route path="call" element={<Call />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<h2>Sorry ! Page Not Found</h2>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
