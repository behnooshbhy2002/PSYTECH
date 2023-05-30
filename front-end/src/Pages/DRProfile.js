import React, { useEffect } from "react";
import "../Components/style/ProfileDetail.css";
import pic from "../images/ali-hemati.png";
import { getProfileDR } from "../actions/userActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SideBarr from "../Components/SideBarr/SideBarr";

function DRProfile({ history }) {
  const [name, setName] = useState("");
  const [telephone, settelePhone] = useState("");
  const [score, setScore] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [adress, setAddress] = useState("");
  const [experiment, setExperiment] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const dispatch = useDispatch();

  // const userData = useSelector((state) => state.userData);
  // const { error, loading, user } = userData;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/login");
  //   }
  //   else {
  //     if(!user || !user.name)
  //     {
  //      dispatch(getProfileDR('profile'));
  //     }
  //     else {
  //       setName(user.name)
  //       setPhone(user.phone)
  //       settelePhone(user.telephone)
  //       setEmail(user.email)
  //       setEducation(user.education)
  //       setScore(user.score)
  //       setCode(user.code)
  //       setAddress(user.adress)
  //       setExperiment(user.experiment)
  //     }
  //   }
  // }, [dispatch,history, userInfo, user]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.example.com/user-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserProfile(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Kharrr">
        <SideBarr></SideBarr>
        <div className="Kharrrchild">
          <div className="profile-container">
            <img className="profilePicture" src={pic} alt=""></img>
            <Profile
              name={sampleUser.name}
              phone={sampleUser.phone}
              score={sampleUser.score}
              telephone={sampleUser.telephone}
              education={sampleUser.education}
              code={sampleUser.code}
              address={sampleUser.address}
              email={sampleUser.email}
              experiment={sampleUser.experiment}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const sampleUser = {
  name: "علی قربانی",
  education: "ارشد بالینی",
  code: "2256748",
  address: "باغ فیض، جنب امام زاده حمیده خاتون، موسسه تحقیقات حجامت ایران",
  telephone: "+972-888-0",
  phone: "098-333-45-67",
  email: "ali@gmail.com",
  experiment: "20سال",
  score: "4.1",
};

const Profile = ({
  name,
  education,
  code,
  address,
  telephone,
  phone,
  email,
  experiment,
  Password,
  score,
}) => {
  return (
    <div className="personData" dir="rtl">
      <div className="default-data">
        <p>نام و نام خانوادگی:</p>
        <p>تحصیلات:</p>
        <p>شماره نظام پزشکی:</p>
        <p>آدرس:</p>
        <br />
        <br />
        <p>شماره تلفن:</p>
        <p>شماره موبایل:</p>
        <p>ایمیل:</p>
        <p>تجربه:</p>
        <p>امتیاز:</p>
      </div>
      <div className="data-doctor">
        <p> {name}</p>
        <p>{education}</p>
        <p>{code}</p>
        <p>{address}</p>
        <br></br>
        <p>{telephone}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{experiment}</p>
        <p>{Password}</p>
        <p>{score}</p>
      </div>
    </div>
  );
};

const personData = {
  name: String,
  education: String,
  code: String,
  email: String,
  phone: String,
  telephone: String,
  address: String,
  experiment: String,
  Password: String,
  score: String,
};

export default DRProfile;
