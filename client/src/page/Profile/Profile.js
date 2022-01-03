import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../component/MainPage/MainLayout";
import Main from "../MainPage/Main";
import "./assets/css/profile.css"

export const Profile = (props) => {
    let pic = ["https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/p640x640/169558876_461608558624947_7989106910204828260_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7uJzDYxYx8wAX8Oai3i&_nc_ht=scontent-hkg4-1.xx&oh=00_AT8XiTzIxZ8CBdI5Dj0ZVG670Yyb8Tb3RbNC8e_43t1Vnw&oe=61F6E6A7",
"https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/123680529_366779948107809_3833788371458403915_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EAZXof-y-3sAX88pwKd&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT-7oEpZNIKX93y3MROmo_nqtXxNWzkQ_1-84lufC4YkVg&oe=61F6ABA7",
"https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/270276402_5377010122316114_3764649116780221119_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=AwTQBsaXfDgAX_QBTgj&tn=QIas7-8YdBzRgFKt&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-tFupX7nKlEZUQTww7V_gjyHeQfuSfnkgac3VmEmdj2g&oe=61D6A43F",
""]
   
    return (
        <div>
        <MainLayout/>
        <div className="Content">
            {/* profile demo  */}
            <div className="Profile">
                <div className="Profile_header">
                    <i className="fas fa-caret-left"></i>
                    Trang cá nhân
                </div>

                <div className="Profile_container">

                    <div className="Profile_info_and_img">
                        <div className="Profile_user_img">
                            <img className="Profile_user_avatar" src={pic[1]} alt="avatar" />
                        </div>


                        <div className="Profile_user_info">
                            <div className="Profile_user_info_name">Nguyễn Hoàng Khang</div>
                            <div className="Profile_user_info_student_number">CE171197</div>
                            <div className="Profile_user_info_description">"Future won't happen if you don't create it"</div>
                            <button className="Add_friend_btn">Add friend</button>
                            <div className="Profile_account">
                                <div className="Profile_account_friend">768 Bạn</div>
                                <div className="Profile_account_post">9 bài viết</div>
                            </div>
                        </div>
                    </div>
                    <div className="Profile_user_action">
                        <div className="Profile_user_action_write">
                            <Link className="Profile_user_action_write_tag Active_tag" to="/">Bài Viết</Link>
                        </div>
                        <div className="Profile_user_action_achievement">
                            <Link className="Profile_user_action_achievement_tag" to="/">Thành Tích</Link>
                        </div>
                    </div>

                    <div className="Tag_action">
                        <div className="Tag_action_write Row">
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[2]} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="#" />
                            </div>

                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="#" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="#" />
                            </div>

                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="" />
                            </div>
                            <div className="Col C-4">
                                <img className="Tag_action_post" src={pic[0]} alt="" />
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div></div>
    )
}
export default Profile
