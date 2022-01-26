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

function NavBar() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="nav">
      <img src={logo} alt="" className="header__logo" />

      {/* connect to ༼ つ ◕_◕ ༽つ https://mui.com/components/stack/ */}
      <Stack spacing={2}>
        <Button
          endIcon={<NewspaperOutlinedIcon style={{ color: "#fff" }} />}
          fontSize="medium"
        />

        <Button endIcon={<SendIcon style={{ color: "#f36f21" }} />}></Button>

        <Button endIcon={<SendIcon style={{ color: "#f36f21" }} />}></Button>
      </Stack>

      <div className="nav__news">
        <Link to="/">
          <i className="far fa-newspaper"></i>
        </Link>
      </div>

      <div className="nav__chat">
        <Link to="/messenger">
          <i className="far fa-comments"></i>
        </Link>
      </div>

      <div className="nav__deadline">
        <Link to="/deadline">
          <i className="fas fa-stopwatch"></i>
        </Link>
      </div>

      <div className="nav__profile">
        <Link to="/profile">
          <i className="far fa-user"></i>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
