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
import SideBar from "./Components/SideBarr/SideBarr"
import SideBarr from "./Components/SideBarr/SideBarr";
import PatientsList from "./Components/PatientList/PatientsList";
import DoctorPanel from "./Pages/DoctorPanel";
import { ProSidebarProvider } from "react-pro-sidebar";
function App() {
  return (
    <>
    
      <BrowserRouter>
     
        <NavBarr></NavBarr>
        {/* <Route path="/" element={<SideBarr></SideBarr>}></Route> */}
        <ProSidebarProvider>
        <SideBarr></SideBarr>
        </ProSidebarProvider>
        {/* <PatientsList></PatientsList> */}
        <Routes>
           <Route path="/Login" element={<Login />}></Route>
          <Route path="/PsycologistList" element={<Sign />}></Route>
          {/*<Route path="/SignUp" element={<Sign />}></Route> */}
          {/* <Route path="/MyProfile" element={<Sign />} />
          <Route path="/MyPatientList" element={<Sign />} />
          <Route path="MyPatientRequestList" element={<Sign />} />
          <Route path="/EditMyProfile" element={<PatientsList />} /> */}
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
      
      {/* <NavBarr></NavBarr>
      <SearchBox></SearchBox>
      <ServiceSlide></ServiceSlide>
      <DoctorSlider></DoctorSlider>
      <Footer></Footer> */}
    </>
  );
}
export default App;
