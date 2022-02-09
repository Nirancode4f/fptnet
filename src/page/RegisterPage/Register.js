import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./assets/css/register.css";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import validator from "validator";
import Logo from "../../component/Layout/assets/Logo";


const Register = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [info, setinfo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkpost = <h1>{info}</h1>;
    ReactDOM.render(checkpost, document.getElementById("infor"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validator.isEmail(email)) {
      axios
        .post(
          "https://fptnetwork.elemarkuspet.repl.co/api/auth/register",
          {
            email: email,
            username: name,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);

          if (res.data.message !== "User Created successfully") {
            setinfo(res.data.message);
          } else {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      setinfo("Invalid email");
      console.log("nononono");
    }
  };

  return (
    <div className="register_wrapper">
      <div className="register_form">
        <h1 className="top_header">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="register_type_field">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="register_type_field">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setname(e.target.value)}
              required
            />
            <span></span>
            <label>Your Name </label>
          </div>
          <div className="register_type_field">
            <input
              type="password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              id="password"
              required
              autoComplete="true"
            />
            <span />
            <label>Password </label>
          </div>
          <div id="infor"></div>
          <button className="register_submit_btn">REGISTER</button>
        </form>
      </div>
      <div className="logo_fan">
      <div className="logo-img-login-page">
         <Logo/>
      </div>
        <p>FPT University Academic Network</p>
      </div>
    </div>
  );
};
export default Register;
