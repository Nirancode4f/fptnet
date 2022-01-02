import React from "react";
import GroupListItem from "./GroupListItem";

export default function GroupList() {
  return (
    <>
      <ul className="GroupList">
        <i className="fab fa-battle-net"></i>
        Group
        <input
          type="checkbox"
          hidden
          id="OpenGroupList"
          className="ShowGroupListBtn"
        />
        <label htmlFor="OpenGroupList">
          <i className="ShowListIcon fas fa-angle-down"></i>
        </label>
        <GroupListItem />
      </ul>
    </>
  );
}
