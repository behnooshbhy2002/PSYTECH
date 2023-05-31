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
import DoctorPanel from "./Pages/DoctorPanel";
import { ProSidebarProvider } from "react-pro-sidebar";
import PatientsList from "./Components/PatientList/PatientsList";
import PatientsRequestList from "./Components/PatientRequestList/PatientsRequestList";
import DrEditProfile from "./Pages/DrEditProfile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import DRProfile from "./Pages/DRProfile";
import CaseHistory from "./Pages/CaseHistory";
import AudioRecorderr from "./Components/componentss/AudioRecorderr";
function App() {
  return (
    <>
      <div className="main-div-body">
        <BrowserRouter>
          <NavBarr></NavBarr>
          {/* <SideBarr></SideBarr> */}
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
            <Route
              path="/sideBar"
              element={
                <ProSidebarProvider>
                  {/* <DoctorPanel></DoctorPanel> */}
                  <SideBarr></SideBarr>
                </ProSidebarProvider>
              }
            ></Route>
            <Route path="/MyProfile" element={<DRProfile />} />
            <Route path="/MyPatientnList" element={<PatientsList />} />
            <Route
              path="/MyPatientRequestList"
              element={<PatientsRequestList />}
            />
            <Route path="/EditMyProfile" element={<DrEditProfile />} />

            <Route path="/Home" element={<Home />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        {/* <NavBarr></NavBarr>
      <SearchBox></SearchBox>
      <ServiceSlide></ServiceSlide>
      <DoctorSlider></DoctorSlider>
      <Footer></Footer> */}
      </div>
    </>
  );
}
export default App;
