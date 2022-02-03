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
            setDeadlineList(res.deadlines)
            ;
          }
        }
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  

  //   Call api
  useEffect(() => {
    GetDeadline();
    const timer = setInterval(() => {
      GetDeadline()
      if (DeadlineList !== cloneDeadlineList)
      {
        setcloneDeadlineList(DeadlineList)
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
          <div className="deadline-status"> NEVER GIVE UP!</div>
        <div className="student-info-box open">
          <div className="student">
            <div className="student-info-number">
              <p>
                MSSV:{" "}
                {LoginData.user.mssv ? LoginData.user.mssv : "Not FPTU student"}
              </p>
            </div>

            </div>
            <div className="student-info">
              <div className="student-info-quanlity-deadline">
                Unfinished: <p>{DeadlineList.length}</p>
              </div>
              <div className="student-quick-add-deadline">
                <TextField
                  id="standard-basic"
                  label="NAME"
                  variant="standard"
                  color="warning"
                  style={{
                    marginTop: "14px",
                    marginRight: "12px",
                    width: "100%",
                    bordercolor: "#f36f21",
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="DESCRIPTION"
                  variant="standard"
                  color="warning"
                  style={{
                    marginRight: "12px",
                    marginTop: "14px",
                    width: "100%",
                    bordercolor: "#f36f21",
                  }}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDateTimePicker
                    renderInput={(props) => (
                      <CssTextField
                        fullWidth
                        size="small"
                        {...props}
                        sx={{
                          svg: { color: "#f36f21" },
                        }}
                        style={{
                          marginTop: "15px",
                          color: "#f36f21",
                          zIndex:0,
                        }}
                      />
                    )}
                    inputFormat="dd/MM/yyyy hh:mm a"
                    label="DUE"
                    value={DateValue}
                    minDate={new Date()}
                    onChange={(newValue) => {
                      setDateValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>

          <div className="quick-add-deadline-btn">
            <Button  color="warning" variant="contained" style={{}}>
              Make Deadline
            </Button>
          </div>
          </div>
        </div>
        {/* end student info  */}
      </div>
      <TableDeadline Deadlinelist={DeadlineList} />
    </div>
  );
}
