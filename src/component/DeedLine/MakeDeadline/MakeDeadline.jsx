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









  const handlePost = () => {

    AxiosMain.post("/api/deadline/create",
      {
        "userId": "61c2b42177efb03d08b9031f",
        "owner": ["61c2b42177efb03d08b9031f", "61d3190fe0fae222f917f8cd"],
        "student": ["61d1920a61501846a35e8366", "61d31743f460f79f0d2b1e39"],
        "content": "Làm bài tập tết ",
        "attachment": ["https://calibre-ebook.com/downloads/demos/demo.docx"],
        "note": "Không nộp đúng hạn trừ 1 điểm",
        "deadlinedate": "2022-01-25"
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
    </div>
  );
};

export default MakeDeadline;
