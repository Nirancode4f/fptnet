import { Avatar, Badge, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeadlineDate from "../../../helpGUI/DeadlineDate";
import Attachment from "../Attachment";
import PropTypes from "prop-types";
import DetailDeadline from "../DetailDeadline/DetailDeadline";

ReceiveTag.propTypes = {
  data: PropTypes.object,
};
ReceiveTag.defaultProps = {
  data: {},
};

function ReceiveTag(props) {
  const { data } = props;
  const [IsUnmount, setIsUnmount] = useState(true);

  const { timeString } = DeadlineDate.FomatDate(
    // eslint-disable-next-line no-use-before-define
    new Date(data.deadlineId.deadlinedate)
  );

  const [ShowDetail, setShowDetail] = useState(false);

  console.log(`todo `, data);

  useEffect(() => {
    if (IsUnmount) {
    }

    return () => {
      setIsUnmount(false);
    };
  }, []);

  const handleLOg = () => {};

  return (
    <>
      {
        <div className="deadline-info-row" onClick={handleLOg}>
          <div className="deadline-creater-img">
            <Avatar
              alt="Avatar"
              src={data.deadlineId.owner[0] ? data.deadlineId.owner[0].picture : ""}
              sx={{ width: 50, height: 50 }}
              style={{
                border: "1px solid #f36f21",
              }}
            />
          </div>
          
            <div className="deadline-name">{data.deadlineId.content}</div>
            <div className="deadline-name">{data.deadlineId.note}</div>

          <div className="note-and-attachment-deadline">
            <div className="deadline-note"></div>
            {data.deadlineId.attachment[0] ? (
              <Attachment data={data.deadlineId.attachment} />
            ) : (
              <></>
            )}
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
      }
      {ShowDetail && <DetailDeadline />}
    </>
  );
}

export default ReceiveTag;
