import React from "react";
import "./assets/Deadline.css";

import { useState, useEffect } from "react";
import { Box, Tab, Tabs, TextField } from "@mui/material";
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
import { ClickAwayListener } from "@mui/base";
import MakeDeadline from "./MakeDeadline/MakeDeadline";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ReceiveDeadline from "./ReceiveDeadline/ReceiveDeadline";
import isEqual from 'lodash/isEqual';
import { Chip, Badge } from "@mui/material";

import { Avatar } from "@mui/material";
import DetailDeadline from "./DetailDeadline/DetailDeadline";

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

  const [Loading, setLoading] = useState(true);
  const [isMouted, setisMouted] = useState(true);
  const [DeadlineList, setDeadlineList] = useState([]);

  const [ShowDeadline, setShowDeadline] = useState(true);
  const [time, setTime] = useState(0);
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function GetDeadline() {
    try {
      AxiosMain.post("/api/deadline/getdeadlines", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
   
        setLoading(false);

        if (isMouted) {
          if (!isEqual(res.deadlines, DeadlineList)) {
            setDeadlineList(res.deadlines);
           
          }
        }
      });
     
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
    setShowDeadline(event);
  }

  //   Call api
  useEffect(() => {
    setInterval(() => {
      GetDeadline();
    }, 5000);

    return () => {
      setisMouted(false);
      clearInterval();
    };
  }, []);

  // if not logindata changeroute to login page
  useEffect(() => {
    if (!LoginData) {
      navigate("/login");
    }
  }, [LoginData, navigate]);

  return (
    <>
    {<DetailDeadline/>}
      <div className="Deadline-container">
        {/* begin student info  */}
        <div className="Content-deadline">
          <div className="student-info">
            
            <div className="student-number">
              <p>
                MSSV:{" "}
                {LoginData.user.mssv ? LoginData.user.mssv : "Not FPTU student"}
              </p>
            </div>

            {/* <div className="student-quanlity-deadline">
              <span> Unfinished:</span> <p>{DeadlineList.length}</p>
            </div> */}
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
          <div className="table_deadline">
            <TabContext value={value}>
              <Box sx={{ borderColor: "divider" }}>
                <TabList
                  sx={{ p: -1 }}
                  variant="fullWidth"
                  onChange={handleChange}
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#f36f21" } }}
                  style={{ fill: "#f36f21", color: "#f36f21" }}
                  aria-label="deadline table"
                >
                  <Tab
                    label={<span className="profile-tag-action">Deadline</span>}
                    value="1"
                  />
                  <Tab
                    label={<span className="profile-tag-action">Received</span>}
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <TableDeadline Deadlinelist={DeadlineList} Loading={Loading} />
              </TabPanel>
              <TabPanel value="2">
                <ReceiveDeadline TodoList={""} />

                
              </TabPanel>
            </TabContext>
          </div>
        </div>
        {/* end student info  */}
            
        {ShowDeadline ? <></> : <DeadlinePopUp OnClickOut={ClickOut} />}
      </div>
      
    </>
  );
}
