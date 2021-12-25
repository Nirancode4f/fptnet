import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const Welcome = () => {



    return (

        <div>
            <h1>Home page</h1>
            <h3>This is the place to greet users</h3>
            <nav>
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>

                <Link to="/register">
                    <button>
                        Register
                    </button>
                </Link>
            </nav>
            
        </div>

    )
}
export default Welcome