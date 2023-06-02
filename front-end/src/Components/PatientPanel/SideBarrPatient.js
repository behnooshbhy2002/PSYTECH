import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import "../style/SideBarr.css";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Message from "../Error&Loading/Message";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
function SideBarrPatient() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <>
      {!userInfo ? (
        <div>
          <Message>دسترسی غیرمجاز</Message>
        </div>
      ) : (
        <div
          className="div-sidebar-cont"
          style={{ display: "flex", direction: "rtl" }}
        >
          <Sidebar className="sidebar-containar">
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
                component={<NavLink to="/MyProfileP" className="link" />}
                icon={<AccountCircleRoundedIcon />}
                className="sidebar-item"
              >
                {" "}
                <div id="profile-sidebar">پروفایل من</div>{" "}
              </MenuItem>
              <MenuItem
                title="روانشناس های من"
                component={<NavLink to="/MyDoctor" className="link" />}
                icon={<ReceiptRoundedIcon />}
                className="sidebar-item"
              >
                {" "}
                <div id="my-psy">روانشناس های من </div>
              </MenuItem>
              <MenuItem
                title="درخواست های من"
                component={
                  <NavLink to="/MyRequestForDoctor" className="link" />
                }
                icon={<NotificationsRoundedIcon />}
                className="sidebar-item"
              >
                {" "}
                <div id="MyRequestForDoctor">درخواست های من </div>
              </MenuItem>
              <MenuItem
                title="ویرایش پروفایل"
                component={<NavLink to="/EditMyProfileP" />}
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
      )}
    </>
  );
}
export default SideBarrPatient;
