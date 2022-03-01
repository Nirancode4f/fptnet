import React, { useEffect } from "react";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import Avatar from "@mui/material/Avatar";

export default function ContactListItem(props) {
  const { data, OnClickGetItem } = props;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };

  

  return (
    <>
      <li
        className="FriendListItem"
        onClick={(e) =>
          OnClickGetItem(e, {
            id: data.id,
            avatar: data.avatar,
            username: data.username,
            conversationId: data.conversationId,
            convsType: data.convsType,
            totalMessages: data.totalMessages
          })
        }
      >
        <Avatar
          src={data.avatar || defaultAvatar}
          alt={data.username}
          sx={{
            ...avatarStyles,
          }}
        />
        <div className="UserListItemName">{data.username}</div>
      </li>
    </>
  );
}
