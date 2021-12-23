import React from 'react'

export  function LoginForm() {
    return (
        <form>
            <div className='form-inner'>
                <h2>Login</h2>
              
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name='email' id='email' />
                   
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' id='password' />
                </div>
                
            </div>
            <input type="submit" value="LOGIN" />
        </form>
    )
}
