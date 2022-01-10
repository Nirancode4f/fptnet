import React from 'react';
import { useState, useEffect } from "react";
import CmtUser from './CmtUser';
import ReactDOM from 'react-dom';

import axios from "axios";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error =
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";

function CmtBox(props) {


  const { postData } = props

  const [isunmound, setisunmound] = useState(true)
  const [Usercmt, setUsercmt] = useState([])
  const { Cmt } = props



  // run this shit first
  useEffect(() => {
    // run first
    // check if component is mounte
    try {
      axios
        .post(
          `${URL_MAIN}/api/comment/get`,
          {
            "postId": `${postData._id}`,
            "block": 1,
            "sorttype": 2
          },
          {
            headers: {
              "Content-Type": "application/json",

            },
          }
        )
        .then((res) => {
          // after unmount component but asynchronous task still run, drop it.
          if (isunmound) {
            setUsercmt(res.data.comments)
      
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      // console log error
      console.log(error);
    }
    return ()=>{
      setisunmound(false)
    }

  },[]);

  useEffect(() => {
 
    var e = Usercmt.map((cmt) =>
        <CmtUser key={cmt._id}  CmtInfor={cmt} />
      )
      ReactDOM.render(e, document.getElementById("cmt_ele"))
    
  
  })


  return (

    <div>
      <div
        className="comment-main">
        <div className="modal-wiew-detail-post-content-comment-content" id='cmt_ele'>





        </div>

      </div>

    </div>
  );
}

export default CmtBox;