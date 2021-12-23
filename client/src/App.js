
import './App.css';
import { LoginForm } from './component/LoginForm';
import { RegisterForm } from './component/RegisterForm';
import { useState } from "react"

function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return ( 
  <div>
    <div><LoginForm/></div>
    <div><RegisterForm/></div>
  </div>
  );
}

export default App;
