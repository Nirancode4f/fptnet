import React from "react";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import TeacherList from "./Teacher/TeacherList";

export default function FriendsContact() {
  return (
    <>
      <div className="FriendsContact">
        <FriendList />
        <TeacherList />
        <GroupList />
      </div>
    </>
  );
}
