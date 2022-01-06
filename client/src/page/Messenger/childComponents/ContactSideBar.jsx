import React from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import FriendsContact from "../childComponents/FriendsContactComps/FriendsContact";

function ContactSideBar(props) {
  const { listFriends, listTeachers, listGroups } = props;

  return (
    <div>
      <FriendHeader />
      <FriendsContact
        listFriends={listFriends}
        listTeachers={listTeachers}
        listGroups={listGroups}
      />
    </div>
  );
}

export default ContactSideBar;
