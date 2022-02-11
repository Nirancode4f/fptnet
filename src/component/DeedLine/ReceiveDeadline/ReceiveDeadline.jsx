import React from "react";
import { useState, useEffect } from "react";
import AxiosMain from "../../../API/AxiosMain";
import isEqual from "lodash/isEqual";
import { Avatar, Chip } from "@mui/material";
import ReceiveTag from "./ReceiveTag";
const ReceiveDeadline = () => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const [TodoData, setTodoData] = useState([]);

  useEffect(() => {
    try {
      AxiosMain.post("/api/todo/gettodos", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
        if (!isEqual(TodoData, res.todo)) {
          setTodoData(res.todo);
        }
      });
    } catch (error) {}

    return () => {};
  }, []);

  console.log(`todo `, TodoData);

  return (
    <div>
      <div className="todo-container">
        <div className="todo-header">Todo List</div>
        <div className="todo-body">
          {TodoData.map((todo) => 
            (<ReceiveTag key={todo._id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiveDeadline;
