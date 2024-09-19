import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <button>
        <NavLink to="contact-us">Contact Us</NavLink>
      </button>
      <button>
        <NavLink to="address">Address </NavLink>
      </button>

      <Outlet />
    </>
  );
};

export default Contact;
