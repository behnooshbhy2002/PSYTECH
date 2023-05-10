import { Sidebar, Menu, MenuItem ,useProSidebar } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import '../style/SideBarr.css'
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Routes , NavLink , } from "react-router-dom";
import PatientList from '../PatientList/PatientsList'
import Sign from "../Authentication/SignUp";
import Home from "../../Pages/Home";
function SideBarr()
{
  // const [width, setWidth]=useState("")
  // const [hamber , setHamber] = useState(true);
  // function handelHamburgerMenu(){
  //   if(hamber){
  //     console.log('open')
  //     document.getElementById('profile-sidebar').style.display='none';
  //     document.getElementById('patient-sidebar').style.display='none';
  //     document.getElementById('patient-req-sidebar').style.display='none';
  //     document.getElementById('logout-sidebar').style.display='none';
  //     document.getElementById('edit-sidebar').style.display='none';

  //   }
  //   else{
  //     document.getElementById('profile-sidebar').style.display='inline';
  //     document.getElementById('patient-sidebar').style.display='inline';
  //     document.getElementById('patient-req-sidebar').style.display='inline';
  //     document.getElementById('logout-sidebar').style.display='inline';
  //     document.getElementById('edit-sidebar').style.display='inline';
  //   }
  //   setHamber(!hamber);
  // }
  return(  
        <div className="div-sidebar-cont" style={{ display: "flex" , direction:'rtl' }}>
          
          <ProSidebarProvider className="sidebar-containar"  >
            
          <Sidebar className="sidebar-containar">
            <div className="sidebar-div-menu">
            <h3>Psytech</h3>
            </div>       
            <Menu menuItemStyles={{
  button: {
        backgroundColor: '9a46e',
        '&:hover': {
           backgroundColor: '#9a46e8',
           color:'white'
        },
    },
}}>
              <MenuItem component={<NavLink to="/MyProfile" className="link" />} icon={<AccountCircleRoundedIcon /> } className="sidebar-item"> <div id='profile-sidebar'>پروفایل من</div> </MenuItem>
              <MenuItem component={<NavLink to="/MyPatientnList" className="link" />} icon={<ReceiptRoundedIcon />} className="sidebar-item"> <div id='patient-sidebar'>بیمارهای من </div></MenuItem>
              <MenuItem component={<NavLink to="/MyPatientRequestList" className="link" />} icon={<NotificationsRoundedIcon />} className="sidebar-item"> <div id='patient-req-sidebar'>درخواست های من </div></MenuItem>
              <MenuItem component={<NavLink to="/EditMyProfile"/>} icon={<DriveFileRenameOutlineRoundedIcon/>} className="sidebar-item"><div id='edit-sidebar'> ویرایش پروفایل </div></MenuItem>
              <MenuItem component={<NavLink to="/Home" className="link" />} icon={<LogoutRoundedIcon />} className="sidebar-item"> <div id='logout-sidebar'>خروج </div></MenuItem>
            </Menu>
          </Sidebar>
          </ProSidebarProvider>
          <section className="section-sidebar">
        <Routes>
          <Route path="/MyProfile" element={<Sign />} />
          <Route path="/MyPatientList" element={<PatientList />} />
          <Route path="MyPatientRequestList" element={<PatientList />} />
          <Route path="/EditMyProfile" element={<PatientList />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </section>
        </div>
      );
}
export default SideBarr;