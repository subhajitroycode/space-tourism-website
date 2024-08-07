import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" />
        </NavLink>
      </div>
      <hr />
      <Navbar />
    </header>
  );
};

export default Header;
