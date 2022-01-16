import React from "react";
import defaultAvatar from "../../../../../component/Layout/assets/avatar-user.png";
import Avatar from "@mui/material/Avatar";

export default function FriendListItem(props) {
  const { data, OnClickGetItem } = props;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };
  console.log("run");
  return (
    <>
      <li
        className="FriendListItem"
        // onClick={(e) =>
        //   OnClickContactBtn(e, {
        //     id: friend._id,
        //     name: friend.username,
        //     avatarSrc: friend.picture,
        //   })
        // }
        onClick={(e) =>
          OnClickGetItem(e, {
            id: data.id,
            avatar: data.avatar,
            name: data.username,
            contact_type: "friend",
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
