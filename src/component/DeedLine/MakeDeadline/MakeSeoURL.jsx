import React from 'react'
import { Avatar } from '@mui/material'

const MakeSeoURL = (props) => {

    const {DataSeo} = props

    

  return (
     <>
       <div className="make-seo-block">
         <img src="https://i.ytimg.com/vi/UVbv-PJXm14/maxresdefault.jpg"
         className='bg-img-provider'

         />
          <Avatar
          src=""
          alt="provider"
          sx={{
            width: "20px",
            height: "20px",
            bgcolor: "red" ,
            zIndex:200
            }}>

            </Avatar>
           
           <div className="provider-name">
             THE NAME OF WEBsite
           </div>
          </div>
     </>
  )
}

export default MakeSeoURL