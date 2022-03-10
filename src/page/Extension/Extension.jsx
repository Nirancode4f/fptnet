import { Button, Rating } from "@mui/material";
import React from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/Extension.css";
const Extension = () => {
  return (
    <div className="Extension">
      <div className="Extension-main">
        <div className="grid">
          <div className="row new-extension-box-heading">
            <div className="row new-extension-box-title">
              <div className="main-header-extension">New Extension </div>
              <div className="main-list-extension">
                {" "}
                <Button variant="contained" color="warning">
                  See More
                </Button>{" "}
              </div>
            </div>
          </div>

          <div className="row">
            
            <div className="col col-6">
              <div className="extension-item">
                <div className="extension-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                    alt=""
                    className=""
                  />
                </div>
                <div className="extension-description">
                  <div className="extension-name">Crawler tool</div>
                  <div className="extension-rating">
                    <Rating name="read-only" size="small" value={3} readOnly />
                  </div>
                  <div className="extension-author">By KhangNGuyen</div>

                  <div className="extension-description">
                  Tool support crawling national high school test scores 2021 (python)
                  </div>
                  <a href="https://github.com/Nirancode4f/diemthithptqg">get here</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row recommend-extension-box-heading">
            <div className="row recommend-extension-box-title">
              <div className="main-header-extension">Recommend Extension </div>
              <div className="main-list-extension">
                {" "}
                <Button variant="contained" color="warning">
                  See More
                </Button>{" "}
              </div>
            </div>
          </div>
{/* Recommend Extension */}
          <div className="row">
            
            
           
            <div className="col col-6">
              <div className="extension-item">
                <div className="extension-img">
                  <img
                    src="https://th.bing.com/th/id/OIP.aKO8lHwA6SIV2jLF6JhSwwHaC5?pid=ImgDet&rs=1"
                    alt=""
                    className=""
                  />
                </div>
                <div className="extension-description">
                  <div className="extension-name">Demo Flask server</div>
                  <div className="extension-rating">
                    <Rating name="read-only" size="small" value={5} readOnly />
                  </div>
                  <div className="extension-author">By KhangNGuyen</div>

                  <div className="extension-description">
                  The server is written in flask (python)
                  </div>
                  <a href="https://github.com/Nirancode4f/websiteflask">get here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
