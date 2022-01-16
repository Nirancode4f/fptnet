import React from "react";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";
import { v4 } from "uuid";

export default function ChatBoxMain(props) {
  const { messages, userId, targetAvtSrc } = props;
  console.log(messages);
  return (
    <div className="ChatBoxMain">
      {messages.length > 0 ? (
        messages.map((message) =>
          message.userId._id === userId ? (
            <ChatBoxMessageOwnerUser
              key={v4()}
              message={message}
              avatarSrc={targetAvtSrc}
            />
          ) : (
            <ChatBoxMessage
              key={v4()}
              message={message}
              avatarSrc={targetAvtSrc}
            />
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
}
