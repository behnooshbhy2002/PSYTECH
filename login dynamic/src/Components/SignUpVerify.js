import { hover } from "@testing-library/user-event/dist/hover";
import "./style/SignUpVerify.css";
import React, { useState, useEffect } from "react";

function SignUpVerify(props) {
  const [verifyCode, setverifyCode] = useState("");

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log(verifyCode);
  };
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

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
  };
  return (
    <div className="form_model_verify">
      <h1>تایید ایمیل</h1>
      <form action="post">
        <p className="sendCodetxt">
          :کد ارسال شده جهت تایید ایمیل را وارد کنید
        </p>
        <div className="txt_field verifyCode">
          <div className="verifyCode-box">
            <input type="text" value={""} id="verifyCode" name="verifyCode" />
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
  );
}
export default SignUpVerify;
