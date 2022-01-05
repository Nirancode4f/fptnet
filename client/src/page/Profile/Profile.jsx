/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/css/profile.css"
import PostComp from "../../component/Profile/PostComp";
import { useState, useEffect } from "react";
import axios from 'axios';
import { ReactDOM } from 'react-dom';
import boring from "./assets/img/boring.png"
const URL_MAIN = process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com"

export const Profile = (props) => {

    const user = JSON.parse(localStorage.getItem("loginData"));
    const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"
    const block = 1

    const [userPost, setuserPost] = useState([])

    function handleLoading(block){

        var userId = JSON.parse(localStorage.getItem("loginData")).user._id

        try {
            axios.post(`${URL_MAIN}/api/post/getposts`, {

                userId: userId ,
                block: block
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((res) => {

                setuserPost(res.data)
                console.log(res.data)
            })
        } catch (error) {
            // console log error
            console.log(error)
        }
    }

    useEffect(() => {
        
        // run first  
        handleLoading(block)
       
    }, [])




    return (
        <div>
            <MainLayout />
            <div className="Content">
                {/* profile demo  */}
                <div className="Profile">
                    <div className="Profile_header">

                        Trang cá nhân
                    </div>

                    <div className="Profile_container">

                        <div className="Profile_info_and_img">
                            <div className="Profile_user_img">
                                <img className="Profile_user_avatar" src={user.user.picture || error} alt="avatar" />
                            </div>


                            <div className="Profile_user_info">
                                <div className="Profile_user_info_name_and_code">

                                    <div className="Profile_user_info_name">{user.user.username || "cant take name !!! error !!!"}
                                        <div className="Profile_user_info_student_number">CE171197</div> </div>
                                </div>

                                <div className="Profile_user_info_description">"Future won't happen if you don't create it"</div>
                                <button className="Add_friend_btn">Add friend</button>

                            </div>
                        </div>
                        <div className="Profile_user_action">
                            <div className="Profile_user_action_write">
                                <Link className="Profile_user_action_write_tag Active_tag" to="/">Bài Viết</Link>
                            </div>
                            <div className="Profile_user_action_achievement">
                                <Link className="Profile_user_action_achievement_tag" to="/">Thành Tích</Link>
                            </div>

                            <Link to="/" href="#" className="Profile_account_friend">Bạn Bè</Link>

                        </div>

                        <div className="Tag_action ">
               
                               <PostComp userPost={userPost.post} />

                        </div>

                        <div className="modal-wiew-detail-post">
                            <div className="modal-wiew-detail-post-container">
                                <div className="modal-wiew-detail-post-img">
                                       
                                     <img src={user.user.picture || error} alt="" />

                                     <div className="display-like-and-comment-quanlity">
                                     <i class="fas fa-heart">   <span> 1.096</span></i>
                                     <i class="fas fa-comments">  <span>642</span></i>
                                     </div>
                                </div>

                                <div className="modal-wiew-detail-post-content"> 
                                        <div className="modal-wiew-detail-post-info-post">
                                                <div className="modal-wiew-detail-post-info-post-avt-user">
                                                    <img src={user.user.picture || error} alt="" />
                                                </div>
                                                <div className="name-and-time">

                                                <div className="modal-wiew-detail-post-info-post-name-user">
                                                {user.user.username || "cant take name !!! error !!!"}
                                                </div>
                                                <div className="modal-wiew-detail-post-info-post-time">
                                                    14:20 - 6/1/2022
                                                </div>
                                                </div>

                                                <a className="more-info-btn" href="#"> ... </a>
                                        </div>
                                        <div className="modal-wiew-detail-post-content-text"> 
                                              Đây là nội dung bài post người dùng đăng kèm với ảnh. 
                                              Đây là nội dung bài post người dùng đăng kèm với ảnh. 
                                              Đây là nội dung bài post người dùng đăng kèm với ảnh. 
                                        </div>
                                        <div className="modal-wiew-detail-post-content-comment">
                                            <div className="modal-wiew-detail-post-content-action">
                                            <i class="far fa-heart like-post unlike"></i>
                                            {/* <i class="fas fa-heart like-post liked"></i> */}
                                            <div className="comment-post"> 
                                                <input type="text" placeholder="Viết bình luận của bạn" />
                                                <i class="fas fa-paper-plane add-cmt-btn"></i>
                                                </div>
                                                <div className="modal-wiew-detail-post-content-share-btn">
                                                <i class="fas fa-share-square share-post-btn"></i>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
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
                                                <a className="more-info-btn" href="#"> ... </a>

                                                        </div>
                                                    </div>
                                                    <div className="comment-box-content">
                                                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                                                            <div className="reaction-comment">
                                                                    <a href="">
                                                                        Thích
                                                                    </a>
                                                                    <a href="">
                                                                        Trả lời
                                                                    </a>
                                                            </div>
                                                    </div>
                                                  </div>
                                                
                                                
                                             
                                                

                                            </div>
                                        </div>

                                </div>

                            </div>

                        </div>

                        

                    </div>


                </div>
            </div></div>
    )
}
export default Profile
