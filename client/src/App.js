import './App.css';
import LoginForm  from './component/LoginComp/LoginForm';
import RegisterForm from './component/RegisterComp/RegisterForm';
import Welcome from './page/Mainpage/Welcome.js';


import {BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

  return ( 
  <BrowserRouter>
  <Routes>
  <Route exact  path="/login" element={ <LoginForm/> }></Route>
  <Route exact path="/register" element={ <RegisterForm/> }></Route>
  <Route exact path="/" element={<Welcome/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}


export default App;