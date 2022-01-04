import axios from "axios";
import React from "react";
import { useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

export default function Messenger() {
  useEffect(() => {}, []);
  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}

          <ContactSideBar />

          {/* chatbox */}

          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}
