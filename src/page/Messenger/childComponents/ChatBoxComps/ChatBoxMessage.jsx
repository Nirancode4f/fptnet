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
  console.log(`messdat in mess other = `, message);   
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
              {/* <h4 className="ChatBoxMessageInfoName">
                {message.userId.username}
<<<<<<< HEAD
              </h4> */}
              <h5 className="ChatBoxMessageInfoTime">{message.creatAt}</h5>
=======
              </h4>
              <h5 className="ChatBoxMessageInfoTime">{message.createAt}</h5>
>>>>>>> a7d49df8b50ce95c0d8ad211df9077082e13aa20
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
