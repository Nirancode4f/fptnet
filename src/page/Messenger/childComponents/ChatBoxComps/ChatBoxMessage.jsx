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
          <div className="ChatBoxMessageContent ">
            <div className="ChatBoxMessageInfo">
              <h4 className="ChatBoxMessageInfoName">
                {message.userId.username}
              </h4>

              <p className="ChatBoxMessageInfoTime">{`${new Date(
                message.createAt
              ).toLocaleDateString("vi-VN")} - ${new Date(
                message.createAt
              ).getHours()}:${
                new Date(message.createAt).getMinutes() < 10
                  ? "0" + String(new Date(message.createAt).getMinutes())
                  : new Date(message.createAt).getMinutes()
              }`}</p>
            </div>
            {/* <div className="ChatBoxMessageContentImage">
              <img
                src={
                  "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                }
                alt=""
              />
            </div> */}
            <div className="ChatBoxMessageContentText">{message.content}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
