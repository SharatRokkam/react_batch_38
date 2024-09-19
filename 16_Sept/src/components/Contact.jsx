import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut itaque ab
        dolores vitae expedita laborum, earum quo aliquid distinctio
        necessitatibus provident maiores, officiis ex architecto dicta ea enim.
        Quae, autem porro quisquam fugiat libero assumenda, dignissimos
        perferendis ipsa quo tempora itaque dicta ex commodi similique, ut
        quidem accusantium qui voluptatem!
      </p>

      <button>
        <NavLink to="address">Email</NavLink>
      </button>
      <button>
        <NavLink to="call">Call Us</NavLink>
      </button>

      <Outlet />
    </>
  );
};

export default Contact;
