import React from "react";
import { useState, useEffect } from "react";
import AxiosMain from "../../../API/AxiosMain";
import isEqual from "lodash/isEqual";
import { Avatar, Chip, LinearProgress } from "@mui/material";
import ReceiveTag from "./ReceiveTag";
import ShareLink from "../../../helpGUI/ShareLink";
const ReceiveDeadline = () => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Loading, setLoading] = useState(true)

  const [TodoData, setTodoData] = useState([]);

  const gaga = ShareLink.Deadline({toi:"yeeu em", no:"khoong yeeu em"})

  console.log(gaga)

  useEffect(() => {
    try {
      AxiosMain.post("/api/todo/gettodos", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
        setLoading(false)
        if (!isEqual(TodoData, res.todo)) {
          setTodoData(res.todo);
        }
      });
    } catch (error) {}

    return () => {};
  }, []);



  return (
    <div>
      <div className="todo-container">
        <div className="todo-header">Todo List</div>
        <div className="todo-body">
        
          {TodoData.map((todo) => 
            (<ReceiveTag key={todo._id} todo={todo} />)
          )}
        </div>
        {<LinearProgress
           color='inherit'
           style={{ color: "#f36f21", height: "2px" }}

         /> && Loading}
      </div>
    </div>
  );
};

export default ReceiveDeadline;
