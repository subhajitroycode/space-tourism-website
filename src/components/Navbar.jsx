import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <ul className={`navbar-list ${openMenu && "active"}`}>
        <li>
          <NavLink to="/" onClick={() => setOpenMenu(false)}>
            <span>00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination" onClick={() => setOpenMenu(false)}>
            <span>01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" onClick={() => setOpenMenu(false)}>
            <span>02</span> Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology" onClick={() => setOpenMenu(false)}>
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
      <div className="mobile-navbar-btn" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <img src="/icon-close.svg" alt="hamburger icon" />
        ) : (
          <img src="/icon-hamburger.svg" alt="close icon" />
        )}
      </div>
    </>
  );
};

export default Navbar;
