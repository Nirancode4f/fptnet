import { Navigate, Outlet } from "react-router-dom"


const useAuth =()=>{
    const user = { loggedIn: false }
    return user && user.loggedIn
}

const Protect = () =>{
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to='/login' />
}

export default Protect