import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login";
import Sign from "./Components/Authentication/SignUp";
import SignUpVerify from "./Components/Authentication/SignUpVerify";
import NavBarr from "./Components/MainPage/navBarr";
import SearchBox from "./Components/MainPage/SearchBox";
import DoctorSlider from "./Components/MainPage/doctorSlider";
import ServiceSlide from "./Components/MainPage/ServiceSlide";
import Footer from "./Components/MainPage/footerr";
import Card from "./Components/PsyList/Card";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AdminAdmitDrSignUp from "./Pages/AdminAdmitDrSignUp";
import DoctorPageDetail from "./Pages/DoctorPageDetail";
import SideBarr from "./Components/SideBarr/SideBarr";
// import DoctorPanel from "./Pages/DoctorPanel";
import { ProSidebarProvider } from "react-pro-sidebar";
// import PatientsList from "./Components/PatientList/PatientsList";
// import PatientsRequestList from "./Components/PatientRequestList/PatientsRequestList";
// import DrEditProfile from "./Pages/DrEditProfile";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";
// import DRProfile from "./Pages/DRProfile";
// import CaseHistory from "./Pages/CaseHistory";
// import AudioRecorderr from "./Components/componentss/AudioRecorderr";
// import SideBarrPatient from "./Components/PatientPanel/SideBarrPatient";
import PatientsRequestList from "./Components/PatientRequestList/PatientsRequestList";
import DrEditProfile from "./Pages/DrEditProfile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import DRProfile from "./Pages/DRProfile";
import CaseHistory from "./Pages/CaseHistory";
import AudioRecorderr from "./Components/componentss/AudioRecorderr";
import PatientProfile from "./Pages/PatientProfile";

import DoctorList from "./Components/PatientPanel/DoctorList";
import PPanelDoctorCard from "./Components/PatientPanel/PPanelDoctorCard";
import PPanelReqList from "./Components/PatientPanel/PPanelReqList";
import SideBarrPatient from "./Components/PatientPanel/SideBarrPatient";
import UserEditProfile from "./Components/PatientPanel/UserEditProfile";
import UserProfile from "./Components/PatientPanel/UserProfile";
import Rulse from "./Components/MainPage/Rules";
import AboutUs from "./Components/MainPage/AboutUs";
import RecipeHistory from "./Pages/recipeHistory/DrrecipeHistory";

function App() {
  return (
    <>
      <div className="main-div-body">
        <BrowserRouter>
          <NavBarr></NavBarr>
          <Routes>
            <Route path="/MyDoctor" element={<DoctorList></DoctorList>}></Route>
            <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/Rules" element={<Rulse></Rulse>}></Route>
            <Route
              path="/PPanelSidebar"
              element={<SideBarrPatient></SideBarrPatient>}
            ></Route>
            <Route
              path="/MyRequestForDoctor"
              element={<PPanelReqList></PPanelReqList>}
            ></Route>
            <Route
              path="/EditMyProfileP"
              element={<UserEditProfile></UserEditProfile>}
            ></Route>
            <Route
              path="/MyProfileP"
              element={<UserProfile></UserProfile>}
            ></Route>
            <Route path="/CaseHistory" element={<CaseHistory />}></Route>
            <Route
              path="/RecipeHistory"
              element={<RecipeHistory></RecipeHistory>}
            ></Route>
          </Routes>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/PsycologistList" element={<Card />}></Route>
            <Route path="/SignUp" element={<Sign />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Edit" element={<CaseHistory />}></Route>

            <Route
              path="/Admin-SignUp"
              element={<AdminAdmitDrSignUp />}
            ></Route>
            <Route path="/signUp-verify" element={<SignUpVerify />}></Route>
            <Route
              path="/PsycologistProfile"
              element={<DoctorPageDetail />}
            ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
