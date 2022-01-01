/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import avata from "./assets/avata-user.png"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

function Header(props) {
    const pic = JSON.parse(localStorage.getItem("loginData"))

    const navigate =  useNavigate() 
    
      // eslint-disable-next-line no-unused-vars
      const handleLogout = () => {
        delete_cookie("accessToken")
    
        ///remove login data in local storage
        localStorage.removeItem("loginData")
        navigate("/login")
      }

    return (
        <div className="header">

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
                    <button onClick={handleLogout}><h4>Logout</h4></button>
                </div>

            </div>
        </div>
    )

}

export default Header