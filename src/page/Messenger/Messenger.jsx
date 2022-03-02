import axios from "axios";
import React from "react";
import { useState, useCallback } from "react";
import { io } from "socket.io-client";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";


import "./Messenger.css";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export default function Messenger() {
  const [currentItem, setCurrentItem] = useState({});
  const [currentConvsId, setCurrentConvsId] = useState("");

  const [LoginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginData"))
  );
    const socket = io(`http://localhost:3001`)
  const userId = JSON.parse(localStorage.getItem("loginData")).user._id;

  // get data from contact item (used useEffect to prevent friend list re-render)
  const handleGetItem = (e, data) => {
    setCurrentItem(data);
    setCurrentConvsId(data.conversationId);
    console.log(`dataGetItem = `, data);
  };

  const OnFirstGetCurrentItem = (data) => {
    let cloneData = { ...data, avatar: data.picture };
    setCurrentItem(cloneData);
    setCurrentConvsId(data.conversationId);
    console.log(`firstGetItem = `, data);
  };



  // const handleConvsIdChange = (convsId) => {
  //   setCurrentConvsId(convsId);

  //   console.log(convsId);
  // };

  return (
    <>
      <div className="Messenger">
        <div className="MessengerContainer">
          <ContactSideBar
            userId={userId}
            handleGetItem={handleGetItem}
            OnFirstLoad={OnFirstGetCurrentItem}
          />

          <ChatBoxContainer
            currentItem={currentItem}
            userId={userId}
            conversationId={currentConvsId}
          />
        </div>
      </div>
    </>
  );
}
