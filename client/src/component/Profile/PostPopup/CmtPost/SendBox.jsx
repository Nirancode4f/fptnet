import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from 'react';
import axios from "axios";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";





export const SendBox = (props) => {
    const {postId} = props

    const [Localdata,setLocaldata] = useState({})
    const [isUnmound, setisUnmound] = useState(true)
    const [CommentText, setCommentText] = useState("")






    const handleSend = (e)=>{
    e.preventDefault()
    var localData = JSON.parse(localStorage.getItem("loginData"));

    const userId = localData.user._id
    // check if component is mounted
    if (CommentText !== "")
    {try {
        axios
        .post(
            `${URL_MAIN}/api/comment/create`,
            {
            "userId": `${userId}`,
            "postId": "61d40f8ed5c3e626d22e27d6",
            "content": `${CommentText}`
            },
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        )
        .then((res) => {
            console.log(res.data)
            setCommentText("")
            
        })
        .catch((err) => {
            console.log(err.message);
        });
    } catch (error) {
        // console log error
        console.log(error);
    }}
    }


    
   
    console.log(Localdata)

    return (
        <form onSubmit={handleSend} className="comment-post">
            <input type="text" onChange={(e)=>setCommentText(e.target.value)} placeholder="Input your comment here" />
            <Button
            onClick={handleSend}
            style={{ color: "#f36f21" }}
            endIcon={<SendIcon style={{ color: "#f36f21" }} />}></Button>
        </form>
    )
}
