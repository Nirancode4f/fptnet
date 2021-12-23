import React from "react";

export const RegisterForm = () => {

  async function registerUser(){
        
    }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>

        <div className="form-group">
            <label htmlFor="form-group">Email:</label>
            <input type="text" name="email" id="email" placeholder="text here" />
        </div>

        <div className="form-gorup">
            <label htmlFor="form_group">Your Name: </label>
            <input type="text" name="name" id="name" placeholder="text here" />
        </div>

        <div className="form-group">
            <label htmlFor="form-group">Password: </label>
            <input type="password" name="password" id="password" />
        </div>

        <input type="button" value="REGISTER" />
      </form>
    </div>
  );
};
