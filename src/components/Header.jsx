import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="/logo.svg" alt="logo" />
          </NavLink>
        </div>
        <hr />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
