import React from "react";
import FriendListItem from "./FriendListItem";

export default function FriendList() {
  return (
    <>
      <ul className="FriendList">
        <i className="fab fa-battle-net"></i>
        Friend
        <input
          type="checkbox"
          hidden
          id="OpenFriendList"
          className="ShowFriendListBtn"
        />
        <label htmlFor="OpenFriendList">
          <i className="ShowListIcon fas fa-angle-down"></i>
        </label>
        <FriendListItem />
      </ul>
    </>
  );
}
