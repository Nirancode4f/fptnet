
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
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
            
            ).then((res)=>{
            
                setinfo(res.data.message)
                ReactDOM.render(checkpost,document.getElementById("infor"))
                
            })

            .catch(error => {
                    if(error.request){
                        console.log(error.request)
                    }if(error.response){
                        console.log(error.response)
                    }
                })

          
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <div><h1>Login page</h1>
            
              <h3 > <div id='infor'> </div></h3>

            
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Email</label>
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