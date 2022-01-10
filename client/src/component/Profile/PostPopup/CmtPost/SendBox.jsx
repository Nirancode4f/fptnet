import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from 'react';

export const SendBox = (props) => {
    const {postId} = props

    const [Localdata,setLocaldata] = useState({})
    const [isUnmound, setisUnmound] = useState(true)



    useEffect(() => {
        if (isUnmound)
        {setLocaldata(JSON.parse(localStorage.getItem("loginData")))

        console.log(Localdata)}
        return () => {
           setisUnmound(false)
        }
    }, [])

    
   
    console.log(Localdata)

    return (
        <div className="comment-post">
            <input type="text" placeholder="Viết bình luận của bạn" />
            <Button
                style={{ color: "#f36f21" }}
                endIcon={<SendIcon style={{ color: "#f36f21" }} />}></Button>
        </div>
    )
}
