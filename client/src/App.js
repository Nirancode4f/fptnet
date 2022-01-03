import "./App.css";

import Register from "./page/RegisterPage/Register";
import Login from "./page/LoginPage/Login";
import Main from "./page/MainPage/Main";
import Messenger from "./page/Messenger/Messenger";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./page/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/messenger" element={<Messenger />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
