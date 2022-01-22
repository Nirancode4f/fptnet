import React, { useEffect } from 'react'
import TableDeadline from '../../component/DeedLine/TableDeadline'
import Deadline from '../../component/DeedLine/Deadline'
import MainLayout from '../../component/MainPage/MainLayout'

import { useState } from 'react'
import Login from '../LoginPage/Login'
import { Navigate, useNavigate } from 'react-router-dom'



function DeadlinePage () {
    const [LoginData, setLoginData] = useState(
        localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null
    )

const navigate = useNavigate()

useEffect(() => {
  if(!LoginData){
    Navigate("/login")
  }
}, [LoginData]);

    return (
        <div>
        {LoginData ? <MainLayout /> : <></>}
            <Deadline/>
            <TableDeadline/>
        </div>
    )
}
export default DeadlinePage