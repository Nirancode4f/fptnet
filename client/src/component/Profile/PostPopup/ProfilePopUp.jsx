import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import PostContent from './PostContent'
import PosterTime from './PosterTime'
import Postimage from './Postimage'
import ShowLikeCmt from './ShowLikeCmt'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from "prop-types"
import CmtBox from './CmtPost/CmtBox'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dateFormat from "dateformat";
import { SendBox } from './CmtPost/SendBox';
import { Button, ButtonGroup, Checkbox } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Favorite from '@mui/icons-material/Favorite';
import FomatData from '../../../helpGUI/FomatData';
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
    const [ShowCmtSetting, setShowCmtSetting] = useState(false)
    const [ShowSendBox, setShowSendBox] = useState(false)

    const [date, setdate] = useState(Date())
    const [LikeCheck, setLikeCheck] = useState(false)

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.picture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

  
    
    const {timeString  } = FomatData(new Date(data.createAt))
   
    
    const LikeOrUnLike = () =>{
        if (LikeCheck === false){
            setLikeCheck(true)
        }else{
            setLikeCheck(false)
        }
    }

    const handleShowCmt =() =>{
       
        if (!ShowSendBox){
            setShowSendBox(true)
        }else{
            setShowSendBox(false)
        }
    }


    function handleOnClickout() {
        
        
        OnClickout(null)

    }



    return (


        <div className="modal-wiew-detail-post" onClick={handleOnClickout}  >
            <div className="modal-wiew-detail-post-container" onClick={(event) => event.stopPropagation()} >
                <div className="modal-wiew-detail-post-img">

                    <Postimage image={data.image} errorPic={errorPic} />

                    <ShowLikeCmt like={data.like} cmt={data.totalcmt} />

                </div>

                <div className="modal-wiew-detail-post-content">

                    <div className="modal-wiew-detail-post-content-header">
                        <PosterTime UserName={UserName} Postdate={timeString} Avatar={Avatar} errorPic={errorPic} />

                        <PostContent content={data.content} />

                        {/* */}
                            {/* */}
                            <ButtonGroup
                            size="small"
                            sx={{height: "40px"}}
                            style={{fill: "#f36f21" }}
                            color='inherit'
                            height={20}
                            fullWidth={true}
                            variant="text"
                            aria-label="small button group"
                             >
                                <Button onClick={LikeOrUnLike}  style={{color: "#f36f21" }} >
                                    {
                                        !LikeCheck ? 
                                           <FavoriteBorderIcon style={{ color: "#f36f21"}} />
                                           :
                                           <Favorite style={{ color: "#f36f21"}} /> 
                                    }
                                    <p style={{color: "inherit"}} >Like</p>
                                </Button>
                                <Button onClick={handleShowCmt} style={{color: "#f36f21" }} >
                                    <ForumOutlinedIcon style={{ color: "inherit"}} />
                                    <p style={{color: "inherit"}} >Comment</p>
                                    </Button>
                                <Button style={{color: "#f36f21" }} >
                                    <ShareOutlinedIcon style={{ color: "inherit"}}/>
                                    <p style={{color: "inherit"}} >Share</p>
                                    </Button>
                            </ButtonGroup>
                     

                    </div>
                    <div className="modal-wiew-detail-post-content-comment">
                        {/* ẩn cmt thì class comment-main display:none */}
                        <div className="comment-main">
                            <div className="modal-wiew-detail-post-content-comment-content" >



                            <CmtBox  postData={data} ShowCmtSetting={ShowCmtSetting} />


                            </div>
                           {  ShowSendBox && <SendBox postId={data._id}  />}
                        </div>
                    </div>


                </div>

            </div>

        </div>



    )
}

export default ProfilePopUp
