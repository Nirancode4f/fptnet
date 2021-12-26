import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import './assets/css/login.css'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const LoginForm = (props) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [info, setinfo] = useState("")




    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {


            const checkpost = (<h1>{info}</h1>)


            axios.post(`https://fptnetwork.elemarkuspet.repl.co/api/auth/login`, {
                email: email,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            ).then(async (res) => {
                if(res.data.message !== "successfully"){
                setinfo(res.data.message)
                ReactDOM.render(checkpost, document.getElementById("infor"))
                }
                

            })

                .catch(error => {
                    if (error.request) {
                        console.log(error.request)
                    } if (error.response) {
                        console.log(error.response)
                    }
                })


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="login_wrapper">

            <div className="login_form">

                <h1 className="top_header">Log in</h1>

                <form onSubmit={handleSubmit}>
                    <div className="login_type_field">
                        <input id="email" type="text" value={email} onChange={e => setemail(e.target.value)} required />
                        <span></span>
                        <label >Username</label>
                    </div>
                    <div className="login_type_field">
                        <input id="password" type="password" value={password} onChange={e => setpassword(e.target.value)} required autoComplete='true' />
                        <span></span>
                        <label >Password</label>
                    </div>
                    <div>
                        <div id='infor'></div>
                        <div className="login_forgot">Forgot password</div>
                    </div>
                    <div>
                        <button className="login_submit_btn" >LOGIN</button>
                    </div>
                </form>

                <div className="login_bottom_suggest">If you not member?
                    <Link className="signIn_anchor" to='/register'>Sign in
                    </Link>
                </div>

            </div>

            <div className="logo_fan"><p>FPT University Academic Network</p></div>

        </div>
    )
}

export default LoginForm