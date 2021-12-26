import React from "react";
import { useState } from 'react'
import axios from 'axios'
import "./assets/css/register.css"
import { Link, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';


const RegisterForm = (props) => {

  const [email, setemail] = useState("");
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [info, setinfo] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event) => {

    event.preventDefault()
    
    axios.post('https://fptnetwork.elemarkuspet.repl.co/api/auth/register', {
      email: email,
      username: name,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(res => {
      console.log(res)
      
      
      if(res.data.message !== "User Created successfully"){
      setinfo(res.data.message)
      // eslint-disable-next-line no-undef
      const checkpost = (<h1>{info}</h1>)

      ReactDOM.render(checkpost, document.getElementById("infor"))

      }else{navigate("/login")
      }
    })
      .catch(error => {
        console.log("error", error)
      })
  }
  return (
    <div className="register_wrapper">

      <div className="register_form">
        <h1 className="top_header">Register</h1>
        <form onSubmit={handleSubmit} >
          <div className="register_type_field">
            <input type="email" name="email" id="email" onChange={e => setemail(e.target.value)} required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="register_type_field">
            <input type="text" name="name" id="name" onChange={e => setname(e.target.value)} required />
            <span></span>
            <label >Your Name </label>
          </div>
          <div className="register_type_field">
            <input type="password" name="password" onChange={e => setpassword(e.target.value)} id="password" required autoComplete="true" />
            <span />
            <label >Password </label>
          </div>
          <div id="infor"></div>
          <button className="register_submit_btn" >REGISTER</button>
        </form>
      </div>
      <div className="logo_fan"><p>FPT University Academic Network</p></div>
    </div>
  )
}
export default RegisterForm