/* eslint-disable no-unused-vars */

import GoogleLogin from "react-google-login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import Cookies from "universal-cookie";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";
function GgAuth() {
  // eslint-disable-next-line no-undef

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const navigate = useNavigate();

  const handleFailure = (result) => {
    navigate("/login");
  };

  const hangdleLogin = async (googleData) => {
    try {
      axios
        .post(
          `${URL_MAIN}/api/auth/gg-login`,
          {
            token: googleData.tokenId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.message);
          setLoginData(res.data.message);
          localStorage.setItem("loginData", JSON.stringify(res.data));

          bake_cookie("accessToken", res.data.accessToken);
          navigate("/");
        })
        .catch((error) => {
          if (error.request) console.log(error.request);
          if (error.respone) console.log(error.respone);
        });
    } catch (error) {
      // console log error
      console.log(error);
    }
  };

  return (
    <GoogleLogin
      
      clientId="368976437444-75mt0ttcg9i22emoapjf8ensoj6n18p3.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} className="gglogin_button" disabled={renderProps.disabled}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"/>
         
          <span> Đăng nhập với Google</span>
          </button>
      )}
      buttonText="Login with google "
      onSuccess={hangdleLogin}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GgAuth;
