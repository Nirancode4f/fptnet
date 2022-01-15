/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { Router, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { ButtonGroup, IconButton, Tab, TabsContext } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import boring from "./assets/img/boring.png";
import ProfilePopUp from "../../component/Profile/PostPopup/ProfilePopUp";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/css/profile.css";
import PostComp from "../../component/Profile/PostPopup/PostComp";
import { CircularProgress, LinearProgress } from '@mui/material';
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tabs } from '@mui/material';



const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export const Profile = (props) => {
  const [valueChange, setvalueChange] = useState("1")
  const [ShowPopup, setShowPopup] = useState(null);
  const [PopUpdata, setPopUpdata] = useState({});
  const [Loading, setLoading] = useState(false)
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
          setLoading(false)
          // after unmount component but asynchronous task still run, drop it.
          if (isMouted) {
            setuserPost(res.data);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      setLoading(true)
    } catch (error) {
      // console log error
      console.log(error);
    }
    return () => {
      isMouted = false;
    };
  }, []);

  const handleChange = (event, newValue) => {
    setvalueChange(newValue);
  };

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
                  <Button variant="contained"
                    style={{
                      color: "white",
                      width: 100,
                      backgroundColor: "#f36f21"
                    }} > <b>Add </b>
                  </Button>
                </div>
              </div>
            </div>

            {/* new update here */}

            
            
            
            
            
          <TabContext 
                value={valueChange}
                >
          <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
            <TabList 
            sx={{p : 0}}
            variant="fullWidth"  
            onChange={handleChange} 
            textColor="inherit"
            TabIndicatorProps={{style: {background:'#f36f21'}}}
            
            aria-label="active profile"
            
            >
               
              <Tab 
                
                label="Post" value="1" />
              <Tab label="Achievement" value="2" />
              <Tab label="Friend" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{padding: 1}} >

         
          <div className="Tag_action ">
          {Loading && <LinearProgress color='inherit' style={{ color: "#f36f21" }} />}

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

          </TabPanel>
          <TabPanel value="2">Achievement</TabPanel>
          <TabPanel value="3">Friend</TabPanel>
              </TabContext>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <div className="Profile_user_action">

              <ButtonGroup
                style={{ fill: "#f36f21", color: "red" }}
                color='inherit'
                fullWidth={true}
                variant="text"
                aria-label="text button group"

              >
                <Button style={{ color: "#f36f21" }} ><p style={{ color: "black", fontWeight: "700", fontFamily: "Segoe UI" }}>Post</p></Button>
                <Button style={{ color: "#f36f21" }} ><p style={{ color: "black", fontWeight: "700", fontFamily: "Segoe UI" }}>Achievement</p></Button>
                <Button style={{ color: "#f36f21" }} ><p style={{ color: "black", fontWeight: "700", fontFamily: "Segoe UI" }}>Friend</p></Button>
              </ButtonGroup>

            </div> */}

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
