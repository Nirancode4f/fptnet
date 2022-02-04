import { Avatar, Badge, Chip } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import DeadlinePopUp from "./DeadlinePopUp";

DeadlineTag.propTypes = {
  data: PropTypes.object,
  onHandleClick: PropTypes.func,
};

DeadlineTag.defaultProps = {
  data: [],
  onHandleClick: null,
};

function DeadlineTag(props) {
  const { data } = props;
  console.log(`deadlinetag `, data);

  const [showDeadlineModal,setShowDeadlineModal] = useState(false)

  const openDeadlineModal = () => {
    setShowDeadlineModal(prev => !prev)
  }

  return (
    <div className="deadline-section" onClick={openDeadlineModal}>
          <div className="deadline-info-row">
            <div className="deadline-creater-img">
              <Avatar
                alt="Avatar"
                src={data.owner[0].picture}
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
              >
                DATE
              </Chip>
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
          <div className="deadline-attachment-row">attachment</div>
       
        
        </div>

  );
}

export default DeadlineTag;
