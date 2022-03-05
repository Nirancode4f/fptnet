import React from "react";
import { useState, useEffect } from "react";
import AxiosMain from "../../../API/AxiosMain";
import isEqual from "lodash/isEqual";
import { Avatar, Chip, LinearProgress } from "@mui/material";
import ReceiveTag from "./ReceiveTag";






const ReceiveDeadline = (props) => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Loading, setLoading] = useState(true)

  const [TodoData, setTodoData] = useState([]);

 

  

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
  
  console.log(`tododata ` , TodoData)



  return (
    <div>
      <div className="todo-container">
        <div className="todo-header">Todo List</div>
        <div className="todo-body">
        
          { TodoData.map((todo) => (<ReceiveTag key={todo._id} data={todo}/>)
          )}

            {<LinearProgress
           color='inherit'
           style={{ color: "#f36f21", height: "2px" }}

         /> && Loading}
        </div>
      
      </div>
    </div>
  );
};

export default ReceiveDeadline;
