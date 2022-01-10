/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { Router, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { ButtonGroup, IconButton } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import boring from "./assets/img/boring.png";
import ProfilePopUp from "../../component/Profile/PostPopup/ProfilePopUp";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/css/profile.css";
import PostComp from "../../component/Profile/PostPopup/PostComp";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export const Profile = (props) => {
  const [ShowPopup, setShowPopup] = useState(null);
  const [PopUpdata, setPopUpdata] = useState({});

  const user = JSON.parse(localStorage.getItem("loginData"));
  const error =
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";
  const block = 1;

  const [userPost, setuserPost] = useState([]);



  // run this shit first
  useEffect(() => {
    // run first
    var localData = JSON.parse(localStorage.getItem("loginData"));

    const userId = localData.user._id
    // check if component is mounted
    let isMouted = true;
    try {
      axios
        .post(
          `${URL_MAIN}/api/post/getposts`,
          {
            userId: userId,
            block: block,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // after unmount component but asynchronous task still run, drop it.
          if (isMouted) {
            setuserPost(res.data);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      // console log error
      console.log(error);
    }
    return () => {
      isMouted = false;
    };
  }, []);

  function handlePostClick(data) {
    setShowPopup(true);
    setPopUpdata(data);
  }
  function handleClickOut(event) {
    setShowPopup(event);
  }

  return (
    <div>
      <MainLayout />
      <div className="Content">
        {/* profile demo  */}
        <div className="Profile">
          <div className="Profile_header">Trang cá nhân</div>

          <div className="Profile_container">
            <div className="Profile_info_and_img">
              <div className="Profile_user_img">

                <div className="test">
                  <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                  }}
                  style={{
                    margin: 15,
                   

                  }}
                  src={user.user.picture || error}
                    alt="avatar"
                  />
                </div>
                
               
              </div>

              <div className="Profile_user_info">
                <div className="Profile_user_info_name_and_code">
                  <div className="Profile_user_info_name">
                    {user.user.username || "cant take name !!! error !!!"}
                    <div className="Profile_user_info_student_number">
                      CE171197
                    </div>{" "}
                  </div>
                </div>

                <div className="Profile_user_info_description">
                 {user.user.slogan}
                </div>

                 <div className="mui-add-btn">
                <Button  variant="contained"  
                style={{
                  color : "white",
                  width: 100,
                  backgroundColor: "#f36f21"}} > <b>Add </b> 
                </Button>
                </div>
              </div>
            </div>
            <div className="Profile_user_action">
 
          <ButtonGroup 
           style={{fill: "#f36f21",color:"red" }}
           color='inherit' 
           fullWidth={true} 
           variant="text" 
           aria-label="text button group"
           
           >
            <Button  style={{color: "#f36f21" }} ><p style={{color: "black"}}>Post</p></Button>
            <Button style={{color: "#f36f21" }} ><p style={{color: "black"}}>Achievement</p></Button>
            <Button style={{color: "#f36f21" }} ><p style={{color: "black"}}>Friend</p></Button>
          </ButtonGroup>

            </div>

            <div className="Tag_action ">
              <PostComp
                userPosts={userPost.post}
                onPostClick={handlePostClick}
              />

              <div id="Post-information">
                {ShowPopup ? (
                  <ProfilePopUp data={PopUpdata} OnClickout={handleClickOut} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
