/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/css/profile.css"


export const Profile = (props) => {
    
    const pic = JSON.parse(localStorage.getItem("loginData"));
    const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg"

   
    return (
        <div>
        <MainLayout/>
        <div className="Content">
            {/* profile demo  */}
            <div className="Profile">
                <div className="Profile_header">
               
                    Trang cá nhân
                </div>

                <div className="Profile_container">

                    <div className="Profile_info_and_img">
                        <div className="Profile_user_img">
                            <img className="Profile_user_avatar" src={ pic.picture || error } alt="avatar" />
                        </div>


                        <div className="Profile_user_info">
                            <div className="Profile_user_info_name_and_code">

                            <div className="Profile_user_info_name">Nguyễn Hoàng Khang   
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
                        
                                <a href="#" className="Profile_account_friend">768 Bạn</a>
                            
                    </div>

                    <div className="Tag_action">
                        <div className="Tag_action_write Row">
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic.picture || error} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic.picture || error} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic.picture || error} alt="#" />
                            </div>

                            
                        </div>
                    </div>


                </div>


            </div>
        </div></div>
    )
}
export default Profile
