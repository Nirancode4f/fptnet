import React from "react";
import avatar from "./avatar-user.png";

export default function TeacherListItem({ teacher }) {
  return (
    <>
      <li className="TeacherListItem">
        <img
          className="UserListItemAvatar"
          src={teacher.picture || avatar}
          alt="avatar user"
        />
        <div className="UserListItemName">{teacher.username}</div>
      </li>
    </>
  );
}
