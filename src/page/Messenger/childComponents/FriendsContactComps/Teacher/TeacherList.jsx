import React from "react";
import TeacherListItem from "./TeacherListItem";
import { v4 } from "uuid";

export default function TeacherList(props) {
  const { itemsData, handleEvent } = props;
  return (
    <>
      <ul className="TeacherList">
        <i className="fab fa-battle-net"></i>
        Teacher
        <input
          type="checkbox"
          hidden
          id="OpenTeacherList"
          className="ShowTeacherListBtn"
        />
        <label htmlFor="OpenTeacherList">
          <i className="ShowListIcon fas fa-angle-down"></i>
        </label>
        {itemsData.length > 0 ? (
          itemsData.map((item) => (
            <TeacherListItem
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
