import React, { useEffect, useState } from "react";

import ChatBox from "./ChatBox";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";

export default function ChatBoxContainer(props) {
  const { currentItem, userId } = props;

  const [message, setMessage] = useState({});
  const [currentConvsId, setCurrentConvsId] = useState("");

  const handlePostMessage = (e, data) => {
    if (e.key === "Enter") {
      // send data to server
    }
  };

  const handleConvsIdChange = (convsId) => {
    setCurrentConvsId(convsId);
    console.log(convsId);
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
        onCurrentConvsIdChange={handleConvsIdChange}
        userId={userId}
      />
      <ChatBoxFooter handleEvent={handlePostMessage} />
    </>
  );
}
