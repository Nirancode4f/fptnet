import './App.css';
import LoginForm  from './component/LoginComp/LoginForm';
import RegisterForm from './component/RegisterComp/RegisterForm';
import Welcome from './page/Mainpage/Welcome.js';


import {BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

  return ( 
  <BrowserRouter>
  <Routes>
  <Route  path="/login" element={ <LoginForm/> }></Route>
  <Route path="/register" element={ <RegisterForm/> }></Route>
  <Route path="/" element={<Welcome/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}


export default App;