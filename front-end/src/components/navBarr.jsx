import React from "react";
import { Navbar } from "react-bootstrap";
const NavBarr = () => {
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light" dir="rtl" >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              خانه <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              لیست پزشکان
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              درباره ما
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarr;