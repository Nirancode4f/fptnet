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
import { Button, ButtonGroup } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
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
    const [ShowSendBox, setShowSendBox] = useState(false)
    const [date, setdate] = useState(Date())

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.picture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

    
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

                    <ShowLikeCmt like={data.like} cmt={data.totalcmt} />

                </div>

                <div className="modal-wiew-detail-post-content">

                    <div className="modal-wiew-detail-post-content-header">
                        <PosterTime UserName={UserName} Postdate={date} Avatar={Avatar} errorPic={errorPic} />

                        <PostContent content={data.content} />

                        

                        <ButtonGroup 
                        style={{fill: "#f36f21" }}
                        color='inherit' 
                        fullWidth={true} 
                        variant="text" 
                        aria-label="text button group"
                         >
                            <Button style={{color: "#f36f21" }} >
                            <FavoriteBorderIcon style={{ color: "inherit"}}  />
                                <p style={{color: "inherit"}} >Like</p>
                                </Button>
                            <Button style={{color: "#f36f21" }} >
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
                            <div className="modal-wiew-detail-post-content-comment-content">



                            <CmtBox postData={data}  />


                            </div>
                            <SendBox postId={data._id}  />
                        </div>
                    </div>


                </div>

            </div>

        </div>



    )
}

export default ProfilePopUp
