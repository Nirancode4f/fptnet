import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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
            <div>           
                    <div>
                        <label >Username</label>
                        <input id="email" type="text" value={email} onChange={e => setemail(e.target.value)} required />
                    </div>
                    <div>
                        <label >Password</label>
                        <input id="password" type="password" value={password} onChange={e => setpassword(e.target.value)}  required autoComplete='true'/>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>LOGIN</button>
                    </div>
            </div>
        )
    }

export default LoginForm