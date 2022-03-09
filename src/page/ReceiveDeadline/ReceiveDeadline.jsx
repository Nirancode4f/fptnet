/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import "./assets/ReceiveDeadline.css";
import { Avatar, LinearProgress } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import queryString from "query-string";
import { useParams, useSearchParams } from "react-router-dom";
import { read_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import ShareLink from "../../helpGUI/FormatLinkShare/ShareLink";
import AxiosMain from "../../API/AxiosMain";
import DeadlineDate from "../../helpGUI/DeadlineDate";
import { LoadingButton } from "@mui/lab";

export default function ReceiveDeadline() {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Token, setToken] = useState(
    read_cookie("accessToken") === [] ? false : read_cookie("accessToken")
  );

  const [DeadlineData, setDeadlineData] = useState({});
  const [ShowTable, setShowTable] = useState(false);
  const { timeString } = DeadlineDate.FomatDate(DeadlineDate.createAt);
  const [deadline_id, setdeadline_id] = useState(()=>{
   return queryString.parse(location.search).dl;
  })

  // const [param, setparam] = useSearchParams({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
 

    try {
      AxiosMain.post(`/api/deadline/get`, {
        userId: `${LoginData.user._id}`,
        deadlineId: `${deadline_id}`,
      }).then((res) => {
        setDeadlineData(res.deadline);
        setShowTable(true);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // click to take receive
  function handleReceive() {

try{
 
  AxiosMain.post(`/api/todo/create`,{

    "userId": `${LoginData.user._id}`,
    "deadlineId": `${deadline_id}`

  }).then((res)=>{
    console.log(res)
  })

}catch (error) {
  console.log(error)
}


  }

  console.log(`receivedeadlinedata `, DeadlineData);

  // logout

  useEffect(() => {
    if (!Token || !LoginData) {
      navigate("/login");
    }
  });

  return (
    <>
      {ShowTable ? (
        <div className="Receive-deadline">
          <div className="Receive-deadline-container">
            <div className="receiver-header">
              <div className="receive-form-avt">
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  src={`${DeadlineData.owner[0].picture}`}
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
                  src={`${DeadlineData.userId.picture}`}
                />
              </div>
            </div>
            <div className="receive-body">
              <div className="receive-conttent">{DeadlineData.content}</div>
              <div className="receive-note">{DeadlineData.note}</div>
            </div>
            <div className="receive-footer">
              <div className="receive-due">
                <Chip label={timeString} variant="outlined" color="warning" />
              </div>
              <div className="receive-btn">
                <Button
                  onClick={handleReceive}
                  color="warning"
                  variant="contained"
                >
                  Receive
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="Receive-deadline">
            <div className="Receive-deadline-container">

              <div className="LoadingButtonReceive">
                <LoadingButton
                color='inherit'
                style={{ color: "#f36f21" }}
                  loading
                  loadingPosition="center"
                 

                >
                  Loading
                </LoadingButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
