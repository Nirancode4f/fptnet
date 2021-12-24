
import './App.css';
import LoginForm  from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import Welcome from './component/Welcome.js';


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
