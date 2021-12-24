
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const URL_MAIN = "https://fptnetwork.elemarkuspet.repl.co"


const LoginForm = (props) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            // eslint-disable-next-line no-useless-concat
            axios.post(`${URL_MAIN}`+"/api/auth/login", {
                email: email,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            ).then(res => {
                console.log("message: ", res)
            })
                .catch(error => {
                    console.log("error", error)
                })
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <div><h1>Login page</h1></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Username</label>
                    <input id="email" type="text" value={email} onChange={e => setemail(e.target.value)} required />
                </div>
                <div>
                    <label >Password</label>
                    <input id="password" type="password" value={password} onChange={e => setpassword(e.target.value)} required autoComplete='true' />
                </div>
                <div>
                    <button disabled={email.length < 1 || password.length < 1}>LOGIN</button>
                </div>
            </form>
            <div>
            <h5>No account ??</h5>
            <Link to="/register"><button>Register</button></Link>
            </div>

        </div>
        
    )
}

export default LoginForm