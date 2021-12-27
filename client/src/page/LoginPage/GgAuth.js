
import GoogleLogin from "react-google-login"
import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import Cookies from 'universal-cookie';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';




function GgAuth() {

  // eslint-disable-next-line no-undef
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
  )

  const navigate = useNavigate()

  const handleFailure = (result) => {
    alert(result)
  }


  const hangdleLogin = async (googleData) => {
    bake_cookie(
      "token_net",
      googleData.tokenId
    )
    try {
      axios.post("http://localhost:5000/api/google-login", {
        token: googleData.tokenId
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": googleData.tokenId
        }
      }).then((res) => {


        console.log(res.data.message)
        setLoginData(res.data.message)
        localStorage.setItem("loginData", JSON.stringify({

          email: res.data.message.email,
          name: res.data.message.name,
          picture: res.data.message.picture


        }))
        navigate("/")

      }).catch(error => {
        if (error.request) console.log(error.request)
        if (error.respone) console.log(error.respone)
      })




    } catch (error) {
      // console log error
      console.log(error)
    }
  }

  return (
    <div className="GgAuth">
      
      <GoogleLogin
        clientId="368976437444-75mt0ttcg9i22emoapjf8ensoj6n18p3.apps.googleusercontent.com"
        buttonText="Login with google "
        onSuccess={hangdleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
    />
       

    </div>
  );
}

export default GgAuth;
