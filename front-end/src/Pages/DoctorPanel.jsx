import SideBarr from "../Components/SideBarr/SideBarr";
import NavBarr from "../Components/MainPage/navBarr";
import Footer from "../Components/MainPage/footerr";
import PatientsList from "../Components/PatientList/PatientsList";
import React from "react";
import { BrowserRouter, Router, Route, Routes, Outlet } from "react-router-dom";
import Sign from "../Components/Authentication/SignUp";
import Login from "../Components/Authentication/Login";

function DoctorPanel() {
  return (
    <>
      <SideBarr></SideBarr>
    </>
  );
}
export default DoctorPanel;
