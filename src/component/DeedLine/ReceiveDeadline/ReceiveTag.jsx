
import { Avatar, Badge, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeadlineDate from "../../../helpGUI/DeadlineDate";
import Attachment from "../Attachment";

const ReceiveTag = (props) => {
  const { data } = props;

  const { timeString } = DeadlineDate.FomatDate(
    new Date(data.deadlineId.deadlinedate)
  );
  


  const [ShowDetail,setShowDetail] = useState(true)

  console.log(`data `, data);
  const handleLOg = () => {};

  return (
    <>
      <div className="deadline-info-row" onClick={handleLOg}>
        <div className="deadline-creater-img">
          <Avatar
            alt="Avatar"
            src={data.owner ? data.owner[0].picture : data.userId.picture}
            sx={{ width: 50, height: 50 }}
            style={{
              border: "1px solid #f36f21",
            }}
          />
        </div>
        <div className="deadline-name">{data.content}</div>

        <div className="note-and-attachment-deadline">
          <div className="deadline-note">{data.note}</div>
          {data.attachment[0] ? <Attachment data={data.attachment} /> : <></>}
        </div>
        <div className="deadline-date">
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
            <Chip color="success" label={timeString} size="medium" />
          </Badge>
        </div>
      </div>

      { ShowDetail && <ReceiveTag/>}
    </>
  );
};

export default ReceiveTag;
