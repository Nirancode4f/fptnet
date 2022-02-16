import { Link } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react";
import AxiosMain from "../../API/AxiosMain";
import GetSeo from '../../helpGUI/GetSeo';

const Attachment = (props) => {
    const {data } = props
    const [Seolink, setSeolink] = useState({})



  return (
    <>
    {
        <GetSeo link={data[0]}/>
      }
</>
  )
}

export default Attachment