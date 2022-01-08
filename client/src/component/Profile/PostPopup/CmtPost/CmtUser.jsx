import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from 'react-dom';
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";

function CmtUser(props) {
 
 
  const [SaveCmt, setSaveCmt] = useState({})
  const { CmtInfor } = props
  const picture = CmtInfor.userId.picture
  const username = CmtInfor.userId.username


    return (

      <div className="comment-box">
        <div className="comment-box-infor-commenter">
          <div className="comment-box-infor-commenter-avt">
            <img src={
             picture !== "" ? picture : error

  
            } alt="" />
          </div>
          <div className="comment-box-infor-commenter-name">
           {username}
            <span className="more-info-cmt-btn" > ... </span>

          </div>
        </div>
        <div className="comment-box-content">
          {CmtInfor.content}
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