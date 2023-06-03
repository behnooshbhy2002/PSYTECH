import React, { useEffect } from "react";
import "../Components/style/ProfileDetail.css";
import pic from "../images/ali-hemati.png";
import { getDrProfile } from "../actions/doctorActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SideBarr from "../Components/SideBarr/SideBarr";
import Loader from "../Components/Error&Loading/Loader";
import Message from "../Components/Error&Loading/Message";
import { useNavigate } from "react-router-dom";

function DRProfile() {
  const navigate = useNavigate();
  const [namee, setName] = useState("");
  const [score, setScore] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [experiment, setExperiment] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("../Login");
      //history.push("/login");
    } else {
      if (!user || !user.full_name) {
        const id = userInfo?.id;
        const par = `?id=${id}`;
        console.log(user, user?.full_name);
        dispatch(getDrProfile(par, userInfo));
      } else {
        setImg(user.image);
        setName(user.full_name);
        setPhone(user.phone_number);
        setEmail(user.email);
        setEducation(user.specialist);
        setScore(user.rate);
        setCode(user.medical_number);
        setAddress(user.address);
        setExperiment(user.experience);
      }
    }
  }, [dispatch, userInfo, user]);

   useEffect(() => {
    
  },);

  return (
    <>
      {!userInfo ? (
        <div>
          <Message>دسترسی غیرمجاز</Message>
        </div>
      ) : (
        <div className="Kharrr">
          <SideBarr></SideBarr>
          <div className="Kharrrchild">
            <div className="profile-container">
              <img
                className="profilePicture"
                src={!img ? img : pic}
                alt=""
              ></img>
              <div className="personData" dir="rtl">
                <div className="default-data">
                  <p>نام و نام خانوادگی:</p>
                  <p>تخصص: </p>
                  <p>شماره نظام پزشکی:</p>
                  <p>آدرس:</p>
                  <br />
                  <br />
                  <p>شماره تلفن:</p>
                  <p>ایمیل:</p>
                  <p>تجربه:</p>
                  <p>امتیاز:</p>
                </div>
                <div className="data-doctor">
                  <p> {namee}</p>
                  <p>{education ? education : "اطلاعات وارد نشده"}</p>
                  <p>{code}</p>
                  <p>{address ? address : "اطلاعات وارد نشده"}</p>

                  {address ? "" : <br></br>}
                  <br></br>
                  <br></br>
                  <p>{phone}</p>
                  <p>{email}</p>
                  <p>{experiment ? experiment : "اطلاعات وارد نشده"}</p>
                  <p>{score ? score : "امتیازی ثبت نشده"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// const Profile = ({name,education,code,address,telephone,email,experiment,Password,score}) => {
//   return (

//   );
// };

export default DRProfile;
