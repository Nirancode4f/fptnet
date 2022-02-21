import React, { useEffect, useState } from "react";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";
import { v4 } from "uuid";
import * as Scroll from "react-scroll";
import isEqual from "lodash/isEqual";

export default function ChatBoxMain(props) {
  const { messages, userId, targetAvtSrc, newMess, Chatdata } = props;

  const [MainMess, setMainMess] = useState(messages);

  const [HistoryMes, setHistoryMes] = useState(Chatdata);

  console.log(`Chatbox main`, Chatdata);

  useEffect(() => {
    if (!isEqual(Chatdata, HistoryMes)) {
      const CloneMainMess = [...MainMess];
      CloneMainMess.push(Chatdata);
      setMainMess(CloneMainMess);
    }
  });

  // const handleOnScroll = (e) => {
  //   console.log([e.target]);
  // };
  const showAllMess = [];

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
    </div>
  );
}
