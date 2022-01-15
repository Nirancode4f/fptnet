import React from 'react';
import { useState, useEffect } from "react";
import CmtUser from './CmtUser';
import ReactDOM from 'react-dom';
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import axios from "axios";
import { CircularProgress, LinearProgress } from '@mui/material';

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error =
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";




function CmtBox(props) {


  const { postData } = props
  const [Block, setBlock] = useState(1)
  const [isunmound, setisunmound] = useState(true)
  const [Usercmt, setUsercmt] = useState([])
  const [ShowMore, setShowMore] = useState(Usercmt.length < postData.totalcmt ?
    true : false)
  const [Loading, setLoading] = useState(false)



  const Getaxios = () => {
    try {
      axios
        .post(
          `${URL_MAIN}/api/comment/get`,
          {
            "postId": `${postData._id}`,
            "block": Block,
            "sorttype": 1
          },
          {
            headers: {
              "Content-Type": "application/json",
              'Authorization': read_cookie("accessToken")

            },
          }
        )
        .then((res) => {
          setLoading(false)
          // after unmount component but asynchronous task still run, drop it.
          if (isunmound) {
            const newUsercmt = [...Usercmt]
            let a = Block + 1
            setBlock(a)
            // newUsercmt.push(res.data.comments[0])
            let sumUsercmt = newUsercmt.concat(res.data.comments)
            setUsercmt(sumUsercmt)

          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      setLoading(true)
    } catch (error) {
      // console log error
      console.log(error);
    }
  }


  // run this shit first
  useEffect(() => {
    // run first
    // check if component is mounte
    Getaxios()

    return () => {
      setisunmound(false)
    }

  }, []);


  useEffect(() => {

    if (Usercmt.length < postData.totalcmt) {
      setShowMore(true)
    } else {
      setShowMore(false)
    }

    var e = Usercmt.map((cmt) =>
      <CmtUser key={cmt._id} CmtInfor={cmt} />
    )
    ReactDOM.render(e, document.getElementById("cmt_ele"))

    return
  })



  const handleScrollCmt = (e) => {

    Getaxios()

  }

  return (

    <div>
       
      <div
      
        className="comment-main" >
         
        <div className="modal-wiew-detail-post-content-comment-content" id='cmt_ele'  >





        </div>
         { Loading && 
         <LinearProgress 
         color='inherit' 
         style={{color : "#f36f21", height: "2px"}}
         
         />}
        { ShowMore && <div className='click-for-more-btn' onClick={handleScrollCmt}>Click for more...</div>}
       
      </div>

    </div>
  );
}

export default CmtBox;