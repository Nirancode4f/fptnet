import React, { useEffect, useState } from "react";
import "./assets/ReceiveDeadline.css";
import { Avatar } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import queryString from "query-string";
import { useParams, useSearchParams } from "react-router-dom";
import { read_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import ShareLink from "../../helpGUI/ShareLink";

export default function ReceiveDeadline() {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Token, setToken] = useState(
    read_cookie("accessToken") === [] ? false : read_cookie("accessToken")
  );



  const [param, setparam] = useSearchParams({});
  const {id} = useParams()
  const navigate = useNavigate();




  useEffect(() => {
    setparam({

      deadline:"khang",
      owner :"update"
      
    })
    const test = ShareLink.Deadline({anhyeu:"toi khong yeeu anh"})
    console.log(param.get("deadline"));
    console.log(id)
  }, []);



  // eslint-disable-next-line no-restricted-globals
  console.log(queryString.parse(location.search));







  useEffect(() => {
    if (!Token || !LoginData) {
      navigate("/login");
    }
  });
  return (
    <div className="Receive-deadline">
      <div className="Receive-deadline-container">
        <div className="receiver-header">
          <div className="receive-form-avt">
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="/static/images/avatar/1.jpg"
            />
          </div>
          <div className="receive-icon">
            <ArrowForward
              style={{
                color: "#f36f21",
                fontSize: "58px",
                fontWeight: "700",
                margin: "0 60px",
              }}
            ></ArrowForward>
          </div>
          <div className="receive-to">
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="/static/images/avatar/1.jpg"
            />
          </div>
        </div>
        <div className="receive-body">
          <div className="receive-conttent">content here</div>
          <div className="receive-note">note here</div>
        </div>
        <div className="receive-footer">
          <div className="receive-due">
            <Chip label="dd/mm/yy" variant="outlined" color="warning" />
          </div>
          <div className="receive-btn">
            <Button color="warning" variant="contained">
              Contained
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
