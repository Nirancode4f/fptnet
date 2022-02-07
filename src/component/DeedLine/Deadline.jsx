import React from "react";
import "./assets/Deadline.css";

import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import { useNavigate } from "react-router-dom";
import AxiosMain from "../../API/AxiosMain";
import { useSelector } from "react-redux";
import TableDeadline from "./TableDeadline";
import DeadlinePopUp from "./DeadlinePopUp";
import { ClickAwayListener } from '@mui/base';
import MakeDeadline from "./MakeDeadline/MakeDeadline";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f36f21",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f36f21",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#f36f21",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f36f21",
    },
  },
});

export default function Newfeed() {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const navigate = useNavigate();

  const deadlineList = useSelector((state) => state.deadline.list);

  const [Loading, setLoading] = useState(false);
  const [isMouted, setisMouted] = useState(true);
  const [DeadlineList, setDeadlineList] = useState([]);
  const [cloneDeadlineList, setcloneDeadlineList] = useState(DeadlineList);

  const [DateValue, setDateValue] = useState(Date());

  const [ShowDeadline, setShowDeadline] = useState(true);
  const [time, setTime] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function GetDeadline() {
    try {
      AxiosMain.post("/api/deadline/getdeadlines", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
        setLoading(false);
        // after unmount component but asynchronous task still run, drop it.
        if (isMouted) {
          if (res.deadlines.length !== 0) {
            setDeadlineList(res.deadlines);
          }
        }
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  function handleONdlickDeadline() {
    if (!ShowDeadline) {
      setShowDeadline(true);
    } else {
      setShowDeadline(false);
    }
  }
  function ClickOut(event) {
    setShowDeadline(event)
  }

  //   Call api
  useEffect(() => {
    GetDeadline();
    const timer = setInterval(() => {
      GetDeadline();
      if (DeadlineList !== cloneDeadlineList) {
        setcloneDeadlineList(DeadlineList);
      }
    }, 5000);
    console.log(time);
    return () => {
      setisMouted(false);
      clearInterval(timer);
    };
  }, []);

  // if not logindata changeroute to login page
  useEffect(() => {
    if (!LoginData) {
      navigate("/login");
    }
  }, [LoginData, navigate]);

  return (
    <div className="Deadline-container">
      {/* begin student info  */}
      <div className="Content-deadline">
        <div className="Deadline">
          <div className="student-info-box open">
            <div className="student">
              <div className="student-info-number">
                <p>
                  MSSV:{" "}
                  {LoginData.user.mssv
                    ? LoginData.user.mssv
                    : "Not FPTU student"}
                </p>
              </div>
            </div>
            <div className="student-info">
              <div className="student-info-quanlity-deadline">
                Unfinished: <p>{DeadlineList.length}</p>
              </div>
              <MakeDeadline/>
            </div>

            <div className="quick-add-deadline-btn">
              <Button
                onClick={handleONdlickDeadline}
                color="warning"
                variant="contained"
                style={{}}
              >
                Make Deadline
              </Button>
            </div>
          </div>
        </div>
        {/* end student info  */}
      </div>
      <TableDeadline Deadlinelist={DeadlineList} />
      {ShowDeadline ? <></> : (<DeadlinePopUp  OnClickOut={ClickOut} />)}
    </div>
  );
}
