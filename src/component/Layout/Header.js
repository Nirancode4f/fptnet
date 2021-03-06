/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom";
import avata from "./assets/avata-user.png";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function Header(props) {

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null
);

  const pic = LoginData.user ? LoginData.user.picture : "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg" ;
  const avata = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"
  const navigate = useNavigate();

  const handleProfile=()=>{

    navigate("/profile")

  }
  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    delete_cookie("accessToken");
    ///remove login data in local storage
    localStorage.removeItem("loginData");
    localStorage.removeItem("FAN_user_info");
    navigate("/login");
  };


  return (
    <div className="header">
      <div className="header__name">FPT University Academic Network</div>
      <div className="header__search-lable">
        <div className="header__search-lable-icon">
          <i className="fas fa-search"></i>{" "}
        </div>
        <input
          type="text"
          className="header__search-lable-input"
          placeholder="Tìm kiếm hoặc tra cứu qua MSSV "
        />
      </div>
      <div className="header__client">
        <div className="header__client-login">
          <a href="#" className="header__client-login">
            Đăng nhập
          </a>
        </div>
      </div>
      <div className="header__member">
        <div className="header__member-notification">
          <a href="">
            {" "}
            {/* <i className="fas fa-bell"></i> */}
            <NotificationsActiveIcon color="warning" style={{
              marginRight: "20px"
            }}></NotificationsActiveIcon>
            {" "}
          </a>
        </div>
        <div className="header__member-user">
        <a href="#">

            <Avatar src={pic ? pic : avata } alt="" />
          </a>
          <div className="user-menu">
            <div className="avatar-user-in-menu">
              <img className="user-in-menu-img" src={pic ? pic : avata} /> </div>
            <div onClick={handleProfile}  className="link-to-user-profile">Trang Cá Nhân</div>
            <div className="link-to-user-setting">Cài Đặt</div>
            <div className="log-out-btn">
              <button className="logout-btn" onClick={handleLogout}><h4>Logout</h4></button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Header;
