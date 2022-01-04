/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

function Header(props) {
  const pic = JSON.parse(localStorage.getItem("loginData"));
  const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };
  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    delete_cookie("accessToken");
    ///remove login data in local storage
    localStorage.removeItem("loginData");
    navigate("/login");
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className="header__name">
                FPT University Academic Network
            </div>
            <div className="header__search-lable">
                <div className="header__search-lable-icon"><i className="fas fa-search"></i> </div>
                <input type="text" className="header__search-lable-input" placeholder="Tìm kiếm hoặc tra cứu qua MSSV " />
            </div>
            <div className="header__client">
                <div className="header__client-login">
                    <a href="#" className="header__client-login">Đăng nhập</a>
                </div>
            </div>
            <div className="header__member">
                <div className="header__member-notification">
                    <a href=""> <i className="fas fa-bell"></i>  </a>
                </div>
                <div className="header__member-user">
                    <a href="#">
                        <img src={pic ? pic.picture : avata} alt="" />
                    </a>
                        <div className="user-menu"> 
                            <div className="link-to-user-profile">Trang Cá Nhân</div> 
                            <div className="link-to-user-setting">Cài Đặt</div> 
                            <div className="log-out-btn"> 
                                <button className="logout-btn" onClick={handleLogout}><h4>Logout</h4></button>
                          
                           </div> 
                          
                         </div> 

                </div>
=======
>>>>>>> c211efc1d210a42cbfec3d6c09e3100a88e6e394

>>>>>>> 8214eb32848ecc3e775538cc3848b14b2ae40c55
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
            <i className="fas fa-bell"></i>{" "}
          </a>
        </div>
        <div className="header__member-user">
          <a href="#">
            <img
              className="header__member-user-avt"
              src={pic.user.picture ? pic.user.picture : avatar}
              alt=""
            />
          </a>
          <div className="user-menu">
            <div className="avatar-user-in-menu">
              <img
                className="user-in-menu-img"
                src={pic.user.picture ? pic.user.picture : avatar}
              />{" "}
            </div>
            <div onClick={handleProfile} className="link-to-user-profile">
              Trang Cá Nhân
            </div>
            <div className="link-to-user-setting">Cài Đặt</div>
            <div className="log-out-btn">
              <button className="logout-btn" onClick={handleLogout}>
                <h4>Logout</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
