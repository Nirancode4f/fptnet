import React from "react";
import avatar from "./avatar-user.png";
export default function GroupListItem({ group }) {
  console.log(group);
  return (
    <>
      <li className="GroupListItem">
        <img
          className="UserListItemAvatar"
          src={group.picture || avatar}
          alt="avatar user"
        />
        <div className="UserListItemName">{group.name}</div>
      </li>
    </>
  );
}
