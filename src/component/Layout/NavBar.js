/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import BuildIcon from "@mui/icons-material/Build";
import TimerIcon from "@mui/icons-material/Timer";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ExtensionIcon from "@mui/icons-material/Extension";
import newlogo  from "./assets/newlogo.png"

function NavBar() {
  const navigate = useNavigate();


function handleChangeRouter(route) {
    navigate(route)
  }



  return (
    <div className="nav">
      <img src={newlogo} alt="" className="header__logo" />

      {/* connect to ༼ つ ◕_◕ ༽つ https://mui.com/components/stack/ */}
      <Stack spacing={0} style={{marginTop:"5px"}}>
        <Button size="large" style={{padding : "20px 0"}} 
        onClick={()=>handleChangeRouter("/")}
          endIcon={
            <NewspaperOutlinedIcon
              style={{
                color: "#fff",
                padding:"0",
                fontSize: "30px",
                display: "block",
                width: "100%",
                margin: "0 auto",
                transform: "translateX(-5px)",
              }}
            />
          }
        ></Button>

        <Button size="large" style={{padding : "20px 0"}}
          onClick={()=>handleChangeRouter("/messenger")}
          endIcon={
            <ForumIcon
              style={{
                color: "#fff",
                padding:"0",
                fontSize: "30px",
                display: "block",
                width: "100%",
                margin: "0 auto",
                transform: "translateX(-5px)",
              }}
            />
          }
        ></Button>

        <Button size="large" style={{padding : "20px 0"}}
          onClick={()=>handleChangeRouter("/deadline")}
          endIcon={
            <TimerIcon
              style={{
                color: "#fff",
                padding:"0",
                fontSize: "30px",
                display: "block",
                width: "100%",
                margin: "0 auto",
                transform: "translateX(-5px)",
              }}
            />
          }
        ></Button>


        <Button size="large" style={{padding : "20px 0"}}
          onClick={()=>handleChangeRouter("/extension")}
          endIcon={
            <ExtensionIcon
              style={{
                color: "#fff",
                padding:"0",
                fontSize: "30px",
                display: "block",
                width: "100%",
                margin: "0 auto",
                transform: "translateX(-5px)",
              }}
            />
          }
        />
        <Button size="large" style={{padding : "20px 0"}}
          onClick={()=>handleChangeRouter("/profile")}
          endIcon={
            <PersonIcon
              style={{
                color: "#fff",
                padding:"0",
                fontSize: "30px",
                display: "block",
                width: "100%",
                margin: "0 auto",
                transform: "translateX(-5px)",
              }}
            />
          }
        ></Button>


      </Stack>
    </div>
  );
}

export default NavBar;
