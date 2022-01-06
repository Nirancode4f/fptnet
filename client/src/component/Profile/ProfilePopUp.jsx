import React from 'react'
import { Link } from 'react-router-dom'
import PostContent from './PostContent'
import PosterTime from './PosterTime'
import Postimage from './Postimage'
import ShowLikeCmt from './ShowLikeCmt'




const ProfilePopUp = (props) => {

    const {data} = props

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.picture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

    function handleOnClickparent(event){
         
      
        var ele = document.getElementById("postpopup")
        ele.remove()

        console.log(event.currentTarget)
    }

    function handleOnClick(event){    
        
        
        console.log(event.currentTarget)
    }




    return (

        <div className="modal-wiew-detail-post" id='postpopup' onClick={handleOnClickparent}  >
            <div className="modal-wiew-detail-post-container" onClick={handleOnClick} >
                <div className="modal-wiew-detail-post-img">

                   <Postimage image={data.image}  errorPic={errorPic} />

                    <ShowLikeCmt like={data.like} />

                </div>

                <div className="modal-wiew-detail-post-content">


                    <PosterTime UserName={UserName} Postdate={data.createAt} Avatar={Avatar} errorPic={errorPic} />
                    
                   <PostContent content={data.content} />

                    <div className="modal-wiew-detail-post-content-comment">
                        <div className="modal-wiew-detail-post-content-action">
                            <i className="far fa-heart like-post unlike"></i>
                            {/* <i className="fas fa-heart like-post liked"></i> */}
                            <div className="comment-post">
                                <input type="text" placeholder="Viết bình luận của bạn" />
                                <i className="fas fa-paper-plane add-cmt-btn"></i>
                            </div>
                            <div className="modal-wiew-detail-post-content-share-btn">
                                <i className="fas fa-share-square share-post-btn"></i>
                            </div>
                        </div>
                        
                        <div className="modal-wiew-detail-post-content-comment-content">

                            <div className="comment-box">
                                <div className="comment-box-infor-commenter">
                                    <div className="comment-box-infor-commenter-avt">
                                        <img src="https://yt3.ggpht.com/ytc/AKedOLR1qNHkmPssXVH0Yr-FeFhNtcvxw9XNYxGOQgWp6g=s48-c-k-c0x00ffffff-no-rj" alt="" />
                                    </div>
                                    <div className="comment-box-infor-commenter-name">
                                        Tên commenter
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
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
                                        <div className="more-info-btn" > ... </div>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <div >
                                            Thích
                                        </div>
                                        <div >
                                            Trả lời
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default ProfilePopUp
