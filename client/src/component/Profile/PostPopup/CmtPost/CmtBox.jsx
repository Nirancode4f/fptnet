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
  const [Block, setBlock] = useState(1)
  const [isunmound, setisunmound] = useState(true)
  const [Usercmt, setUsercmt] = useState([])
  const { Cmt } = props




    const Getaxios = ()=>{
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
  
              },
            }
          )
          .then((res) => {
            // after unmount component but asynchronous task still run, drop it.
            if (isunmound) {
          const newUsercmt = [...Usercmt]

              newUsercmt.push(res.data.comments)
              let sumUsercmt = newUsercmt.concat(res.data.comments)
              setUsercmt(newUsercmt[0])
        
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        // console log error
        console.log(error);
      }
    }

const Getaxios2 = ()=>{
      try {
        axios
          .post(
            `${URL_MAIN}/api/comment/get`,
            {
              "postId": `${postData._id}`,
              "block": 2,
              "sorttype": 1
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
          
              
              const newUsercmt = [...Usercmt]

              // newUsercmt.push(res.data.comments)

             let sumUsercmt = newUsercmt.concat(res.data.comments)

              setUsercmt(sumUsercmt)
              console.log(`newusercmt = `,sumUsercmt)
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        // console log error
        console.log(error);
      }
    }

console.log(`userdata`, Usercmt)


  

  // run this shit first
  useEffect(() => {
    // run first
    // check if component is mounte
    Getaxios()

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


      
  const handleScrollCmt = (e)=>{
    
    Getaxios2()
  
  }

  return (

    <div>
      <div
        className="comment-main" >
        <div className="modal-wiew-detail-post-content-comment-content" id='cmt_ele'  >





        </div>
        <div onClick={handleScrollCmt}>click for more...</div>
      </div>

    </div>
  );
}

export default CmtBox;