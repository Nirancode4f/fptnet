import React from "react";
import FriendListItem from "./FriendListItem";
import { v4 as uuidv4 } from "uuid";

export default function FriendList({ listFriends }) {
  const showAllFriends = listFriends.map((friendData) => {
    return <FriendListItem key={uuidv4()} friendData={friendData} />;
  });
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
        {showAllFriends}
      </ul>
    </>
  );
}
