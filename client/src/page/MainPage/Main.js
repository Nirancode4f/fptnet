import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect ,Component} from "react"
import Login from '../LoginPage/Login';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import "./Main.css"
const Main = ()=>{
    
    const [LoginData, setLoginData] = useState(
        localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
      )

    const navigate =  useNavigate() 
      const handleLogout = () => {
        delete_cookie("token_net")
    
        ///remove login data in local storage
        localStorage.removeItem("loginData")
        setLoginData(null)
        navigate("/login")
      }

      return (
        <div className="Main">
          <header className="App-header">
            
            {
              // eslint-disable-next-line no-undef
              LoginData ? (
                <div>
    
                  <div>You logged as {LoginData.name}</div>
                    <img src={LoginData.picture} alt="#" />
                  <button onClick={handleLogout} >Logout</button>
                </div>
              ) : (<></>)
    
            }
    
          </header>
        </div>
      );
}

export default Main