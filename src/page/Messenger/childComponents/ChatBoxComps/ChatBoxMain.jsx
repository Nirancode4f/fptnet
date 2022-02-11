import React from "react";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";
import { v4 } from "uuid";
import * as Scroll from "react-scroll";

export default function ChatBoxMain(props) {
  const { messages, userId, targetAvtSrc } = props;
  const scroll = Scroll.animateScroll;
  // const handleOnScroll = (e) => {
  //   console.log([e.target]);
  // };
  return (
    <div className="ChatBoxMain">
      {messages.length > 0 ? (
        messages
          .slice(0)
          .reverse()
          .map((message) =>
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
        <>{"Chưa có hội thoại nào"}</>
      )}
    </div>
  );
}
