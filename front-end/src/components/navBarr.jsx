import React from "react";
import logo from '../images/logo.png';
import './navBar.css';

const NavBarr = () => {
  return(
     <div  className="navbar-div" dir="rtl">  
    <ul >
    <img src={logo} className="navbar-logo"/>
    <li className="list">خانه</li>
    <li className="list">لیست مشاوران</li>
    <li className="list">درباره ما</li>
    <li className="list">تماس با ما</li>
    <button id="signup">ثبت نام</button>
    <button id="login">ورود</button>
   </ul>
   </div>
  )
    }
    


export default NavBarr;