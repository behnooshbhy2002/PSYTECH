import React from "react";
import logo from "../../images/logo.png";
import "../style/navBar.css";
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../actions/userActions";
const NavBarr = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  // const logoutHandeler = () => {
  //   dispatch(logout());
  // };

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
        <NavLink to='/AboutUs' className="list">درباره ما</NavLink>
        <NavLink to='/Rules' className="list"> قوانین </NavLink>

        <NavLink to="/SignUp">
          <button id="signup">ثبت نام</button>
        </NavLink>
        {userInfo?.role=="patient" ? (
          <NavLink to="/MyProfileP">
            <button id="login"> پروفایل </button>
          </NavLink>
        ) : userInfo?.role=="psychologist" ? (
          <NavLink to="/MyProfile">
            <button id="login"> پروفایل دکتر </button>
          </NavLink>
        ): userInfo?.role=="admin" ? (
          <NavLink to="/Admin-SignUp">
            <button id="login">پروفایل ادمین</button>
          </NavLink>
        ) : (
          <NavLink to="/Login">
            <button id="login">ورود</button>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default NavBarr;
