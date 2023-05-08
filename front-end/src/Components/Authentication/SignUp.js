import "../style/SignUp.css";
import Loader from "../Error&Loading/Loader";
import Message from "../Error&Loading/Message";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { registerDr, registerPatient } from "../../actions/userActions";
function Sign({ location, history }) {
  const [role, setRole] = useState("dr");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [medicalNum, setMedicalNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location?.search ? location?.search.split("=")[1] : "/";

  const userRegisterDr = useSelector((state) => state.userRegisterDr);
  const { errorDr, loadingDr, userInfoDr } = userRegisterDr;

  const userRegisterPatient = useSelector((state) => state.userRegisterPatient);
  const { errorPatient, loadingPatient, userInfoPatient } = userRegisterPatient;

  useEffect(() => {
    if (userInfoDr) {
      history.push(redirect);
    }
  }, [history, userInfoDr, redirect]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (password != confirmPass) {
      setMessage("رمز عبور مطابقت ندارد ");
    } else {
      if (role == "dr") {
        dispatch(
          registerDr(fullname, phonenumber, email, gender, medicalNum, password)
        );
      } else {
        dispatch(
          registerPatient(fullname, phonenumber, email, gender, password)
        );
      }
    }
  };

  const resetForm = () => {
    setFullname("");
    setPhoneNumber("");
    setEmail("");
    setGender("default");
    setMedicalNum("");
    setPassword("");
    setConfirmPass("");
    setMessage("");
  };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   const event = {
  //     role: role,
  //     fullname: fullname,
  //     phonenumber: phonenumber,
  //     email: email,
  //     gender: gender,
  //     medicalNum: medicalNum,
  //     password: password,
  //   };
  //   console.log(event);
  //   resetForm();
  // };
  const togglePsignup = () => {
    setRole("patient");
    console.log(role);
    document.getElementById("DrSignup-toggle").style.background = "#fff";
    document.getElementById("DrSignup-toggle").style.color = "#222";
    document.getElementById("Psignup-toggle").style.background = "#9F74F2";
    document.getElementById("Psignup-toggle").style.color = "#fff";
    document.getElementById("medicalNum").style.display = "none";
    resetForm();
  };
  const toggleDrSignup = () => {
    setRole("dr");
    console.log(role);
    document.getElementById("DrSignup-toggle").style.background = "#9F74F2";
    document.getElementById("DrSignup-toggle").style.color = "#fff";
    document.getElementById("Psignup-toggle").style.background = "#fff";
    document.getElementById("Psignup-toggle").style.color = "#222";
    document.getElementById("medicalNum").style.display = "block";
    resetForm();
  };
  return (
    <>
      <div className="signUPcontainer">
        <section class="form_model_signup">
          <div class="form_toggle_signup">
            <button id="DrSignup-toggle" onClick={toggleDrSignup}>
              ثبت نام پزشک
            </button>
            <button id="Psignup-toggle" onClick={togglePsignup}>
              ثبت نام بیمار
            </button>
          </div>
          <div>
            {message && <Message variant="danger">{message}</Message>}
            {loadingDr && <Loader></Loader>}
            {errorDr && <Message variant="danger">{errorDr}</Message>}
            {loadingPatient && <Loader></Loader>}
            {errorPatient && <Message variant="danger">{errorPatient}</Message>}
          </div>

          <div id="DrSignup-form">
            <form action="main page.php" id="signup1" onSubmit={handlesubmit}>
              <input
                className="signup_txt_field"
                type="text"
                placeholder="نام و نام خانوادگی"
                name=""
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                value={fullname}
              />
              <input
                type="text"
                placeholder="شماره تلفن همراه"
                name=""
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                value={phonenumber}
              />
              <input
                type="email"
                placeholder="ایمیل"
                name=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <select
                id="gender"
                form="signup1"
                name=""
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}
              >
                <option value="default" hidden>
                  جنسیت
                </option>
                <option value="1">مرد</option>
                <option value="2">زن</option>
              </select>
              <input
                type="text"
                placeholder="شماره نظام پزشکی"
                name=""
                onChange={(e) => {
                  setMedicalNum(e.target.value);
                }}
                value={medicalNum}
                id="medicalNum"
              />
              <input
                type="password"
                placeholder="رمز"
                name=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <input
                type="password"
                placeholder="تکرار رمز"
                name=""
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                value={confirmPass}
              />
              <button type="submit" class="signUp-btn">
                ثبت اطلاعات
              </button>
              <div className="login_link">
                <span> اکانت دارید؟</span>
                <NavLink
                  to={redirect ? `/Login?redirect=${redirect}` : "/Login"}
                >
                  <button>ورود </button>
                </NavLink>
              </div>
              {/* <p>
                کلیک کردن روی <strong> ثبت اطلاعات </strong> به این معنی است که
                شما با <a href="#">شرایط خدمات</a> موافق هستید.
              </p> */}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default Sign;