import axios from "axios";
import React, { useEffect, useState } from "react";
import GroupListItem from "./GroupListItem";
import { v4 as uuidv4 } from "uuid";

const TEMP_URL = "http://localhost:3000";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";
export default function GroupList({ groupsData }) {
  // const [GroupsData, setGroupsData] = useState([]);

  const showAllItems =
    groupsData.length > 0 ? (
      groupsData.map((group) => <GroupListItem key={uuidv4()} group={group} />)
    ) : (
      <GroupListItem group={[]} />
    );

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
        {showAllItems}
      </ul>
    </>
  );
}
