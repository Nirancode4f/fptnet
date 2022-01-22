import axios from "axios";
import React, { useEffect, useState } from "react";
import GroupListItem from "./GroupListItem";
import { v4 } from "uuid";

const TEMP_URL = "http://localhost:3000";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";
export default function GroupList(props) {
  const { itemsData, handleEvent } = props;

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
        {itemsData.length > 0 ? (
          itemsData.map((item) => (
            <GroupListItem
              key={v4()}
              data={{ gName: item.name, avatar: item.picture, id: item._id }}
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