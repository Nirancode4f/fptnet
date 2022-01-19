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
  const [Token, setToken] = useState( read_cookie("accessToken") === [] ? false :  read_cookie("accessToken") )
   
  const navigate = useNavigate();
  console.log(`tt `,read_cookie("accessToken"))
  // if not logindata changeroute to login page

  useEffect(() => {
    if ( !Token || !LoginData) {
      navigate("/login");
   }
  }, []);

  // eslint-disable-next-line no-unused-vars


  return (
    <div className="Main">
      {LoginData ? (
        (
          <>
            <MainLayout />
            <Newfeed/>
          </>
        ) 
      ) : (
        <>
          <Link to={"/login"}>you need login</Link>
        </>
      )}
      
    </div>
  );
};

export default Main;
