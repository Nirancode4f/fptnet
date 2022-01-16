import axios from "axios";
import React from "react";
import { useState, useCallback } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

export default function Messenger() {
  const [currentItem, setCurrentItem] = useState({});

  const userId = JSON.parse(localStorage.getItem("loginData")).user._id;

  // get data from contact item (used useEffect to prevent friend list re-render)
  const handleGetItem = useCallback((e, data) => {
    setCurrentItem(data);
    console.log(currentItem);
  }, []);

  // // block messages calculator
  // const calBlocks = (totalMess) => {
  //   return (totalMess - (totalMess % 20)) / 20 + !!(totalMess % 20);
  // };

  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}

          <ContactSideBar userId={userId} handleGetItem={handleGetItem} />

          {/* chatbox */}

          <ChatBoxContainer currentItem={currentItem} userId={userId} />
        </div>
      </div>
    </>
  );
}
