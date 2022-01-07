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
    let isMounted = true;

    //run this to take the friend list
    getListFriends(userId)
      .then((res) => {
        // if component umount before we get api, drop it
        if (isMounted) setListFriends(res.data.friends);
      })
      .catch((err) => console.log(err));

    // run this to take teaccherlist
    getListTeachers(userId)
      .then((res) => {
        // if component umount before we get api, drop it
        if (isMounted) setListTeachers(res);
      })
      .catch((err) => console.log(err));

    // run this to take group list
    getListGroups(userId)
      .then((res) => {
        // if component umount before we get api, drop it
        if (isMounted) {
          var data = res.data.conversations;
          setListGroups(data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
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
