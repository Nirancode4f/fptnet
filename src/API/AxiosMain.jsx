import axios from "axios"
import queryString from "query-string"
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const AxiosMain = axios.create({
    baseURL: process.env.REACT_APP_URL_MAIN,
    headers:{
        'content-type': "application/json"
       
    },
    paramsSerializer: params => queryString.stringify(params),
}) ;
AxiosMain.interceptors.request.use(async (config) => {
    config.headers.Authorization = `${read_cookie("accessToken")}`
    return config
})
        
AxiosMain.interceptors.response.use((response)=>{
    if (response && response.data){
        return response.data
    }
    return response
}, (error) =>{
    throw error
} 
)


/// code xong rồi
export default AxiosMain