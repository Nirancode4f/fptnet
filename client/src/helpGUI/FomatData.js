import { useEffect, useState } from "react"
import dateFormat from "dateformat";






///take the time
function FomatData(date)  {
    const [timeString, settimeString] = useState(Date())
    const d = date

  
    useEffect(()=>{
        let currentyear = dateFormat(timeString,"yyyy")
    let day = dateFormat(d,"d")
    let month = dateFormat(d,"m")
    let year = dateFormat(d, "yyyy")    
    let hour = dateFormat(d,"h")
    let minute = dateFormat(d,"MM")
    let TT = dateFormat(d,"TT")
    

    if (currentyear === year)
    { 
        const fo = `${day} tháng ${month} lúc ${hour}:${minute} ${TT}`
        settimeString(fo)
        
    }
    else { 

        const fo = `${day}/${month}/${year}`
        settimeString(fo)
     }
    },[])
    
      
    return {timeString};
     
}
export default FomatData