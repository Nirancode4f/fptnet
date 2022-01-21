import "./App.css";

import Register from "./page/RegisterPage/Register";
import Login from "./page/LoginPage/Login";
import Main from "./page/MainPage/Main";
import Messenger from "./page/Messenger/Messenger";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { NotFound } from './page/NotFound/NotFound';
import { Profile } from './page/Profile/Profile';
import { DeadlinePage } from "./page/DeadLine/DeadlinePage";
import Protect from "./ProtectRoutes/Protect";
import { useEffect, useState } from "react";

function App() {
 const user  = Protect()
 


  return ( 
  <BrowserRouter>
  <Routes>

  <Route  path="/register" element={ <Register/> }></Route>

  <Route  path="/login" element={<Login/> }></Route>

  <Route   path="/" element={user ? <Main/> : <Navigate to={"/login"}/>}></Route>

  <Route path="/messenger" element={ user ? <Messenger/> : <Navigate to={"/login"}/>}></Route>

  <Route  path="/profile" element={  user ? <Profile/> : <Navigate to={"/login"}/> }></Route>

  <Route  path="/deadline" element={  user ? <DeadlinePage/> : <Navigate to={"/login"}/> }></Route>

  <Route  path="*" element={ <NotFound/> }></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
