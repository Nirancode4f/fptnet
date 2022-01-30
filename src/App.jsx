import "./App.css";
import MainLayout from "./component/MainPage/MainLayout"
import Register from "./page/RegisterPage/Register";
import Login from "./page/LoginPage/Login";
import Main from "./page/MainPage/Main";
import Messenger from "./page/Messenger/Messenger";
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import { NotFound } from './page/NotFound/NotFound';
import { Profile } from './page/Profile/Profile';
import  DeadlinePage from "./page/DeadLine/DeadlinePage";

import { useEffect, useState } from "react";
import Extension from "./page/Extension/Extension";


function App() {
  const [CurrentRoute, setCurrentRoute] = useState("");

  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

useEffect(()=>{

  const E = () =>{
  let local = localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
   // eslint-disable-next-line eqeqeq
   if(local === []) 
   { 
     
    setLoginData(null)

  }

  }
  setInterval(() => E(), 500);

},[])


  return ( 

  <BrowserRouter>
  { LoginData && <MainLayout/>}

  <Routes>

  <Route  path="/register" element={ <Register/> }></Route>

  <Route  path="/login" element={<Login/>}></Route>

  <Route   path="/" element={ <Main/> }></Route>
 
  <Route path="/messenger" element={ <Messenger/>}></Route>

  <Route  path="/profile" element={ <Profile/> }></Route>

  <Route  path="/deadline" element={<DeadlinePage/>  }></Route>

  <Route  path="/extension" element={<Extension/>  }></Route>

  <Route  path="*" element={ <NotFound/> }></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

const UpRoute = (props) => {




}
