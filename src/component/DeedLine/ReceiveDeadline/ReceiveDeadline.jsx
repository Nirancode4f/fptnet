import React from 'react';
import { useState, useEffect } from "react";
import AxiosMain from "../../../API/AxiosMain"
import isEqual from 'lodash/isEqual';
const ReceiveDeadline = () => {

    const [LoginData, setLoginData] = useState(
        localStorage.getItem("loginData")
          ? JSON.parse(localStorage.getItem("loginData"))
          : null
      );
    
    const [TodoData, setTodoData] = useState({});

    useEffect(() => {
      try{
        AxiosMain.post("/api/todo/gettodos",{
            userId:`${LoginData.user._id}`
        }).then((res) => {
            
            let newTodoData = {...TodoData}
            newTodoData.push(res.todo)
            setTodoData(newTodoData)
        })

      }catch(error){

      }
    
      return () => {
        
      };
    }, []);
    
console.log(`todo `,TodoData)

  return (
      <div>todo here</div>
  );
};

export default ReceiveDeadline;
