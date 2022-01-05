import React from "react";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import TeacherList from "./Teacher/TeacherList";

export default function FriendsContact({
  listFriends,
  listTeachers,
  groupsData,
}) {
  console.log(groupsData);
  return (
    <>
      <div className="FriendsContact">
        <FriendList listFriends={listFriends} />
        <TeacherList listTeachers={listTeachers} />
        <GroupList groupsData={groupsData} />
      </div>
    </>
  );
}
