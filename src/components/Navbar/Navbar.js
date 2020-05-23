import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="navbar-list">
        <li>
          <a className="navbar-item" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-item" href="/">
            About
          </a>
        </li>
        <li>
          <a className="navbar-item active" href="/">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
