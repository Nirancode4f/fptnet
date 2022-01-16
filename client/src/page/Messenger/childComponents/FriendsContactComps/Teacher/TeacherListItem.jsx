import React from "react";
import defaultAvatar from "../../../../../component/Layout/assets/avatar-user.png";
import Avatar from "@mui/material/Avatar";

export default function TeacherListItem(props) {
  const { data, OnClickGetItem } = props;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };
  return (
    <>
      <li
        className="TeacherListItem"
        onClick={(e) =>
          OnClickGetItem(e, {
            id: data.id,
            avatar: data.avatar,
            name: data.username,
            contact_type: "teacher",
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
