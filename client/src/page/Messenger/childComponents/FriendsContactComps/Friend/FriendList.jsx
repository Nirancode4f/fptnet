import React from "react";
import FriendListItem from "./FriendListItem";


export default function FriendList({ listFriends }) {
 


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
        
        {

        listFriends.length > 0 ? 
          listFriends.map((friend) => (
            <FriendListItem key={friend._id} friend={friend} />
              )) : <></>


        }
      </ul>
    </>
  );
}
