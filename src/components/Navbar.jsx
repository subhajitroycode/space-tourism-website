import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu-icon">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">
            <span>00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <span>01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <span>02</span> Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
