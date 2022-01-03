import './App.css';

import Register from './page/RegisterPage/Register';
import Login from "./page/LoginPage/Login"
import Main from "./page/MainPage/Main"


import {BrowserRouter,Routes,Route } from "react-router-dom"

import Messages from './page/Message/Message';
import { NotFound } from './page/NotFound/NotFound';
import { Profile } from './page/Profile/Profile';

function App() {

  return ( 
  <BrowserRouter>
  <Routes>
  <Route  path="/login" element={ <Login/> }></Route>
  <Route   path="/" element={ <Main/> }></Route>
  <Route  path="/register" element={ <Register/> }></Route>
  <Route  path="/*" element={ <NotFound/> }></Route>
  <Route  path="/profile" element={ <Profile/> }></Route>
  </Routes>
  </BrowserRouter>
  );
}


export default App;