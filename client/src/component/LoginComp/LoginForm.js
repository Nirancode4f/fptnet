import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import './assets/css/login.css'

const LoginForm = (props)=>{

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")





    const handleSubmit = () => {

        
        axios.post('https://fptnetwork.elemarkuspet.repl.co/api/auth/login', {
            email: email,
            password: password
        },{
            headers: {
                "Content-Type": "application/json"
            }
        }
           ) .then(res => {
                console.log("message: ", res)
            })
            .catch(error=>{
                console.log("error", error)
            })


    }


        return (
            <div className= "login_wrapper">
                
                <div className="login_form">
                    
                    <h1 className="top_header">Log in</h1>
                    
                    <form action="">
                        <div className="login_type_field">
                            <input id="email" type="text" value={email} onChange={e => setemail(e.target.value)} required />
                            <span></span>
                            <label >Username</label>
                        </div>
                        <div className="login_type_field">
                            <input id="password" type="password" value={password} onChange={e => setpassword(e.target.value)}  required autoComplete='true'/>
                            <span></span>
                            <label >Password</label>
                        </div>
                        <div>
                            <div className="login_forgot">Forgot password</div>
                        </div>
                        <div>
                            <button className="login_submit_btn" onClick={handleSubmit}>LOGIN</button>
                        </div>
                    </form>
                    
                    <div className="login_bottom_suggest">If you not member? <a className="signIn_anchor" href='/register'>Sign in</a></div>

                </div>
                
                <div className="logo_fan"><p>FPT University Academic Network</p></div>

            </div>
        )
    }

export default LoginForm