import React from "react";
import logo from "../../images/logo.png";
import "../style/navBar.css";
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";

const NavBarr = () => {
  return (
    <div className="navbar-div" dir="rtl">
      <ul>
        <img src={logo} className="navbar-logo" />
        <NavLink to="/" className="list">
          <li>خانه</li>
        </NavLink>
        <NavLink to="/PsycologistList" className="list">
          لیست مشاوران
        </NavLink>
        <NavLink className="list">درباره ما</NavLink>
        <NavLink className="list">تماس با ما</NavLink>
        <NavLink to="/Login">
          <button id="login">ورود</button>
        </NavLink>
        <NavLink to="/SignUp">
          <button id="signup">ثبت نام</button>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBarr;
