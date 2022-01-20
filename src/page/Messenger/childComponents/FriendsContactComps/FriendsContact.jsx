import React from "react";
import FriendList from "./Friend/FriendList";
import GroupList from "./Group/GroupList";
import TeacherList from "./Teacher/TeacherList";

export default function FriendsContact(props) {
  const { friendsData, teachersData, groupsData, handleGetItem } = props;
  return (
    <>
      <div className="FriendsContact">
        <FriendList itemsData={friendsData} handleEvent={handleGetItem} />
        <TeacherList itemsData={teachersData} handleEvent={handleGetItem} />
        <GroupList itemsData={groupsData} handleEvent={handleGetItem} />
      </div>
    </>
  );
}
