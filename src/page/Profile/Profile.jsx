/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { Router, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { ButtonGroup, IconButton, Tab, TabsContext } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Avatar from "@mui/material/Avatar";
import boring from "./assets/img/boring.png";
import ProfilePopUp from "../../component/Profile/PostPopup/ProfilePopUp";
import MainLayout from "../../component/MainPage/MainLayout";
import "./assets/css/profile.css";
import PostComp from "../../component/Profile/PostPopup/PostComp";
import { CircularProgress, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AxiosMain from "../../API/AxiosMain";

export const Profile = () => {
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const navigate = useNavigate();
  const [valueChange, setvalueChange] = useState("1");
  const [ShowPopup, setShowPopup] = useState(null);
  const [PopUpdata, setPopUpdata] = useState({});
  const [Loading, setLoading] = useState(false);
  const [isMouted, setisMoute] = useState(true);
  const error =
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";
  const block = 1;

  const [userPost, setuserPost] = useState([]);

  useEffect(() => {
    if (!LoginData) {
      navigate("/login");
    }
  }, []);

  // run this shit first
  useEffect(() => {
    const handleLoadingData = async () => {
      try {
        AxiosMain.post("/api/post/getposts", {
          userId: `${LoginData.user._id}`,
          block: block,
        }).then((res) => {
          setLoading(false);
          // after unmount component but asynchronous task still run, drop it.
          if (isMouted) {
            setuserPost(res);
          }
        });
        setLoading(true);
      } catch (error) {
        // console log error
        console.log(error);
      }
    };

    handleLoadingData();

    return () => {
      setisMoute(false);
    };
  }, [LoginData, isMouted, navigate]);

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
      <div className="Content">
        <div className="Profile">
          <div className="Profile_header">Profile</div>

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
                    src={LoginData ? LoginData.user.picture : error}
                    alt="avatar"
                  />
                </div>
              </div>

              <div className="Profile_user_info">
                <div className="Profile_user_info_name_and_code">
                  <div className="Profile_user_info_name">
                    {LoginData
                      ? LoginData.user.username
                      : "cant take name !!! error !!!"}
                    <div className="Profile_user_info_student_number">
                      {LoginData ? LoginData.user.mssv : ""}
                    </div>{" "}
                  </div>
                </div>

                <div className="Profile_user_info_description">
                  {LoginData ? LoginData.user.slogan : ""}
                </div>

                <div className="mui-add-btn">
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      width: 100,
                      backgroundColor: "#f36f21",
                    }}
                  >
                    {" "}
                    <b>Add </b>
                  </Button>
                </div>
              </div>
            </div>

            {/* new update here */}

            <TabContext value={valueChange}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  sx={{ p: -1 }}
                  variant="fullWidth"
                  onChange={handleChange}
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#f36f21" } }}
                  style={{ fill: "#f36f21", color: "#f36f21" }}
                  aria-label="active profile"
                >
                  <Tab
                    label={<span className="profile-tag-action">Post</span>}
                    value="1"
                  />
                  <Tab
                    label={
                      <span className="profile-tag-action">Achievement</span>
                    }
                    value="2"
                  />
                  <Tab
                    label={<span className="profile-tag-action">Friend</span>}
                    value="3"
                  />
                </TabList>
              </Box>
              <TabPanel value="1" style={{ padding: 1 }}>
                {/* profile props  */}

                <div className="Tag_action ">
                  <PostComp
                    userPosts={userPost.post}
                    onPostClick={handlePostClick}
                  />
                  {Loading && (
                    <LinearProgress
                      color="inherit"
                      style={{ color: "#f36f21" }}
                    />
                  )}

                  <div id="Post-information">
                    {ShowPopup ? (
                      <ProfilePopUp
                        data={PopUpdata}
                        OnClickout={handleClickOut}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">Achievement</TabPanel>
              <TabPanel value="3">
                <div className="Tag_action">
                  <div className="Tag_action-friend">
                    <div className="Tag_action-friend-request-and-quanlity">
                      <div className="Tag_action-friend-request">
                        <div className="Friend-request-header">Request</div>
                        <div className="Friend-request-container">
                          {/* mỗi request chứa trong 1 request section */}

                          <div className="request-section">
                            <div className="requester-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="requester-info-name-and-btn">
                                <div className="requester-info-name">
                                  Tên Requester
                                </div>
                                <div className="requester-info-btn">
                                  <Button
                                    size="small"
                                    color="warning"
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Accept</b>{" "}
                                  </Button>
                                  <Button
                                    size="small"
                                    color="error"
                                    style={{ marginLeft: 10 }}
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Remove</b>{" "}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* mỗi request chứa trong 1 request section */}

                          <div className="request-section">
                            <div className="requester-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="requester-info-name-and-btn">
                                <div className="requester-info-name">
                                  Tên Requester
                                </div>
                                <div className="requester-info-btn">
                                  <Button
                                    size="small"
                                    color="warning"
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Accept</b>{" "}
                                  </Button>
                                  <Button
                                    size="small"
                                    color="error"
                                    style={{ marginLeft: 10 }}
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Remove</b>{" "}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* mỗi request chứa trong 1 request section */}

                          <div className="request-section">
                            <div className="requester-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="requester-info-name-and-btn">
                                <div className="requester-info-name">
                                  Tên Requester
                                </div>
                                <div className="requester-info-btn">
                                  <Button
                                    size="small"
                                    color="warning"
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Accept</b>{" "}
                                  </Button>
                                  <Button
                                    size="small"
                                    color="error"
                                    style={{ marginLeft: 10 }}
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Remove</b>{" "}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* mỗi request chứa trong 1 request section */}
                          <div className="request-section">
                            <div className="requester-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="requester-info-name-and-btn">
                                <div className="requester-info-name">
                                  Tên Requester
                                </div>
                                <div className="requester-info-btn">
                                  <Button
                                    size="small"
                                    color="warning"
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Accept</b>{" "}
                                  </Button>
                                  <Button
                                    size="small"
                                    color="error"
                                    style={{ marginLeft: 10 }}
                                    variant="contained"
                                  >
                                    {" "}
                                    <b>Remove</b>{" "}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="Tag_action-friend-list">
                        <div className="Tag_action-friend-list-header">
                          Friends <span>23 Friends</span>
                        </div>
                        <div className="Tag_action-friends">
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>{" "}
                          {/* mỗi friend 1 section */}
                          <div className="friend-section">
                            <div className="friend-info">
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                src="/static/images/avatar/1.jpg"
                              />
                              <div className="friend-info-name">
                                Friend name
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
