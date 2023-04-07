import React from "react";
import NavBarr from "./components/navBarr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footerr";
import './App.css';
import './components/footerStyle.css'
import DoctorSlider from './components/doctorSlider'
import './components/doctorSlider.css'
import ServiceSlide from './components/ServiceSlide'
import SearchBox from "./components/SearchBox";
function App()
{
    return (
        <>
        <NavBarr></NavBarr>
        <br></br>
        <SearchBox></SearchBox>
        <ServiceSlide></ServiceSlide>
        <DoctorSlider></DoctorSlider>
       <Footer></Footer>
        </>

)
 }
export default App;