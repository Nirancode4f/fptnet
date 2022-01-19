import React from "react";
import FriendListItem from "./FriendListItem";
import { v4 } from "uuid";

export default function FriendList(props) {
  const { itemsData, handleEvent } = props;
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
        {itemsData.length > 0 ? (
          itemsData.map((item) => (
            <FriendListItem
              key={v4()}
              data={{
                username: item.username,
                avatar: item.picture,
                id: item._id,
              }}
              OnClickGetItem={handleEvent}
            />
          ))
        ) : (
          <></>
        )}
      </ul>
    </>
  );
}
