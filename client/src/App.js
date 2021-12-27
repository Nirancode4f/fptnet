import './App.css';

import Register from './page/RegisterPage/Register';
import Login from "./page/LoginPage/Login"
import Main from "./page/MainPage/Main"






import {BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

  return ( 
  <BrowserRouter>
  <Routes>
  <Route exact path="/login" element={ <Login/> }></Route>
  <Route exact  path="/" element={ <Main/> }></Route>
  <Route exact path="/register" element={ <Register/> }></Route>
  </Routes>
  </BrowserRouter>
  );
}


export default App;