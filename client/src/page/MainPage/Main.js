/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import { useState, useEffect, Component } from "react";
import Login from "../LoginPage/Login";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import "./Main.css";

import MainLayout from "../../component/MainPage/MainLayout";
import Newfeed from "../../component/MainPage/NewFeed";


const Main = () => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const navigate = useNavigate();

  // if not logindata changeroute to login page
  useEffect(() => {
    if (!LoginData) {
      navigate("/login");
    }
  }, [LoginData, navigate]);

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    delete_cookie("accessToken");
    ///remove login data in local storage
    localStorage.removeItem("loginData");

    if (LoginData) {
      setLoginData(null);
    }
    navigate("/login");
  };

  return (
    <div className="Main">
      {LoginData ? (
        (
          <>
            <MainLayout />
          </>
        ) || <div>loading...</div>
      ) : (
        <>
          <Link to={"/login"}>you need login</Link>
        </>
      )}
      <Newfeed/>
    </div>
  );
};

export default Main;
