import axios from "axios";
import React, { useState } from "react";

import ChatBox from "./ChatBox";


const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

export default function ChatBoxContainer(props) {
  const { currentItem, userId, onConvsChange, conversationId } = props;

  const [newMess, setNewMess] = useState({});
  const [KhangMess, setKhangMess] = useState({});

  // post message to server
  console.log(`currrentItem`, currentItem);

  const handleTakeOut = (data) => {
    setKhangMess(data);
  };

  const postMessageData = async (messageData) => {
    let result;
    if (currentItem.contact_type === "group") {
      try {
        result = await axios
          .post(`${URL_MAIN}/api/group/message/create`, messageData)
          .then((res) => {
            console.log(`c1234`, res);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(messageData);
      try {
        result = await axios
          .post(`${URL_MAIN}/api/message/create`, messageData)
          .then((res) => {
            console.log(`c1234`, res.data.newMessage);
            setKhangMess(res.data.newMessage);
          });
      } catch (error) {
        console.log(error);
      }
    }
    return result;
  };

  const handleGetMessDataInput = (data) => {
    // setMessageData({ ...messageData, userId, conversationId, ...data });
    const messageData = { userId, conversationId, ...data };

    postMessageData(messageData)
      .then((res) => {
        if (res.data.success) {
          console.log("Gửi tin nhắn thành công");
        } else {
          console.log("Gửi tin nhắn thất bại");
        }
      })
      .catch((err) => console.log(err));
  };

  // add new message to chat box main
  const addNewMess = (message) => {
    setNewMess(message);
  };

  return (
    <>
      <ChatBox
        chatData={{
          targetId: currentItem.id,
          convs_type: currentItem.contact_type,
          targetAvt: currentItem.avatar,
        }}
        userId={userId}
        newMessage={newMess}
        Chatdata={KhangMess}
        headerData={{ avatar: currentItem.avatar, name: currentItem.name }}
        onMessagePost={handleGetMessDataInput}
        conversation={conversationId}
        onClickCheck={handleTakeOut}
      />
    </>
  );
}
