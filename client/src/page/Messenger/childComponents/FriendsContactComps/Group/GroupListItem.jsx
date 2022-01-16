import React from "react";
import defaultAvatar from "../../../../../component/Layout/assets/avatar-user.png";
import Avatar from "@mui/material/Avatar";

export default function GroupListItem(props) {
  const { data, OnClickGetItem } = props;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };
  return (
    <>
      <li
        className="GroupListItem"
        onClick={(e) =>
          OnClickGetItem(e, {
            id: data.id,
            avatar: data.avatar,
            name: data.gName,
            contact_type: "group",
          })
        }
      >
        <Avatar
          src={data.avatar || defaultAvatar}
          alt={data.gName}
          sx={{
            ...avatarStyles,
          }}
        />
        <div className="UserListItemName">{data.gName || "no name"}</div>
      </li>
    </>
  );
}
