import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ChatBoxMain from "./ChatBoxMain";
import isEqual from "lodash/isEqual";
import {
  Avatar,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  OutlinedInput,
  TextField,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import { styled } from "@mui/material/styles";
import AxiosMain from "../../../../API/AxiosMain";
import LinearProgress from "@mui/material/LinearProgress";
import {socket} from "../../../../SocketClient/MainSocket"

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing
const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function ChatBox(props) {
  const { chatData, userId, onCurrentConvsIdChange, headerData } = props;


  const [messages, setMessages] = useState([]);
  const [historychatData, setHistorychatData] = useState(chatData);

  // footer input

  const { onMessagePost, conversationId, newMess } = props;
  const [text, setText] = useState("");
  const [isConvesation, setIsConversation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const textRef = useRef("");
  const txt = useRef("");

  // set style for header
  const avatarStyles = {
    ml: 1,
    mr: 1,
    border: 2,
    borderColor: "#808080",
  };

  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f36f21",
      },
      "&:hover fieldset": {
        borderColor: "#f36f21",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f36f21",
      },
    },
  });


  // get friend messages
  const getFriendMessages = async (userId, convsId, block) => {
    try {
      AxiosMain.post(`/api/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
      }).then((res) => {
        setMessages(res.messages);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get group messages
  const getGroupMessages = async (userId, convsId, block) => {
    try {
      AxiosMain.post(`/api/group/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
      }).then((res) => {
        setMessages(res.messages);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // post message to server
  const postMessageData = async (messageData) => {
    if (chatData.convsType) {
      try {
        AxiosMain.post(`/api/group/message/create`, messageData).then((res) => {
          addNewMess(messageData);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(messageData);
      try {
        AxiosMain.post(`${URL_MAIN}/api/message/create`, messageData).then(
          (res) => {
            addNewMess(messageData);
          }
        );
      } catch (error) {
        console.log(error);
      }
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

  // when text in footer box change reset value
  const handleOnChange = (e) => {
    // txt.current = e.target.value;
    setText(txt.current)
    console.log(`setText = `, text);
    
    // image (future)
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleGetMessDataInput({ content: e.target.value });

      e.target.value = "";
    }
  };

  const handleGetMessDataInput = (data) => {
    // setMessageData({ ...messageData, userId, conversationId, ...data });
    const messageData = { userId, conversationId, ...data };
    console.log(`messData = `, data);
    if (data.content) postMessageData(messageData);
  };

  const handleOnClickPostMessage = () => {
    // handleGetMessDataInput({ content: txt.current });
    const textFieldNode = document.getElementById(`custom-css-outlined-input`);
    console.log(textFieldNode.value);
    if (textFieldNode.value) {
      handleGetMessDataInput({content: textFieldNode.value});
      textFieldNode.value = "";
    }
  };

  // add new message to chat box main
  const addNewMess = (message) => {
    const time = new Date();
    let cloneMess = {
      ...message,
      userId: {
        _id: loginData.user._id,
        username: loginData.user.username,
        picture: loginData.user.picture,
      },
      unsend: false,
      createAt: time.getTime(),
    };
    setMessages([cloneMess, ...messages]);
  };



  useEffect(() => {
    process();
    // if we have conversation among two user, it will render a chat box at footer
  }, [conversationId]);

  // socket.io

  socket.on("connect", () => {
    socket.emit("addUser", (userId));
    if (conversationId) {
      socket.emit("sendMessage")
    }
  }, [])

  useEffect(() => {

  })

  return (
    <>
      <div className="ChatBoxHeader">
        <div className="Person">
          <Avatar
            src={headerData.avatar || defaultAvatar}
            sx={{ ...avatarStyles }}
          />
          <span className="FriendName">{headerData.username}</span>
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
            totalMessages={chatData.totalMessages}
            messages={messages}
            userId={userId}
            convsType={chatData.convsType}
            conversationId={conversationId}
          />
        ) : (
          <>
            <div className="ChatBoxMain">
              <LinearProgress
                color="inherit"
                style={{ color: "#f36f21", height: "2px" }}
              />
            </div>
          </>
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

        <CustomTextField
          color="warning"
          size="small"
          fullWidth={true}
          id="custom-css-outlined-input"
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton color="warning">
                  <ImageIcon />
                </IconButton>
                <IconButton color="warning">
                  <AttachmentIcon />
                </IconButton>
                <IconButton color="warning">
                  <EmojiEmotionsIcon />
                </IconButton>
                <IconButton color="warning" onClick={handleOnClickPostMessage}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
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
