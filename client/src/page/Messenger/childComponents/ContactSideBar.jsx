import React from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import FriendsContact from "../childComponents/FriendsContactComps/FriendsContact";

export default function ContactSideBar({
  listFriends,
  listTeachers,
  groupsData,
}) {
  console.log(groupsData);
  return (
    <>
      <FriendHeader />
      <FriendsContact
        listFriends={listFriends}
        listTeachers={listTeachers}
        groupsData={groupsData}
      />
    </>
  );
}
