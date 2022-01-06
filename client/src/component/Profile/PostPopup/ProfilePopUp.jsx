import React from 'react'
import { Link } from 'react-router-dom'
import PostContent from './PostContent'
import PosterTime from './PosterTime'
import Postimage from './Postimage'
import ShowLikeCmt from './ShowLikeCmt'

import PropTypes from "prop-types"



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

    
    const {data, OnClickout} = props

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.picture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

    function handleOnClickout(){
        
        OnClickout(null)

    }



    return (

       
    <div className="modal-wiew-detail-post"  onClick={handleOnClickout}  >
    <div className="modal-wiew-detail-post-container"  onClick={(event)=> event.stopPropagation()} >
    <div className="modal-wiew-detail-post-img">

    <Postimage image={data.image}  errorPic={errorPic} />

    <ShowLikeCmt like={data.like} />

    </div>

    <div className="modal-wiew-detail-post-content">

     <div className="modal-wiew-detail-post-content-header"> 
    <PosterTime UserName={UserName} Postdate={data.createAt} Avatar={Avatar} errorPic={errorPic} />

    <PostContent content={data.content} />

        <div className="modal-wiew-detail-post-content-action">
             <div>
            <i className="far fa-heart like-post unlike"> </i>
            <span>Thích</span>
            </div>
            {/* <i className="fas fa-heart like-post liked">Bở Thích</i> */}
             <div className='click-to-show-comment-content'>
            <i class="far fa-comment-alt to-comment"></i>
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

            <div className="comment-box">
                <div className="comment-box-infor-commenter">
                    <div className="comment-box-infor-commenter-avt">
                        <img src="https://yt3.ggpht.com/ytc/AKedOLR1qNHkmPssXVH0Yr-FeFhNtcvxw9XNYxGOQgWp6g=s48-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                    <div className="comment-box-infor-commenter-name">
                        Tên commenter
                        <span className="more-info-cmt-btn" > ... </span>

                    </div>
                </div>
                <div className="comment-box-content">
                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
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

            <div className="comment-box">
                <div className="comment-box-infor-commenter">
                    <div className="comment-box-infor-commenter-avt">
                        <img src="https://yt3.ggpht.com/ytc/AKedOLR1qNHkmPssXVH0Yr-FeFhNtcvxw9XNYxGOQgWp6g=s48-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                    <div className="comment-box-infor-commenter-name">
                        Tên commenter
                        <span className="more-info-cmt-btn" > ... </span>

                    </div>
                </div>
                <div className="comment-box-content">
                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
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

            



           
        </div>
        
            </div>
    </div>
    <div className="comment-post">
                <input type="text" placeholder="Viết bình luận của bạn" />
                <i className="fas fa-paper-plane add-cmt-btn"></i>
            </div>

    </div>

    </div>

    </div>
     


    )
}

export default ProfilePopUp
