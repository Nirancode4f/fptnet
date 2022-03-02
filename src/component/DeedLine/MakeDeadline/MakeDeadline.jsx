import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import { Avatar, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { styled } from "@mui/system";
import { ClickAwayListener } from "@mui/base";
import AxiosMain from "../../../API/AxiosMain";
import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useEffect } from "react";
import Attachment from "../Attachment";
import AddLink from "@mui/icons-material/AddLink";
import SeoBlock from "./SeoBlock";
import MakeSeoURL from "./MakeSeoURL";

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
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Coordinates, setCoordinates] = useState([]);

  // make deadline
  const [Owner, setOwner] = useState([]);
  const [Content, setContent] = useState("");
  const [Student, setStudent] = useState([]);
  const [attachment, setattachment] = useState("");
  const [Lastattachment, setLastattachment] = useState("");
  const [DateValue, setDateValue] = useState(Date());
  const [Note, setNote] = useState("");
  const [Link, setLink] = useState("");

  const typingTimeOutRef = useRef(null);



  const handleSetLinkInput = (e) => {
    setLastattachment(e);

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      setattachment(e);
    }, 800);
  };


  const handlePost = async () => {
    if (Owner && Content && Student && Note) {
      await AxiosMain.post("/api/deadline/create", {
        userId: `${LoginData.user._id}`,
        owner: [],
        student: [],
        content: `${Content}`,
        attachment: [attachment],
        note: `${Note}`,
        deadlinedate: Date.parse(DateValue),
      });
    }
  };

  return (
    <>
      <div className="student-quick-add-deadline">
        <TextField
          id="standard-basic"
          label="YOUR DEADLINE NAME"
          variant="standard"
          color="warning"
          value={Content}
          onChange={(newValue) => {
            setContent(newValue.target.value);
          }}
          style={{
            marginTop: "14px",
            marginRight: "12px",
            width: "100%",
            bordercolor: "#f36f21",
          }}
        />
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id="standard-basic"
            label="NOTE"
            variant="standard"
            color="warning"
            value={Note}
            onChange={(newValue) => {
              setNote(newValue.target.value);
            }}
            style={{
              marginRight: "12px",
              transition: "linear 0.2s",
              width: "100%",
              bordercolor: "#f36f21",
            }}
          />
          <AddLink color="warning"></AddLink>
        </div>
        <div className="emberlink-block">
          <input
            type="text"
            placeholder="<embed your link here>"
            className="emberlink"
            value={Lastattachment}
            onChange={(e) => handleSetLinkInput(e.target.value)}
          />
          {attachment && <SeoBlock Link={attachment} />}
        </div>

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
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            textTransform: "capitalize",
            margin: " 5px 0",
          }}
        >
          more option
        </div>
      </div>
      <div className="deadline-popup-avatar-and-btn">
        <div className="deadline-popup-group-avt">
          <div className="deadline-popup-group-avt group-avt">
            <Avatar
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAMAAAC8qkWvAAAAe1BMVEUAAAD///8MDAweHh6VlZUYGBjk5OTS0tIHBweGh4a1tbUICAjq6urc3dz29vb8/PwQEBDFxcVCQkJXV1dra2tiYmIwMDDMzMx4eHjy8vIyMjKAgIBLS0saGhpRUVEkJCSampqnp6ewsLA5OTlzc3NcXFyMjIy9vb2ZmZnQrLrIAAAE4UlEQVR4nO2a6ZKqOhRGASc0CIizaHtsW73v/4T3qAxfSEDt2nR7qr71y0oCLsM27AyOQwghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQN0F5Bsqva+ybje9X3KvNkvrLZezjtFvlvNourLdXnenZaH1jdvvB3rlaUrE/wSV7Ef3O2DWJwkG6MH5AbxVElsZXLrfOjgdlyaBnfpd3Kev7u/b0rwTdvR4Au0OdfK7v/VeWhAuz+/dBWf8pEz21+n87aIv+6lxvn+mrD2gyM6Jfq/5qXd8NV3HRzk/C+oaZvrNfN3WvOpe10bF2eBDTd6O0cPC6De1yfW9ZFo2N4MfavtDI06jvhqe8k+JlU7tMXw3hUqN/F/BsDtaBVVrfXef/wF7/CX1/C9G9qnSwmpaV0fxn9N1R/IK+PrZUDBWE33ohY/9QP9r6L+grGNmDWP+mGL5pUKmT0I/CG5XxcaSq+lk7ZJTrr+CHJ1rw+3u4cVfon4v6g86NxfSAY2T2nEF/2THIO9NPaoNfzeGXTYVCX9P3/BvKS+DtH829iv4k9quUt4MYG+n6B+gSmYSnqp8X+nuI064y9Otv54Fk0MGaHnRJ0x0E9LVBbmL2fv3ttBDZQvD7G4jIoVTo1+hjEIxf0fc3EPxDiHA1K8vdrUzGUK8fT4rivv+CvqMg7Cag732W5Wux2KnTV6OiOHhN/0+pGcDLaQc/6yIWO+L63hxSg4+i+/0jhH41nXgjfWcDidm5TFi/ytIwEbOX18e0eFD0PtzPkkq/kT5OSsLi9RRDLneQi50W9HFKOM1GSC2ZMKeRP6yvCix3xKT5T3ZLL4VHYpnE/6T+YFZiUYkhac6XS2xlv6WPWGZNtp7uWJ7Im+r7iVGvTSKngrHTgr7jGaOMNoXvmFe8lz6kN/dA98oMyl3KJTwt6eMbdnMtWcDzOEuGfhv6DuY318VAbYlELlluSx/XFK5rhfgiDsTmia3pe5A09/+GusJ5omjstKKvzRiPvrPAZFkwY/imflRiX+zDleaV8k9l6Jsrnz+uP5iW2CMZ13M/Pdy16IuO+t9M2bymlM3RV9ODXq/yT/51/Uc39acQaVsMfclkuTV9pwPBn+IfeSMb+i3pY5ZwOZSfx6IZQ3v6kKOtMVkWjp2W9LXJIcTO6d/Qd3aBayGU2lR5pP/tRcIM3EB3rd/Qqj7M7l5aoi30V66Fs3Ts1C2Qn765QJ6jLQrmwKJhq/rqCBnO+ZXtiQJcks0RTpYN/fvekIo/MD87PbE5ZL6McJslR3Bl2aI/Tm5sZxd88IG5NZcYmCMKJs05qXjsaPu69xy48p0HY2MUE+aMiyHmL4zgF54nGvo2wuSVbWkAt+LuSCfLz+gfXjoUAGCWf0c6WX5CvxgsXtbXVtZuSB3DeF5/XRyogtfwc/ra+YYrYucYntYPy9kF5pDP6ftb7c8rdxDgWf1wDtFqjiQP9CsHsA5tdH6T/jLRjuKlD4/iVenhqr78G7dJPxqvdvowHXcfHYQ02E/ySwaSWyoP9KOoP5p3DCNvPm4+hmrSG15Prkbrbqcdeyf+GlZIvz6OsfUMsooTo/WdeZ2dt/9I0+m+hRE/d7KcwK4/gm05sF174Dq7pLGWEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCG/yf8n+1Xnn2blIAAAAABJRU5ErkJggg=="
              sx={{ width: 24, height: 24, marginRight: "5px" }}
            />
          </div>
          <div className="deadline-popup-add-people-btn">
            <AddIcon style={{ color: "#f36f21" }}></AddIcon>

            <div className="deadline-popup-add-people-btn-title">
              Add More Receive
            </div>
          </div>
        </div>

        <Button
          color="warning"
          variant="contained"
          style={{ height: "40px", transform: "translateY(40px)" }}
          onClick={handlePost}
        >
          Make Deadline
        </Button>
      </div>
    </>
  );
};

export default MakeDeadline;
