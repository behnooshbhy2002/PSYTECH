import "../style/Login.css";
import React, { useState } from "react";
import showPwdImg from "../icons/show-pass.svg";
import hidePwdImg from "../icons/hide-pass.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
function Login(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="form_model_login">
      <h1>ورود</h1>
      <form action="post">
        <div className="txt_field-login email">
          <input
            type="text"
            value={email}
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <span></span>
          <label>ایمیل یا شماره همراه</label>
        </div>

        <div className="txt_field-login pass">
          <input
            type={passwordShown ? "text" : "password"}
            spellCheck="false"
            id="id_password"
            value={pwd}
            name="password"
            onChange={(e) => setPwd(e.target.value)}
          />
          <span></span>
          <label>رمز عبور</label>

          <span className="show-hide">
            <img
              className="icon"
              title={passwordShown ? "Hide password" : "Show password"}
              src={passwordShown ? hidePwdImg : showPwdImg}
              onClick={() => setPasswordShown((prevState) => !prevState)}
            />
          </span>
        </div>

        <div className="forPass">
          <a href="#">رمز عبور خود را فراموش کرده‌اید؟</a>
        </div>

        <button className="login" type="submit">
          ورود
        </button>
        <div className="signup_link">
          <span> عضو نشده‌اید؟</span>
          <NavLink to="/SignUp">
            <button>ثبت نام</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
export default Login;
