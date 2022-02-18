import { Link } from '@mui/material'
import React from 'react'
import { useState, useEffect } from "react";
import AxiosMain from "../../API/AxiosMain";
import GetSeo from '../../helpGUI/GetSeo';

const AttachmentReceive = (props) => {
    const {data } = props
    const [Seolink, setSeolink] = useState({})


    // console.log(getMetaData(data[0]))
  return (
    <>
    {
        <GetSeo link={data[0]}/>
      }
</>
  )
}

export default AttachmentReceive