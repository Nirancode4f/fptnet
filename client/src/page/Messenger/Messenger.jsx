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
  useEffect(() => {
    try {
      axios
        .post(
          `${TEMP_URL}/api/friend/get`,
          {
            userId: userId,
          },
          {
            header: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(async (res) => {
          if (!res.data.success) {
            console.log("Get list friends fail");
          } else {
            setListFriends(res.data.friends);
          }
          return axios.get(`${TEMP_URL}/api/user/teachers`);
        })
        .then(async (res) => {
          if (!res.data.success) {
            console.log("Get list teachers fail");
          } else {
            setListTeachers(res.data.teachers);
          }
          return axios.post(
            `${URL_MAIN}/api/group/conversation/getconvs`,
            {
              userId: userId,
            },
            {
              header: {
                "Content-Type": "application/json",
              },
            }
          );
        })
        .then(async (res) => {
          if (!res.data.success) {
            console.log("Get list groups fail");
          } else {
            // console.log(res.data.GroupConversations);
            setListGroups(res.data.GroupConversations);
          }
        })
        .catch((err) => console.log(err.message));
      listGroups.map((groupId) => {
        axios
          .post(
            `${TEMP_URL}/api/group/conversation/get`,
            {
              conversationId: groupId,
            },
            {
              header: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setGroupsData((prevData) => [...prevData, res.data.conversation]);
            console.log(groupsData);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } catch (err) {
      console.log(err.message);
    }
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
