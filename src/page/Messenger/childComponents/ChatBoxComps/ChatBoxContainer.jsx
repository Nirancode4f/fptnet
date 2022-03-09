import React from "react";

import ChatBox from "./ChatBox";

export default function ChatBoxContainer(props) {
  const { currentItem, userId, conversationId, socket } = props;
  
  return (
    <>
      <ChatBox
        chatData={{
          conversationId: currentItem.conversationId,
          convsType: currentItem.convsType,
          targetAvt: currentItem.avatar,
          totalMessages: currentItem.totalMessages,
        }}
        userId={userId}
        headerData={{
          avatar: currentItem.avatar,
          username: currentItem.username,
        }}
        socket={socket}
        conversationId={conversationId}
      />
    </>
  );
}
