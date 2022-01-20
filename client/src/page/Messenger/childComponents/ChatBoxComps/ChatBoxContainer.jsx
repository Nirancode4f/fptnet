import axios from "axios";
import React, { useState } from "react";

import ChatBox from "./ChatBox";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

export default function ChatBoxContainer(props) {
  const { currentItem, userId, onConvsChange, conversationId } = props;

  const [messageData, setMessageData] = useState({
    userId: "",
    conversationId: "",
    content: "",
    image: "",
  });

  const postMessageData = async (messageData) => {
    let result;
    if (currentItem.contact_type === "group") {
      try {
        result = await axios.post(
          `${URL_MAIN}/api/group/message/create`,
          messageData
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(messageData);
      try {
        result = await axios.post(
          `${URL_MAIN}/api/message/create`,
          messageData
        );
      } catch (error) {
        console.log(error);
      }
    }
    return result;
  };

  const handleGetMessDataInput = (data) => {
    setMessageData({ ...messageData, userId, conversationId, ...data });
    postMessageData(messageData)
      .then((res) => {
        res.data.success
          ? console.log("Gửi tin nhắn thành công")
          : console.log("Gửi tin nhắn thất bại");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ChatBoxHeader
        headerData={{ avatar: currentItem.avatar, name: currentItem.name }}
      />
      <ChatBox
        chatData={{
          targetId: currentItem.id,
          convs_type: currentItem.contact_type,
          targetAvt: currentItem.avatar,
        }}
        onCurrentConvsIdChange={onConvsChange}
        userId={userId}
      />
      <ChatBoxFooter
        onMessagePost={handleGetMessDataInput}
        conversation={conversationId}
      />
    </>
  );
}
