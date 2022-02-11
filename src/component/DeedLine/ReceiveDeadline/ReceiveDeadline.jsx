import React from "react";
import { useState, useEffect } from "react";
import AxiosMain from "../../../API/AxiosMain";
import isEqual from "lodash/isEqual";
import { Avatar, Chip } from "@mui/material";
const ReceiveDeadline = () => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const [TodoData, setTodoData] = useState({});

  useEffect(() => {
    try {
      AxiosMain.post("/api/todo/gettodos", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
        let newTodoData = { ...TodoData };
        newTodoData.push(res.todo);
        setTodoData(newTodoData);
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
          {/* mỗi todo 1 job */}
          <div className="todo-job">
            <div className="deadline-creater-img">
              <Avatar
                alt="Avatar"
                src="data:image/jpeg;base64,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"
                sx={{ width: 50, height: 50 }}
                style={{
                  border: "1px solid #f36f21",
                }}
              />
            </div>
            <div className="deadline-name">Name here</div>
            <div className="deadline-note">Description here</div>
            <div className="deadline-date">
              <Chip
                color="success"
                label="1/1/2022"
                size="medium"
                style={{ marginRight: 20 }}
              />
            </div>
          </div>
          <div className="todo-job">
            <div className="deadline-creater-img">
              <Avatar
                alt="Avatar"
                src="data:image/jpeg;base64,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"
                sx={{ width: 50, height: 50 }}
                style={{
                  border: "1px solid #f36f21",
                }}
              />
            </div>
            <div className="deadline-name">Name here</div>
            <div className="deadline-note">Description here</div>
            <div className="deadline-date">
              <Chip
                color="success"
                label="1/1/2022"
                size="medium"
                style={{ marginRight: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveDeadline;
