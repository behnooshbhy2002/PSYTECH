import React, { useEffect } from "react";
import pic from "../../images/maryam-montazeri.png";
//import { getProfileDR } from "../actions/userActions";
import "../style/ProfileDetail.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SideBarrPatient from "./SideBarrPatient";
//import Loader from "../Components/Error&Loading/Loader";
//import Message from "../Components/Error&Loading/Message";
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const smapleUser = {
    name: "فائزه صالحی",
    phone: "0912 456 9222",
    email: "tzirw@example.com",
    gender: "خانم",
  };
  //   const dispatch = useDispatch();

  //   const userProfile = useSelector((state) => state.userProfile);
  //   const { error, loading, user } = userProfile;

  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  //   useEffect(() => {
  //     if (!userInfo) {
  //       navigate("../Login");

  //     } else {
  //       if (!user || !user.name) {
  //         dispatch(getProfileDR("profile"));
  //       } else {
  //         setName(user.name);
  //         setPhone(user.phone);
  //         setEmail(user.email);
  //         setGender(user.gender);
  //     }
  //   }, [dispatch, userInfo, user]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.get("https://api.example.com/user-profile", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       // setUserProfile(response.data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <>
      <div className="Kharrr">
        <SideBarrPatient></SideBarrPatient>
        <div className="Kharrrchild">
          <div className="profile-container">
            <img className="profilePicture" src={pic} alt=""></img>
            <Profile
              name={smapleUser.name}
              phone={smapleUser.phone}
              email={smapleUser.email}
              gender={smapleUser.gender}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const Profile = ({ name, phone, email, gender }) => {
  return (
    <div className="personData" dir="rtl">
      <div className="default-data">
        <p>نام و نام خانوادگی:</p>
        <p>شماره موبایل:</p>
        <p>ایمیل:</p>
        <p>جنسیت:</p>
      </div>
      <div className="data-doctor">
        <p> {name}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default UserProfile;
