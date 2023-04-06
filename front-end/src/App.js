import React from "react";
import NavBarr from "./components/navBarr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footerr";
import './App.css';
import './components/footerStyle.css';
import SearchBox from './components/SearchBox';
import ServiceSlide from "./components/ServiceSlide";
import TextExample from './components/serviceCard'

function App()
{
    return (
        <>
        <NavBarr></NavBarr>
        <SearchBox>Hiii</SearchBox>
        <ServiceSlide/>
       <Footer></Footer>
        </>

)
 }
export default App;