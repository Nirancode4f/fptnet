import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { socket } from "../../SocketClient/MainSocket";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";
import CreateGroup from "./CreateGroup";

import "./Messenger.css";

export default function Messenger() {
  const [currentItem, setCurrentItem] = useState({});
  const [currentConvsId, setCurrentConvsId] = useState("");

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

  socket.on("connect", () => {
    console.log("connected", socket.id);
  });

  useEffect(() => {
    socket.emit("join_room", currentConvsId);
  }, [currentConvsId]);


  return (
    <>
    <CreateGroup/>
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
            socket={socket}
          />
        </div>
      </div>
    </>
  );
}
