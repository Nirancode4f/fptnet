import React from 'react'
import "./DetailDeadLine.css"
import GetSeo from '../../../helpGUI/GetSeo'
import DeadlineTag from '../DeadlineTag'
import { Avatar } from '@mui/material' 

const DetailDeadline = (props) => {
  const { }  = props 

  

  return (
    <div className='DetailDeadline'>
         <div className="DetailDeadline-container">
             <div className="DetailDeadline-container-receiver">
             <Avatar>H</Avatar>
             <Avatar sx={{ bgcolor: "green" }}>N</Avatar>
             <Avatar sx={{ bgcolor: "red" }}>OP</Avatar>
             </div>
             <div className="DetailDeadline-container-body">
              <div className="DetailDeadline-container-body__title-and-provider">
            <GetSeo></GetSeo>
              </div>
              <div className="DetailDeadline-container-body__content">
              Content: 
              </div>
              <div className="DetailDeadline-container-body__note">
              Note: 
              </div>
             </div>
         </div>
    </div>
  )
}
export default DetailDeadline
