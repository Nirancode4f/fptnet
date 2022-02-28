import React from 'react'
import { Avatar } from '@mui/material'

const MakeSeoURL = (props) => {

    const {DataSeo} = props

    console.log(`DataSeo `, DataSeo)

  return (
     <>
       <div className="make-seo-block">
         <img src={DataSeo.image}
         className='bg-img-provider'

         />
          <Avatar
          src={DataSeo.icon}
          alt="provider"
          sx={{
            width: "20px",
            height: "20px",
            bgcolor: "red" ,
            zIndex:200
            }}>

            </Avatar>
           
           <div className="provider-name">
             {DataSeo.title}
           </div>
          </div>
     </>
  )
}

export default MakeSeoURL