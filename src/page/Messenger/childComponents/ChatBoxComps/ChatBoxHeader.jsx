import React from "react";
import defautAvatar from "../../../../component/Layout/assets/avatar-user.png";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

ChatBoxHeader.prototype = {
  headerInfo: PropTypes.object,
};

ChatBoxHeader.defaultProps = {
  headerInfo: {},
};

export default function ChatBoxHeader(props) {
  const { headerData } = props;
  const avatarStyles = {
    ml: 1,
    mr: 1,
    border: 2,
    borderColor: "#808080",
  };
  return (
    <>
      <div className="ChatBoxHeader">
        <div className="Person">
          <Avatar
            src={headerData.avatar || defautAvatar}
            sx={{ ...avatarStyles }}
          />
          <span className="FriendName">{headerData.name}</span>
        </div>
        <div className="ChatSearch">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="ChatSearchLabel"
            placeholder="Tìm kiếm tin nhắn"
          />
        </div>
      </div>
    </>
  );
}
