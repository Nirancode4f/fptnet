import React, { useEffect, useState, useRef } from "react";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";
import { v4 } from "uuid";
import * as Scroll from "react-scroll";
import isEqual from "lodash/isEqual";
import LinearProgress from '@mui/material/LinearProgress';


export default function ChatBoxMain(props) {
  const { messages, userId, targetAvtSrc, newMess, Chatdata } = props;

  const [MainMess, setMainMess] = useState(messages);
  const messagesEndRef = useRef(null);  

  const ScrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"})
  }
  useEffect(ScrollToBottom, [messages])
  // const handleOnScroll = (e) => {
  //   console.log([e.target]);
  // };
  

  return (
    <div className="ChatBoxMain">
      {MainMess.length > 0 ? (
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
      <div ref={messagesEndRef}/>
    </div>
  );
}
