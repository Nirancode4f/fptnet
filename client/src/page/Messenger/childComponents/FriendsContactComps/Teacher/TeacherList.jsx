import React from "react";
import TeacherListItem from "./TeacherListItem";

export default function TeacherList() {
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
        <TeacherListItem />
      </ul>
    </>
  );
}
