import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

const TEMP_URL = "http://localhost:3000";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export default function Messenger() {
  const [listFriends, setListFriends] = useState([]);
  const [listTeachers, setListTeachers] = useState([]);
  const [listGroups, setListGroups] = useState([]);
  const [groupsData, setGroupsData] = useState([]);
  const userId = JSON.parse(localStorage.getItem("loginData")).user._id;

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

  const getListTeachers = async (userId) => {
    let result;
    try {
      result = await axios.get(`${TEMP_URL}/api/user/teachers`);
    } catch (err) {
      console.log(err);
    }
    return result.data.teachers;
  };

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

  useEffect(() => {
    getListFriends(userId)
      .then((res) => {
        setListFriends(res.data.friends);
        console.log(
          "🚀 ~ file: Messenger.jsx ~ line 75 ~ .then ~ res.data.friends",
          res.data.friends
        );
      })
      .catch((err) => console.log(err));
    getListTeachers(userId)
      .then((res) => {
        setListTeachers(res);
      })
      .catch((err) => console.log(err));
    getListGroups(userId)
      .then((res) => {
        setListGroups(res.data.GroupConversations);
      })
      .catch((err) => console.log(err));
    let LGs = listGroups.map(async (groupId) => {
      let result;
      try {
        result = await axios.post(
          `${TEMP_URL}/api/group/conversation/get`,
          {
            conversationId: groupId,
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
      return result.data.conversation;
    });
    Promise.all(LGs).then((values) => {
      setGroupsData(values);
    });
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
            groupsData={groupsData}
          />

          {/* chatbox */}

          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}
