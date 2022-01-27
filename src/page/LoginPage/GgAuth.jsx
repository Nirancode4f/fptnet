/* eslint-disable no-unused-vars */

import GoogleLogin from "react-google-login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import Cookies from "universal-cookie";
import AxiosMain from "../../API/AxiosMain";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import { CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";
function GgAuth() {
  // eslint-disable-next-line no-undef

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFailure = (result) => {
    navigate("/login");
  };

  const hangdleLogin = async (googleData) => {
    setLoading(true);
    try {
      AxiosMain.post(`/api/auth/gg-login`, {
        token: googleData.tokenId,
      }).then((res) => {
        setLoading(false);

        setLoginData(res.message);

        delete res.accessToken;

        bake_cookie("accessToken", res.accessToken);

        localStorage.setItem("loginData", JSON.stringify(res));
        navigate("/");
      });
    } catch (error) {
      // console log error
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {!Loading ? (
        <GoogleLogin
          clientId="368976437444-75mt0ttcg9i22emoapjf8ensoj6n18p3.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className="gglogin_button"
              disabled={renderProps.disabled}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />

              <span> Đăng nhập với Google</span>
            </button>
          )}
          buttonText="Login with google "
          onSuccess={hangdleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <LoadingButton 
        fullWidth
        sx={{
          height: 50,
          color: "#f36f21",
          fill:"inherit"
        }}
        loading 
        loadingIndicator="Loading..."
        variant="outlined"
        style={{ color: "#f36f21" , fill: "#f36f21" }}

         >
          
        </LoadingButton>
      )}
    </>
  );
}

export default GgAuth;
