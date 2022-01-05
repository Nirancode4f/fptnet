import React from 'react'
import { Link } from 'react-router-dom'




const ProfilePopUp = (props) => {

    const Data = JSON.parse(localStorage.getItem("loginData"))
    const Avatar = Data.user.piture
    const UserName = Data.user.username
    const errorPic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"


    return (

        <div className="modal-wiew-detail-post">
            <div className="modal-wiew-detail-post-container">
                <div className="modal-wiew-detail-post-img">

                    <img src={Avatar || errorPic} alt="" />

                    <div className="display-like-and-comment-quanlity">
                        <i className="fas fa-heart">   <span> 1.096</span></i>
                        <i className="fas fa-comments">  <span>642</span></i>
                    </div>
                </div>

                <div className="modal-wiew-detail-post-content">
                    <div className="modal-wiew-detail-post-info-post">
                        <div className="modal-wiew-detail-post-info-post-avt-user">
                            <img src={Avatar || errorPic} alt="" />
                        </div>
                        <div className="name-and-time">

                            <div className="modal-wiew-detail-post-info-post-name-user">
                                {UserName}
                            </div>
                            <div className="modal-wiew-detail-post-info-post-time">
                                14:20 - 6/1/2022
                            </div>
                        </div>

                        <Link className="more-info-btn" to="#"/> 
                    </div>
                    <div className="modal-wiew-detail-post-content-text">
                        Đây là nội dung bài post người dùng đăng kèm với ảnh.
                        Đây là nội dung bài post người dùng đăng kèm với ảnh.
                        Đây là nội dung bài post người dùng đăng kèm với ảnh.
                    </div>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="" >
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
                                        <Link className="more-info-btn" to="#"> ... </Link>

                                    </div>
                                </div>
                                <div className="comment-box-content">
                                    nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                    <div className="reaction-comment">
                                        <Link to="">
                                            Thích
                                        </Link>
                                        <Link to="">
                                            Trả lời
                                        </Link>
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
