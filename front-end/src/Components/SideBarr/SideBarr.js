import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../style/SideBarr.css";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import PatientList from "../PatientList/PatientsList";
import Sign from "../Authentication/SignUp";
import Home from "../../Pages/Home";
import PatientsRequestList from "../../Components/PatientRequestList/PatientsRequestList";
function SideBarr() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
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
  return (
    <div
      className="div-sidebar-cont"
      style={{ display: "flex", direction: "rtl" }}
    >
      <Sidebar className="sidebar-containar">
        {/* <MenuRoundedIcon onClick={() => {
                  collapseSidebar();
                }}></MenuRoundedIcon> */}
        {/* <div className="sidebar-div-menu">
            <h3>Psytech</h3>
            </div>        */}
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "9a46e",

              "&:hover": {
                backgroundColor: "#9a46e8",
                color: "white",
              },
            },
          }}
        >
          <MenuItem
            className="item1-sidebar"
            title="پنل کاربری من"
            icon={<MenuRoundedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          >
            {" "}
            <div className="psytech-sidebar">Psytech</div>
          </MenuItem>
          <MenuItem
            title=" پروفایل من"
            component={<NavLink to="/Login" className="link" />}
            icon={<AccountCircleRoundedIcon />}
            className="sidebar-item"
          >
            {" "}
            <div id="profile-sidebar">پروفایل من</div>{" "}
          </MenuItem>
          <MenuItem
            title="بیمارهای من"
            component={<NavLink to="/MyPatientnList" className="link" />}
            icon={<ReceiptRoundedIcon />}
            className="sidebar-item"
          >
            {" "}
            <div id="patient-sidebar">بیمارهای من </div>
          </MenuItem>
          <MenuItem
            title="درخواست های من"
            component={<NavLink to="/MyPatientRequestList" className="link" />}
            icon={<NotificationsRoundedIcon />}
            className="sidebar-item"
          >
            {" "}
            <div id="patient-req-sidebar">درخواست های من </div>
          </MenuItem>
          <MenuItem
            title="ویرایش پروفایل"
            component={<NavLink to="/EditMyProfile" />}
            icon={<DriveFileRenameOutlineRoundedIcon />}
            className="sidebar-item"
          >
            <div id="edit-sidebar"> ویرایش پروفایل </div>
          </MenuItem>
          <MenuItem
            title="خروج"
            component={<NavLink to="/" className="link" />}
            icon={<LogoutRoundedIcon />}
            className="sidebar-item"
          >
            {" "}
            <div id="logout-sidebar">خروج </div>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
export default SideBarr;
