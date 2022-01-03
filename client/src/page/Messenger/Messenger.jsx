import axios from "axios";
import React, { useState, useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

export default function Messenger() {
  const [listFriends, setListFriends] = useState([]);
  const [listTeachers, setListTeachers] = useState([]);
  const [listGroups, setListGroups] = useState([]);

  useEffect(() => {
    console.log("ran");
    try {
      const userId = JSON.parse(localStorage.getItem("loginData")).user._id;
      console.log(userId);
      axios
        .post(
          `http://localhost:3000/api/friend/get`,
          {
            userId: userId,
          },
          {
            "Content-Type": {
              headers: "application/json",
            },
          }
        )
        .then(async (res) => {
          setListFriends(res.data.friends);
          console.log(res.data.friends);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}

          <ContactSideBar listFriends={listFriends} />

          {/* chatbox */}

          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}
