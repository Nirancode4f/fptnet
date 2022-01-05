import React from "react";
import avatar from "./avatar-user.png";

export default function FriendListItem({ friend }) {
  return (
    <>
      <li className="FriendListItem">
        <img
          className="UserListItemAvatar"
          src={friend.picture || avatar}
          alt={`avatar of ${friend.username}`}
        />
        <div className="UserListItemName">{friend.username}</div>
      </li>
    </>
  );
}
