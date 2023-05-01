import "./style/SignUp.css";
import { useState } from "react";
function Sign() {
  const [role, setRole] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [medicalNum, setMedicalNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const resetForm = () => {
    // setRole("dr");
    setFullname("");
    setPhoneNumber("");
    setEmail("");
    setGender("default");
    setMedicalNum("");
    setPassword("");
    setConfirmPass("");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const event = {
      role: role,
      fullname: fullname,
      phonenumber: phonenumber,
      email: email,
      gender: gender,
      medicalNum: medicalNum,
      password: password,
    };
    console.log(event);
    resetForm();
  };
  const togglePsignup = () => {
    setRole("patient");
    console.log(role);
    document.getElementById("DrSignup-toggle").style.background = "#fff";
    document.getElementById("DrSignup-toggle").style.color = "#222";
    document.getElementById("Psignup-toggle").style.background = "#9F74F2";
    document.getElementById("Psignup-toggle").style.color = "#fff";
    document.getElementById("medicalNum").style.display = "none";
    resetForm();
    // document.getElementById("DrSignup-form").style.display = "none";
    // document.getElementById("Psignup-form").style.display = "block";
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
    // document.getElementById("Psignup-form").style.display = "none";
    // document.getElementById("DrSignup-form").style.display = "block";
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
              <button type="submit" class="btn login">
                ثبت اطلاعات
              </button>
              <p>
                کلیک کردن روی <strong> ثبت اطلاعات </strong> به این معنی است که
                شما با <a href="#">شرایط خدمات</a> موافق هستید.
              </p>
            </form>
          </div>
          <p>
            {" "}
            name : {fullname} , email : {email}
            gender : {gender}
          </p>
        </section>
      </div>
    </>
  );
}
export default Sign;
