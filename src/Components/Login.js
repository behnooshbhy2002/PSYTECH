import "./Login.css";
import React, { useState } from "react";
import showPwdImg from "./show-pass.svg";
import hidePwdImg from "./hide-pass.svg";
import { Outlet, Link } from "react-router-dom";

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
    <div className="center">
      <h1>ورود</h1>
      <form action="post">
        <div className="txt_field email">
          <input type="text" value={""} id="email" name="email" />
          <span></span>
          <label>ایمیل یا شماره همراه</label>
        </div>

        <div className="txt_field pass">
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
          <button onClick={() => props.onFormSwitch("Register")}>
            ثبت نام
          </button>
          <span> عضو نشده‌اید؟</span>
        </div>
      </form>
    </div>
  );
}
export default Login;
