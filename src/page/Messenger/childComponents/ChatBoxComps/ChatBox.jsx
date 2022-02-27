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
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import { styled } from "@mui/material/styles";
import AxiosMain from "../../../../API/AxiosMain";
import { orange } from "@mui/material/colors";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing

export default function ChatBox(props) {
  const { chatData, userId, onCurrentConvsIdChange, newMessage, Chatdata } =
    props;
  console.log(`chatData in chatbox = `, chatData);
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

  // const TextFieldStyled = styled(TextField) {

  // }

  // footer input
  const { onMessagePost, conversation, newMess } = props;
  const [text, setText] = React.useState("");
  const [isConvesation, setIsConversation] = React.useState(false);

  // get friend messages
  const getFriendMessages = async (userId, convsId, block) => {
    try {
      AxiosMain.post(`/api/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
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
      AxiosMain.post(`/api/group/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
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
    if (chatData.convsType) {
      // get block messages from conversation id
      getGroupMessages(userId, chatData.conversationId);
    } else {
      getFriendMessages(userId, chatData.conversationId);
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
    }
  };

  // const addNewMess = (message) => {
  //   setMessages([message,...messages])
  // }

  useEffect(() => {
    process();
    // if we have conversation among two user, it will render a chat box at footer

    setIsConversation(!!conversation);
  }, [chatData.conversationId]);
  console.log(messages);
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
        {messages ? <ChatBoxMain messages={messages} userId={userId} /> : <></>}
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
        <TextField
          className="InputChatBox"
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <ImageIcon />
                </IconButton>
                <IconButton>
                  <AttachmentIcon />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon />
                </IconButton>
                <IconButton>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%", height: 50, fontSize: 20, borderRadius: 10 }}
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
