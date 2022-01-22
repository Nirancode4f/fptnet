import React from "react";
import "./assets/Deadline.css";

import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

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

  const [DateValue, setDateValue] = useState(Date());













  return (
    <div className="Deadline-container">
      {/* begin student info  */}
      <div className="Content-deadline">
        <div className="Deadline">
          <div className="deadline-status"> NEVER GIVE UP!</div>

          <div className="student">
            <div className="student-info-number">
              MSSV:{" "}
              <p>{LoginData.user.mssv ? LoginData.user.mssv : "CE170396"}</p>
            </div>
            <div className="student-info">
              <div className="student-info-quanlity-deadline">
                Unfinished: <p>20</p>
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
                    renderInput={(props) => <CssTextField fullWidth size="small" {...props}  
                     sx={{

                        svg: { color: "#f36f21" },
                        
                        

                      }} />}
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
          </div>

          <div className="quick-add-deadline-btn">
            <Button color="warning" variant="contained" style={{}}>
              Make Deadline
            </Button>
          </div>
        </div>
        {/* end student info  */}
      </div>
    </div>
  );
}
