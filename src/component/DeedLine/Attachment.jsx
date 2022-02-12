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
        <GetSeo link={attachment}/>
      ))}
</>
  )
}

export default Attachment