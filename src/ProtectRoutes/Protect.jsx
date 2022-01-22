import { useState } from "react"
import { useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"






async function Protect(){

    const [user, setUser] = useState(false);

    useEffect(() => {
    const data = localStorage.getItem("loginData")
    if(data){
        setUser(true)
    }else{
        setUser(false)
    }
  
    },[user]);
    


    return {user}
}

export default Protect