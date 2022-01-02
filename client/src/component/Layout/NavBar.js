/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import logo from "./assets/logo.jpg";
function NavBar() {
  return (
    <>
      <div className="nav">
        <img src={logo} alt="" className="header__logo" />
        <div className="nav__add">
          <a href="#">
            <i className="fas fa-plus-circle"></i>
          </a>
        </div>
        <div className="nav__news">
          <a href="#">
            <i className="far fa-newspaper"></i>
          </a>
        </div>
        <div className="nav__chat">
          <a href="#">
            <i className="far fa-comments"></i>
          </a>
        </div>
        <div className="nav__deadline">
          <a href="#">
            <i className="fas fa-stopwatch"></i>
          </a>
        </div>
        <div className="nav__source">
          <a href="#">
            {" "}
            <i className="fas fa-folder-open"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
