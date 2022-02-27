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
        
        conversationId={conversationId}
        currentItem={currentItem}
      />
    </>
  );
}
