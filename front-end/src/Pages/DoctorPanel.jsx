import SideBarr from "../Components/SideBarr/SideBarr";
import NavBarr from "../Components/MainPage/navBarr";
import Footer from "../Components/MainPage/footerr";
import PatientsList from "../Components/PatientList/PatientsList";
import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Sign from "../Components/Authentication/SignUp";
import Login from "../Components/Authentication/Login";

function DoctorPanel()
{
<><BrowserRouter>
        <NavBarr></NavBarr>
        {/* <Route path="/" element={<SideBarr></SideBarr>}></Route> */}
        <SideBarr></SideBarr>
        {/* <PatientsList></PatientsList> */}
        
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/PsycologistList" element={<PatientsList />}></Route>
          <Route path="/SignUp" element={<Sign />}></Route>
          {/* <Route path="/MyProfile" element={<Sign />} />
          <Route path="/MyPatientList" element={<Sign />} />
          <Route path="MyPatientRequestList" element={<Sign />} />
          <Route path="/EditMyProfile" element={<PatientsList />} /> */}
          <Route path="/Home" element={<PatientsList />} />
        </Routes>
        
        <Footer></Footer>
        </BrowserRouter>
     </>
}
export default DoctorPanel;