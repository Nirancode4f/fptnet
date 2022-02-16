import "./App.css";
import MainLayout from "./component/MainPage/MainLayout";
import Register from "./page/RegisterPage/Register";
import Login from "./page/LoginPage/Login";
import Main from "./page/MainPage/Main";
import Messenger from "./page/Messenger/Messenger";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { NotFound } from "./page/NotFound/NotFound";
import { Profile } from "./page/Profile/Profile";
import DeadlinePage from "./page/DeadLine/DeadlinePage";

import { useEffect, useState } from "react";
import Extension from "./page/Extension/Extension";
import isEqual from "lodash/isEqual";
import ReceiveDeadline from "./page/ReceiveDeadline/ReceiveDeadline";

function App() {
  const [CurrentRoute, setCurrentRoute] = useState("");

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [CLone, setCLone] = useState(LoginData);

  useEffect(() => {
    setInterval(() => {
      const con = localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null;

      if (!con) {
        setLoginData(null);
      } else if (!isEqual(con, LoginData)) {
        // window.location.reload(false);
        setLoginData(
          localStorage.getItem("loginData")
            ? JSON.parse(localStorage.getItem("loginData"))
            : null
        );
        console.log(LoginData, con);
      }
    }, 500);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <BrowserRouter>
      {LoginData && <MainLayout />}

      <Routes>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Main />}></Route>

        <Route path="/messenger" element={<Messenger />}></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/deadline" element={<DeadlinePage />}></Route>

        <Route path="/extension" element={<Extension />}></Route>

        <Route path="/share/*" element={<ReceiveDeadline />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
