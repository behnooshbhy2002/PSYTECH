import React, { useEffect } from "react";
import pic from "../../images/maryam-montazeri.png";
import { getUserProfile } from "../../actions/userActions";
import "../style/ProfileDetail.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SideBarrPatient from "./SideBarrPatient";
import Loader from "../Error&Loading/Loader";
import Message from "../Error&Loading/Message";
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
        dispatch(getUserProfile(par, userInfo));
      } else {
        setName(user.full_name);
        setPhone(user.phone_number);
        setEmail(user.email);
        setGender(user.gender);
      }
    }
  }, [dispatch, userInfo, user]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.example.com/user-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getUserProfile(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Kharrr">
        <SideBarrPatient></SideBarrPatient>
        <div className="Kharrrchild">
          <div className="profile-container">
            <img className="profilePicture" src={pic} alt=""></img>
            <Profile name={name} phone={phone} email={email} gender={gender} />
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
