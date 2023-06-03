import "../style/Login.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import showPwdImg from "../icons/show-pass.svg";
import hidePwdImg from "../icons/hide-pass.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { login } from "../../actions/userActions";
import { useEffect } from "react";
import Message from "../Error&Loading/Message";
import Loader from "../Error&Loading/Loader";

function Login({ location }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const redirect = location?.search ? location?.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const nav = useNavigate();

  useEffect(() => {
    if (userInfo?.role == "psychologist") {
      nav(`/MyProfile`, { replace: true });
    } else if (userInfo?.role == "patient") {
      nav(`/MyProfileP`, { replace: true });
    } else if (userInfo?.role == "admin") {
      nav(`/Admin-SignUp`, { replace: true });
    } else {
      console.log(userInfo);
    }
  }, [userInfo]);

  const handleSubmmit = (e) => {
    e.preventDefault();
    dispatch(login(email, pwd));
  };
  return (
    <>
    {loading ? <Loader></Loader> : ""}
      {error ? <Message variant='danger'>{error}</Message> : ""}
    <div className="form_model_login">
      <h1>ورود</h1>
      <form action="post" onSubmit={handleSubmmit}>
        <div className="txt_field-login email">
          <input
            type="text"
            value={email}
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
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
          <NavLink to={redirect ? `/SignUp?redirect=${redirect}` : "/SignUp"}>
            <button>ثبت نام</button>
          </NavLink>
        </div>
      </form>
    </div>
    </>
  );
}
export default Login;
