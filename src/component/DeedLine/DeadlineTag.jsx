import { Avatar, Badge, Chip } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import DeadlinePopUp from "./DeadlinePopUp";
import Attachment from "./Attachment";

DeadlineTag.propTypes = {
  data: PropTypes.object,
  onHandleClick: PropTypes.func,
};

DeadlineTag.defaultProps = {
  data: [],
  onHandleClick: null,
};

function DeadlineTag(props) {
  const { data , onHandleClick } = props;
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );




const handleLOg = () => {


  onHandleClick(data)
  
}


  return (
    <div className="deadline-section" onClick={handleLOg}>
      <div className="deadline-info-row">
        <div className="deadline-creater-img">
          <Avatar
            alt="Avatar"
            src={data.owner.picture ? data.owner[0].picture : data.userId.picture}
            sx={{ width: 50, height: 50 }}
            style={{
              border: "1px solid #f36f21",
            }}
          />
        </div>
        <div className="deadline-name">{data.content}</div>
        <div className="deadline-note">{data.note}</div>
        <div className="deadline-date">
          <Chip
            color="success"
            label="1/1/2022"
            size="medium"
            style={{ marginRight: 20 }}
          />

          <Badge
            badgeContent={"DUE"}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{
              tranform: "translateX(50%)",
            }}
          >
            <Chip color="success" label="2/1/2022" size="medium" />
          </Badge>
        </div>
      </div>
      {/* mỗi attachment 1 row */}
      { data.attachment[0] ? <Attachment data={data.attachment} /> : <></>}
    </div>
  );
}

export default DeadlineTag;
