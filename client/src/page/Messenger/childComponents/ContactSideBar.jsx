import React from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import FriendsContact from "../childComponents/FriendsContactComps/FriendsContact";

export default function ContactSideBar({ listFriends }) {
  return (
    <>
      <FriendHeader />
      <FriendsContact listFriends={listFriends} />
    </>
  );
}
