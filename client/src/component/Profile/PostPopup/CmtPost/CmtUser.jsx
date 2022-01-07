import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

  const error =
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";
function CmtUser(props) {

    const [isunmound, setisunmound] = useState(true)
    const [UserInfor, setUserInfor] = useState({})
    const { Cmt } = props

    const content = Cmt.content
    const userId = Cmt.userId


    useEffect(() => {
        // run first
      
        // check if component is mounted
        try {
          axios
            .get(
              `${URL_MAIN}/api/user/getinfo/${userId}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              // after unmount component but asynchronous task still run, drop it.
              if (isunmound) {

                setUserInfor(res.data.user);
                console.log(res.data.user);
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        } catch (error) {
          // console log error
          console.log(error);
        }
        return () => {
          isunmound = false;
        };
      }, []);




    return (

        <div className="comment-box">
            <div className="comment-box-infor-commenter">
                <div className="comment-box-infor-commenter-avt">
                    <img src={
                        UserInfor.picture !== "" ?
                        UserInfor.picture : error

                    } alt="" />
                </div>
                <div className="comment-box-infor-commenter-name">
                    {UserInfor.username}
                    <span className="more-info-cmt-btn" > ... </span>

                </div>
            </div>
            <div className="comment-box-content">
                {content}
                <div className="reaction-comment">
                    <span >
                        Thích
                    </span>
                    <span >
                        Trả lời
                    </span>
                </div>
            </div>


        </div>

    )
}

export default CmtUser