import React from "react";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

ChatBoxMessage.prototype = {
  messageInfo: PropTypes.object,
  message: PropTypes.object,
};

ChatBoxMessage.defaultProps = {
  messageInfo: {},
  message: {},
};

export default function ChatBoxMessage(props) {
  const { message, avatarSrc } = props;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };
  return (
    <>
      {message.content && !message.unsend ? (
        <div className="ChatBoxMessage">
          <Avatar
            src={message.userId.picture || defaultAvatar}
            sx={{ ...avatarStyles }}
          />
          <div className="ChatBoxMessageContent">
            <div className="ChatBoxMessageInfo">
              <h4 className="ChatBoxMessageInfoName">
                {message.userId.username}
              </h4>
              <h5 className="ChatBoxMessageInfoTime">{message.creatAt}</h5>
            </div>
            <div className="ChatBoxMessageContentText">{message.content}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
