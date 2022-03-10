
import { useEffect, useState } from "react"
import dateFormat from "dateformat";



const DeadlineDate = {

  FomatDate: (date) => {
    const [timeString, settimeString] = useState("")
    const [CmtDate, setCmtDate] = useState(Date())
    const d = date
    useEffect(() => {

      function TimePost() {

        let currentyear = dateFormat(timeString, "yyyy")
        let day = dateFormat(d, "d")
        let month = dateFormat(d, "m")
        let year = dateFormat(d, "yyyy")
        let hour = dateFormat(d, "h")
        let minute = dateFormat(d, "MM")
        let TT = dateFormat(d, "TT")

        const fo = `${day}/${month}/${year}`

        settimeString(fo)
      }

      TimePost()

    }, [])
    return { timeString }
  }


}
export default DeadlineDate