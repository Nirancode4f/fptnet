import React from "react";

export default function FriendListItem({ friendData }) {
  return (
    <>
      <li className="FriendListItem">
        <img
          className="UserListItemAvatar"
          src={friendData.picture}
          alt={`Avatar of ${friendData.username}`}
        />
        <div className="UserListItemName">{friendData.username}</div>
      </li>
    </>
  );
}
