import { hover } from "@testing-library/user-event/dist/hover";
import "../style/SignUpVerify.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../actions/userActions";
import axios from "axios";
import { useNavigate } from "react-router";
import Message from "../Error&Loading/Message";
import { Error } from "@mui/icons-material";

function SignUpVerify() {
  const [verifyCode, setverifyCode] = useState("");
  const dispatch = useDispatch();

  const email = localStorage.getItem("verifyEmail");
  const handleSubmmit = (e) => {
    e.preventDefault();
    //console.log(verifyCode);
    //console.log(email);
    let x = email.substring(1, email.length - 1);
    console.log(x);
    dispatch(verify(verifyCode, x));
  };

  const userSignUpVerify = useSelector((state) => state.userSignUpVerify);
  let { error, loading, result } = userSignUpVerify;
  //console.log(result?.data)
  const nav = useNavigate();
  let massage;
  if (result?.data == "valid otp") {
    nav("/", { replace: true });
  } else {
    massage = result?.data;
  }

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
    let x = email.substring(1, email.length - 1);
    const { data } = axios
      .post("http://127.0.0.1:8000/accounts/resend_otp/", { email: x })
      .then((response) => {
        console.log(response);
        if (response?.data == "valid otp") {
          nav("/", { replace: true });
        } else {
          massage = "wrong otp";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : loading ? (
        <loading></loading>
      ) : (
        ""
      )}
      <div className="form_model_verify">
        <h1>تایید ایمیل</h1>
        <form action="post" onSubmit={handleSubmmit}>
          <p className="sendCodetxt">
            کد ارسال شده جهت تایید ایمیل را وارد کنید:
          </p>
          <div className="txt_field verifyCode">
            <div className="verifyCode-box">
              <input
                type="text"
                value={verifyCode}
                id="verifyCode"
                name="verifyCode"
                onChange={(e) => setverifyCode(e.target.value)}
              />
              <span></span>
              <label>کد تایید</label>
            </div>
            <div className="countdown-text">
              {seconds > 0 || minutes > 0 ? (
                <p className="signup-timer">
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <button className="verify_code" type="submit">
            تایید ایمیل
          </button>

          {/* <p className="getCodeAgain">دریافت مجدد کد تاییدیه</p> */}
          <p
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#adadad" : "#2691d9",
            }}
            onClick={resendOTP}
            className="getCodeAgain"
          >
            دریافت مجدد کد تاییدیه
          </p>
        </form>
      </div>
    </>
  );
}
export default SignUpVerify;
