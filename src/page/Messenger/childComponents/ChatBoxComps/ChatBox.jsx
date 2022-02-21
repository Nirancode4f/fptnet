import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBoxMain from "./ChatBoxMain";
import isEqual from "lodash/isEqual";
import {
  Avatar,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import AxiosMain from "../../../../API/AxiosMain";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing

export default function ChatBox(props) {
  const { chatData, userId, onCurrentConvsIdChange, newMessage, Chatdata } =
    props;

  const [messages, setMessages] = useState([]);
  const [historychatData, setHistorychatData] = useState(chatData);

  // set style for header
  const { headerData } = props;
  const avatarStyles = {
    ml: 1,
    mr: 1,
    border: 2,
    borderColor: "#808080",
  };

  // footer input
  const { onMessagePost, conversation, onClickCheck } = props;
  const [text, setText] = React.useState("");
  const [isConvesation, setIsConversation] = React.useState(false);

  // get friend messages
  const getFriendMessages = async (userId, convsId) => {
    try {
      AxiosMain.post(`/api/message/get`, {
        userId: userId,
        conversationId: convsId,
      }).then((res) => {
        setMessages(res.messages);
        console.log(`chatbox gfm=`, res.messages);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get group messages
  const getGroupMessages = async (userId, convsId, block) => {
    let result;
    try {
      AxiosMain.post(`/api/group/message/get`, {
        userId: userId,
        conversationId: convsId,
      }).then((res) => {
        setMessages(res.messages);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const process = () => {
    // set messages default null value
    setMessages(null);
    // there are three type of conversation: friend, teacher, group
    if (chatData.convs_type === "group") {
      // Lift-state up
      onCurrentConvsIdChange(chatData.targetId);
      // get block messages from conversation id
      getGroupMessages(userId, chatData.targetId, block);
    } else {
      // error
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    // image (future)
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      onMessagePost({ content: text });
      e.target.value = "";
      if (handleOnKeyUp) {
        onClickCheck({ content: text });
      }
    }
  };

  useEffect(() => {
    process();
    // if we have conversation among two user, it will render a chat box at footer

    setIsConversation(!!conversation);
  }, []);
  return (
    <>
      <div className="ChatBoxHeader">
        <div className="Person">
          <Avatar
            src={headerData.avatar || defaultAvatar}
            sx={{ ...avatarStyles }}
          />
          <span className="FriendName">{headerData.name}</span>
        </div>
        <div className="ChatSearch">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="ChatSearchLabel"
            placeholder="Tìm kiếm tin nhắn"
          />
        </div>
      </div>
      <div className="ChatBox">
        {messages ? (
          <ChatBoxMain
            messages={messages}
            newMess={newMessage}
            userId={userId}
            Chatdata={Chatdata}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="BoxChatFooter">
        {/* <div className="WriteMessage">
          <input
            placeholder="Nhập Tin Nhắn"
            type="text"
            className="WriteLabel"
            onChange={handleOnChange}
            onKeyUp={handleOnKeyUp}
          />
          

        </div> */}
        <Input
          
          endAdornment={
            <InputAdornment sx={{ mr: 3 }}>
              <IconButton sx={{ m: 1 }}>
                <AttachFileIcon />
              </IconButton>
              <IconButton sx={{ m: 1 }}>
                <EmojiEmotionsIcon />
              </IconButton>
              <IconButton sx={{ m: 1 }}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          sx={{ width: "100%", height: 50, fontSize:20}}
          placeholder="Nhập tin nhắn..."
        />
        {/* <div className="Attachment">
          <i className="fas fa-paperclip"></i>
          <i className="far fa-images"></i>
          <i className="far fa-grin"></i>
        </div> */}
      </div>
    </>
  );
}
