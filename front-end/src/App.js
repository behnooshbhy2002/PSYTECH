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
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarr></NavBarr>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/PsycologistList" element={<Card />}></Route>
          <Route path="/SignUp" element={<Sign />}></Route>
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
