import React from "react";
import { useState } from 'react'
import axios from 'axios'
import "./assets/css/register.css"



const RegisterForm = (props) => {

    const [email, setemail] = useState("");
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit = () => {

    axios.post('https://fptnetwork.elemarkuspet.repl.co/api/auth/register', {
            email: email,
            name: name,
            password: password
        },{
            headers: {
                "Content-Type": "application/json"
            }
        }
           ).then(res => {
                console.log("message: ", res)
            })
            .catch(error=>{
                console.log("error", error)
            })
          }
  return (
    <div className="register_wrapper">
      
      <div className="register_form">
        <h1 className="top_header">Register</h1>
        <form >
          <div className="register_type_field">
              <input type="text" name="email" id="email" onChange={e => setemail(e.target.value)} required/>
              <span></span>
              <label>Email:</label>
          </div>
          <div className="register_type_field">
              <input type="text" name="name" id="name" onChange={e => setname(e.target.value)} required/>
              <span></span>
              <label >Your Name: </label>
          </div>
          <div className="register_type_field">
              <input type="password" name="password" onChange={e => setpassword(e.target.value)} id="password" required/>
              <span />
              <label htmlFor="form-group">Password: </label>
          </div>
          <input className="register_submit_btn" type="button" onClick={handleSubmit} value="REGISTER" />
        </form>
      </div>
      <div class="logo_fan"><p>FPT University Academic Network</p></div>
    </div>
  )}
export default  RegisterForm