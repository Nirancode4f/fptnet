import { Link } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react";
import AxiosMain from "../../API/AxiosMain";
import GetSeo from '../../helpGUI/GetSeo';

const Attachment = (props) => {
    const {data } = props
    const [Seolink, setSeolink] = useState({})
    
    // console.log(getMetaData(data[0]))
  return (
    <>
    {data.map((attachment) => (
        <div className="deadline-attachment-row">
          <div className="attachment-background">
            <img src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/131766102_848176515742014_4155438205270698043_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Qm4aotFwuvwAX_Uns13&_nc_ht=scontent.fvca1-1.fna&oh=00_AT9enx9rMDWxpGrW2KtpA50EB_T8z4wQufkbGyCBROVwVQ&oe=622D7EEE" className='background-attachment-link'/>
             <div className="attachment-content">Here is your attachment content</div>
             <div className="attachment-provider">
               <img src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" className='favicon' />
               Domain
               </div>
          </div>
        </div>
      ))}
</>
  )
}

export default Attachment