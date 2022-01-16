import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBoxMain from "./ChatBoxMain";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing

export default function ChatBox(props) {
  const { chatData, userId } = props;
  const [convsId, setConvsId] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAPISucceed, setIsAPISucceed] = useState();

  const getFriendConvsId = async (userId, targetId) => {
    let result;
    try {
      result = await axios.post(`${URL_MAIN}/api/conversation/getfriendconv`, {
        userId: userId,
        friendId: targetId,
      });
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  const getFriendMessages = async (userId, convsId, block) => {
    let result;
    try {
      result = await axios.post(`${URL_MAIN}/api/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block: block,
      });
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  useEffect(() => {
    if (chatData.convs_type === "friend") {
      // get friend conversation here
      console.log(chatData.targetId);
      getFriendConvsId(userId, chatData.targetId)
        .then((res) => {
          // setIsAPISucceed(res.data.success);
          const convsId = res.data.conversation._id;
          console.log(
            "🚀 ~ file: ChatBox.jsx ~ line 50 ~ .then ~ convsId",
            res.data
          );

          // after that get messages
          if (res.data.success)
            return getFriendMessages(userId, convsId, block);
          else setMessages([]);
        })
        .then((res) => {
          if (res.data.success) {
            const result = res.data.messages;
            setMessages(result);
            console.log(result);
          } else {
            setMessages([]);
          }
        })
        .catch((err) => {
          setMessages([]);
          console.log(err.messages);
        });
    }
    console.log(messages);
  }, [props]);

  return (
    <>
      <div className="ChatBox">
        {messages ? <ChatBoxMain messages={messages} userId={userId} /> : <></>}
      </div>
    </>
  );
}
