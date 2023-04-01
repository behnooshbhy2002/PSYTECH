import React from "react";
import { Navbar, Container,Nav,Button} from "react-bootstrap";
import logo from '../images/logo.png';
import './navBarStyle.css';
import { useState,useEffect } from "react";


const NavBarr = () => {
  const [activeLink,setActiveLink]= useState('home');
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll=() => {
      if(window.scrollY>50) {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll",onScroll);
  },[])

  const onUpdateActiveLink =(value) =>{
           setActiveLink(value);
  }
  return (
        <Navbar expand="lg" className="navbar" bg="light" >
           <Navbar.Brand href="#home"><img className="logo"src={logo} alt="logo"/></Navbar.Brand>
          <Container>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  href="#about" classsName='i'>درباره ما</Nav.Link>
                <Nav.Link  href="#contact" classsName='i'>تماس با ما</Nav.Link>
                <Nav.Link  href="#list" classsName='i'>لیست</Nav.Link>
                <Nav.Link  href="#home" classsName='i'>خانه</Nav.Link>
              </Nav> 
            </Navbar.Collapse>
            
            <button  class="login">ورود</button>{' '}
            <button  class="signup">ثبت نام</button>
          </Container>
        </Navbar>
      );
    }
    


export default NavBarr;