/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
function NavBar() {
  return (
    <div className="nav">
      <img src={logo} alt="" className="header__logo" />
      <div className="nav__add">
        <Link to="/">
          <i className="fas fa-plus-circle"></i>
        </Link>
      </div>
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
        <Link to="/">
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
