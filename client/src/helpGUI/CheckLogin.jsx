import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export const CheckLogin = () => {
    const navigate = useNavigate();
    const [LoginData, setLoginData] = useState(
        localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null
    )
    const [Token, setToken] = useState(read_cookie("accessToken") !== [] ? read_cookie("accessToken") : null )
      
    const [accept, setaccept] = useState()

    useEffect(()=>{

    if(LoginData && Token){
        setaccept(true)
    }else{
        setaccept(false)
    }
        
    },[])

console.log(`accept = `,accept)
    return { accept }
}
export default CheckLogin