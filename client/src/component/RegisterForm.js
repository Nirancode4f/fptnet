import React from "react";
import { useState } from 'react'
import axios from 'axios'



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
    <div>
      <h1>Register</h1>
      <form >

        <div className="form-group">
            <label htmlFor="form-group">Email:</label>
            <input type="text" name="email" id="email" onChange={e => setemail(e.target.value)} placeholder="text here" />
        </div>

        <div className="form-gorup">
            <label htmlFor="form_group">Your Name: </label>
            <input type="text" name="name" id="name" onChange={e => setname(e.target.value)} placeholder="text here" />
        </div>

        <div className="form-group">
            <label htmlFor="form-group">Password: </label>
            <input type="password" name="password" onChange={e => setpassword(e.target.value)} id="password" />
        </div>

        <input type="button" onClick={handleSubmit} value="REGISTER" />
      </form>
    </div>
  )}
export default  RegisterForm