import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import PostContent from './PostContent'
import PosterTime from './PosterTime'
import Postimage from './Postimage'
import ShowLikeCmt from './ShowLikeCmt'

import PropTypes from "prop-types"
import CmtBox from './CmtPost/CmtBox'

import dateFormat from "dateformat";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
ProfilePopUp.prototype = {
    data: PropTypes.object,
    OnClickout: PropTypes.func,
}

ProfilePopUp.defaultProps = {
    data: {},
    OnClickout: null
}

// eslint-disable-next-line no-use-before-define


function ProfilePopUp(props) {


    const { data, OnClickout } = props
   
    const [date, setdate] = useState(Date())

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.picture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

    const totalcmt = Object.keys(data.comments).length
    const d = new Date(data.createAt)
     

    

    useEffect(()=>{
        let currentyear = dateFormat(date,"yyyy")
        let day = dateFormat(d,"d")
        let month = dateFormat(d,"m")
        let year = dateFormat(d, "yyyy")    
        let hour = dateFormat(d,"h")
        let minute = dateFormat(d,"MM")
        let TT = dateFormat(d,"TT")

        
        

        if (currentyear === year)
        { 
            const fo = `${day} tháng ${month} lúc ${hour}:${minute} ${TT}`
            setdate(fo)
            
        }
        else { 

            const fo = `${day}/${month}/${year}`
            setdate(fo)
         }
        
        
        
        },[])

    function handleOnClickout() {

        OnClickout(null)

    }



    return (


        <div className="modal-wiew-detail-post" onClick={handleOnClickout}  >
            <div className="modal-wiew-detail-post-container" onClick={(event) => event.stopPropagation()} >
                <div className="modal-wiew-detail-post-img">

                    <Postimage image={data.image} errorPic={errorPic} />

                    <ShowLikeCmt like={data.like} cmt={totalcmt} />

                </div>

                <div className="modal-wiew-detail-post-content">

                    <div className="modal-wiew-detail-post-content-header">
                        <PosterTime UserName={UserName} Postdate={date} Avatar={Avatar} errorPic={errorPic} />

                        <PostContent content={data.content} />

                        <div className="modal-wiew-detail-post-content-action">
                            <div>
                                <i className="far fa-heart like-post unlike"> </i>
                                <span>Thích</span>
                            </div>
                            {/* <i className="fas fa-heart like-post liked">Bở Thích</i> */}
                            <div className='click-to-show-comment-content'>
                                <i className="far fa-comment-alt to-comment"></i>
                                <span>Bình Luận</span>
                            </div>
                            <div className="modal-wiew-detail-post-content-share-btn">
                                <i className="fas fa-share-square share-post-btn"></i>
                                <span>Chia sẻ</span>
                            </div>


                        </div>
                    </div>
                    <div className="modal-wiew-detail-post-content-comment">
                        {/* ẩn cmt thì class comment-main display:none */}
                        <div className="comment-main">
                            <div className="modal-wiew-detail-post-content-comment-content">



                            <CmtBox postData={data} />


                            </div>
                            <div className="comment-post">
                                <input type="text" placeholder="Viết bình luận của bạn" />
                                <Button 
                                 style={{color : "#f36f21"}}
                                endIcon={<SendIcon  style={{color : "#f36f21" }}/>}></Button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>



    )
}

export default ProfilePopUp
