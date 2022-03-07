import axios from "axios";
import React, { useState } from "react";

import ChatBox from "./ChatBox";


const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

export default function ChatBoxContainer(props) {
  const { currentItem, userId, conversationId, socket } = props;

  // post message to server
  console.log(`currrentItem`, currentItem);

  return (
    <>
      <ChatBox
        chatData={{
          conversationId: currentItem.conversationId,
          convsType: currentItem.convsType,
          targetAvt: currentItem.avatar,
          totalMessages: currentItem.totalMessages
        }}
        userId={userId}
        headerData={{ avatar: currentItem.avatar, username: currentItem.username }}
        socket={socket}
        conversationId={conversationId}
      />
    </>
  );
}
