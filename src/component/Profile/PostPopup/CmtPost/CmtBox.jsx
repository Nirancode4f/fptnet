import React from 'react';
import { useState, useEffect } from "react";
import CmtUser from './CmtUser';
import ReactDOM from 'react-dom';
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import axios from "axios";
import { CircularProgress, LinearProgress } from '@mui/material';
import AxiosMain from '../../../../API/AxiosMain';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error =
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";




function CmtBox(props) {


  const { postData, ShowCmtSetting } = props

  const [Block, setBlock] = useState(1)
  const [isunmound, setisunmound] = useState(true)
  const [Usercmt, setUsercmt] = useState([])
  const [ShowMore, setShowMore] = useState(true)
  const [Loading, setLoading] = useState(false)




  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRemove = async (data) => {

    try {

      AxiosMain.post("/api/comment/delete", {
        "commentId": `${data._id}`
      }).then((res) => {
        const index = Usercmt.filter((cmt) => {
          return (cmt._id !== data._id)

        })
        setUsercmt(index)
        console.log(res)
      })



    } catch (error) {
      console.log(error)
    }



  }

  const Getaxios = async () => {
    try {

        AxiosMain.post("/api/comment/get", {
          "postId": `${postData._id}`,
          "block": Block,
          "sorttype": 1
        }).then((res) => {
        if(!res.comments){setShowMore(false)}
        setLoading(false)
        // after unmount component but asynchronous task still run, drop it.
        if (isunmound) {
          const newUsercmt = [...Usercmt]
          let a = Block + 1
          setBlock(a)
          let sumUsercmt = newUsercmt.concat(res.comments)
          setUsercmt(sumUsercmt)
        }
      })
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

  },[]);


  useEffect(() => {

    if (Usercmt.length < postData.totalcmt) {
      setShowMore(true)
    } else {
      setShowMore(false)
    }

    var e = Usercmt.map((cmt) =>
      <CmtUser key={cmt._id} CmtInfor={cmt} onDELETE={handleRemove} />
    )
    ReactDOM.render(e, document.getElementById("cmt_ele"))

    return
  }, [Usercmt, postData.totalcmt, handleRemove])



  const handleScrollCmt = (e) => {

    Getaxios()

  }

  return (

    <div>

      <div

        className="comment-main" >

        <div className="modal-wiew-detail-post-content-comment-content" id='cmt_ele'  >


          {/* Cmt will be here */}


        </div>
        {Loading &&
          <LinearProgress
            color='inherit'
            style={{ color: "#f36f21", height: "2px" }}

          />}
        {ShowMore && <div className='click-for-more-btn' onClick={handleScrollCmt}>Click for more...</div>}

      </div>

    </div>
  );
}


export default CmtBox;