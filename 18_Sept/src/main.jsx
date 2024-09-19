import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ContactUs from "./components/ContactUs.jsx";
import Address from "./components/Address.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />}>
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="address" element={<Address />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
