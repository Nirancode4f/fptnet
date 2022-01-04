import React from "react";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import TeacherList from "./Teacher/TeacherList";

export default function FriendsContact({ listFriends }) {
  return (
    <>
      <div className="FriendsContact">
        <FriendList listFriends={listFriends} />
        <TeacherList />
        <GroupList />
      </div>
    </>
  );
}
