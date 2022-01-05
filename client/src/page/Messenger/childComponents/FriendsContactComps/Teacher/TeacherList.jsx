import React from "react";
import TeacherListItem from "./TeacherListItem";
import { v4 as uuidv4 } from "uuid";

export default function TeacherList({ listTeachers }) {
  const showAllItems =
    listTeachers.length > 0 ? (
      listTeachers.map((teacher) => (
        <TeacherListItem key={uuidv4()} teacher={teacher} />
      ))
    ) : (
      <TeacherListItem teacher={[]} />
    );
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
        {showAllItems}
      </ul>
    </>
  );
}
