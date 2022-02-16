import { Avatar, Chip } from "@mui/material";
import React, { useEffect } from "react";
import DeadlineDate from "../../../helpGUI/DeadlineDate";
import Attachment from "../Attachment";

const ReceiveTag = (props) => {
  const { todo } = props;
  const deadlineFrom = todo.deadlineId;
  const { timeString } = DeadlineDate.FomatDate(
    new Date(deadlineFrom.deadlinedate)
  );
console.log(deadlineFrom.attachment)
  return (
    <div className="todo-job">
      <div className="todo-info-row">
        <div className="deadline-creater-img">
          <Avatar
            alt="Avatar"
            src={deadlineFrom.owner[0].picture}
            sx={{ width: 50, height: 50 }}
            style={{
              border: "1px solid #f36f21",
            }}
          />
        </div>
        <div className="deadline-name">{deadlineFrom.content}</div>
        <div className="deadline-note">{deadlineFrom.note}</div>
        <div className="deadline-date">
          <Chip
            color="success"
            label={timeString}
            size="medium"
            style={{ marginRight: 20 }}
          />
        </div>
      </div>
      {/* attachment */}
      <div className="todo-attachment-row">
        <div className="todo-attachment-info">
          <div className="attachment-background">
            <Attachment data={deadlineFrom.attachment} />
            {/* <img src="" className="background-attachment-link" /> */}
            
          </div>
        </div>
        <div className="todo-attachment-status done">Done</div>
      </div>
    </div>
  );
};

export default ReceiveTag;
