import React from "react";
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

const RegisterForm = (props) => {

    const [email, setemail] = useState("");
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [info, setinfo] = useState("")
    

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{

      const checkpost = (<h1>{info}</h1>)

      await axios.post('https://fptnetwork.elemarkuspet.repl.co/api/auth/register', {
      email:email,
      username: name,
      password: password
      },{
            headers: {
                "Content-Type": "application/json"
            }
        }
           ).then(res => {
                
                setinfo(res.data.message)
                ReactDOM.render(checkpost,document.getElementById("infor"))

            })
            .catch(error=>{
                console.log("error", error)
            })
      }catch(error){
        console.log("message: ", error)
      }
    
          }
  return (
    <div>
      <h1>Register</h1>
      <div id="infor"></div>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
            <label htmlFor="form-group">Email:</label>
            <input type="text" name="email" id="email" onChange={e => setemail(e.target.value)} placeholder="Your Email" />
        </div>

        <div className="form-gorup">
            <label htmlFor="form_group">Your Name: </label>
            <input type="text" name="name" id="name" onChange={e => setname(e.target.value)} placeholder="Your Name" />
        </div>

        <div className="form-group">
            <label htmlFor="form-group">Password: </label>
            <input type="password" name="password" onChange={e => setpassword(e.target.value)} id="password" placeholder="Your password" />
        </div>

        <button disabled={email.length < 1 || name.length<1 || password.length<1} >Register</button>
      </form>
      <div>used to have an account??</div>
      <Link to="/login"><button>Login</button></Link>
    </div>
  )}
export default  RegisterForm