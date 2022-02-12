import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { ClickAwayListener } from "@mui/base";
import AxiosMain from "../../../API/AxiosMain";

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

const MakeDeadline = () => {
  const [DateValue, setDateValue] = useState(Date());
  console.log(Date.parse(DateValue))

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null
)








  const handlePost = () => {

    AxiosMain.post("/api/deadline/create",
      {
        "userId": `${LoginData._id}`,
        "owner": [`${LoginData._id}`],
        "student": ["61d1920a61501846a35e8366", "61d31743f460f79f0d2b1e39"],
        "content": "Làm bài tập tết ",
        "attachment": ["https://calibre-ebook.com/downloads/demos/demo.docx"],
        "note": "Không nộp đúng hạn trừ 1 điểm",
        "deadlinedate": `${DateValue}`
    }
    )
  
  }


  return (
    <div className="student-quick-add-deadline">
      <TextField
        id="standard-basic"
        label="YOUR DEADLINE NAME"
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
        label="NOTE"
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
                zIndex: 0,
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
      <div>more option</div>
    </div>
  );
};

export default MakeDeadline;
