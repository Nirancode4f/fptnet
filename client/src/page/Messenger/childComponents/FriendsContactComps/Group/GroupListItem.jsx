import React from "react";
import avatar from "./avatar-user.png";
export default function GroupListItem({ group }) {
  console.log(`this is group list= `);
  return (
    <>
      <li className="GroupListItem">
        <img
          className="UserListItemAvatar"
          src={group.picture || avatar}
          alt="avatar user"
        />
        <div className="UserListItemName">{group.name || "no name"}</div>
      </li>
    </>
  );
}
