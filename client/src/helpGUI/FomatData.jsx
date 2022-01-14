import { useState } from "react"
import dateFormat from "dateformat";






///take the time
function FomatData(data) {

    const d =  data

    const [date, setdate] = useState(Date())

    let currentyear = dateFormat(date,"yyyy")
    let day = dateFormat(d,"d")
    let month = dateFormat(d,"m")
    let year = dateFormat(d, "yyyy")    
    let hour = dateFormat(d,"h")
    let minute = dateFormat(d,"MM")
    let TT = dateFormat(d,"TT")
    

    if (currentyear === year)
    { 
        const fo = `${day} tháng ${month} lúc ${hour}:${minute} ${TT}`
        setdate(fo)
        
    }
    else { 

        const fo = `${day}/${month}/${year}`
        setdate(fo)
     }
     return date
     
}
export default FomatData