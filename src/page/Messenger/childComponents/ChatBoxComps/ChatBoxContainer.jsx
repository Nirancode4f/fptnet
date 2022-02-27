import axios from "axios";
import React, { useState } from "react";

import ChatBox from "./ChatBox";


const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

export default function ChatBoxContainer(props) {
  const { currentItem, userId, conversationId } = props;

  const [newMess, setNewMess] = useState({});

  // post message to server
  console.log(`currrentItem`, currentItem);


  const postMessageData = async (messageData) => {
    let result;
    console.log(`mesDta in chatboxcontainer = `, messageData)
    if (currentItem.convsType) {
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
          conversationId: currentItem.conversationId,
          convsType: currentItem.convsType,
          targetAvt: currentItem.picture,
        }}
        userId={userId}
        headerData={{ avatar: currentItem.avatar, name: currentItem.name }}
        onMessagePost={handleGetMessDataInput}
        conversation={conversationId}
      />
    </>
  );
}
