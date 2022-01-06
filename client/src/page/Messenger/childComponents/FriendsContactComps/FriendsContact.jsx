import React from "react";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import TeacherList from "./Teacher/TeacherList";

export default function FriendsContact(props) {
  const { listFriends, listTeachers, listGroups } = props;
  return (
    <>
      <div className="FriendsContact">
        <FriendList listFriends={listFriends} />
        <TeacherList listTeachers={listTeachers} />
        <GroupList listGroups={listGroups} />
      </div>
    </>
  );
}
