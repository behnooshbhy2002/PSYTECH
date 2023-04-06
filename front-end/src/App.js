import React from "react";
import NavBarr from "./components/navBarr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footerr";
import './App.css';
import './components/footerStyle.css'
import DoctorSlider from './components/doctorSlider'
import './components/doctorSlider.css'
function App()
{
    return (
        <>
        <NavBarr></NavBarr>
        <DoctorSlider></DoctorSlider>
       <Footer></Footer>
        </>

)
 }
export default App;