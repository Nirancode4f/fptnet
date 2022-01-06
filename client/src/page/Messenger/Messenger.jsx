import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

const TEMP_URL =
  "https://fanserverapi.herokuapp.com" || "http://localhost:3000";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export default function Messenger() {
  const [listFriends, setListFriends] = useState([]);
  const [listTeachers, setListTeachers] = useState([]);
  const [listGroups, setListGroups] = useState([]);
  const [groupsData, setGroupsData] = useState([]);
  const userId = JSON.parse(localStorage.getItem("loginData")).user._id;

  // get friend list
  const getListFriends = async (userId) => {
    let result;
    try {
      result = await axios.post(
        `${TEMP_URL}/api/friend/get`,
        {
          userId: userId,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  // get list teacher
  const getListTeachers = async (userId) => {
    let result;
    try {
      result = await axios.get(`${TEMP_URL}/api/user/teachers`);
    } catch (err) {
      console.log(err);
    }
    return result.data.teachers;
  };

  //take list groups here
  const getListGroups = async (userId) => {
    let result;
    try {
      result = await axios.post(
        `${TEMP_URL}/api/group/conversation/getconvs`,
        {
          userId: userId,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  //take data for the first times

  useEffect(() => {
    //run this to take the friend list
    getListFriends(userId)
      .then((res) => {
        setListFriends(res.data.friends);
        console.log("🚀 this is the friendlist= ", res.data.friends);
      })
      .catch((err) => console.log(err));

    // run this to take teaccherlist
    getListTeachers(userId)
      .then((res) => {
        setListTeachers(res);
        console.log(`this is teacherlist= `, res);
      })
      .catch((err) => console.log(err));

    // run this to take group list
    getListGroups(userId)
      .then((res) => {
        var data = res.data.conversations;
        setListGroups(data);
        console.log(`here`, data);
      })
      .catch((err) => console.log(err));

    // take list group conversation
    //this line cant run if empty array setting
  }, []);

  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}

          <ContactSideBar
            listFriends={listFriends}
            listTeachers={listTeachers}
            listGroups={listGroups}
          />

          {/* chatbox */}

          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}
