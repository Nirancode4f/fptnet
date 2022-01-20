import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBoxMain from "./ChatBoxMain";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing

export default function ChatBox(props) {
  const { chatData, userId, onCurrentConvsIdChange } = props;

  const [convsId, setConvsId] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAPISucceed, setIsAPISucceed] = useState();

  // get friend conversation id
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

  // get friend messages
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

  // get group messages
  const getGroupMessages = async (userId, convsId, block) => {
    let result;
    try {
      result = await axios.post(`${URL_MAIN}/api/group/message/getblock`, {
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
    // set messages default null value
    setMessages(null);
    // there are three type of conversation: friend, teacher, group
    if (chatData.convs_type === "group") {
      // Lift-state up
      onCurrentConvsIdChange(chatData.targetId);
      // get block messages from conversation id
      getGroupMessages(userId, chatData.targetId, block)
        .then((res) => {
          const result = res.data.messages;
          setMessages(result);
        })
        .catch((err) => {
          setMessages([]);
          console.log(err.message);
        });
    } else {
      // get friend conversation here
      getFriendConvsId(userId, chatData.targetId)
        .then((res) => {
          const convsId = res.data.conversation._id;
          //Lift-state up
          onCurrentConvsIdChange(convsId);

          // after that get messages
          if (res.data.success)
            return getFriendMessages(userId, convsId, block);
          else {
            onCurrentConvsIdChange(null);
            setMessages([]);
          }
        })
        .then((res) => {
          if (res.data.success) {
            const result = res.data.messages;
            setMessages(result);
          } else {
            setMessages([]);
          }
        })
        .catch((err) => {
          // no data get from API
          setMessages([]);
          onCurrentConvsIdChange(null);

          console.log(err.messages);
        });
    }
  }, [props]);

  return (
    <>
      <div className="ChatBox">
        {messages ? <ChatBoxMain messages={messages} userId={userId} /> : <></>}
      </div>
    </>
  );
}
