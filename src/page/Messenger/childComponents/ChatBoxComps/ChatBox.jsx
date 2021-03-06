import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { set } from "date-fns";
import ChatBoxFooter from "./ChatBoxFooter";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function ChatBox(props) {
  const { chatData, userId, headerData, socket } = props;

  const [messages, setMessages] = useState([]);

  const { conversationId } = props;
  // const [text, setText] = useState("");
  const text = useRef("");
  const [isLoading, setIsLoading] = useState(true);

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
          // addNewMess(messageData);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(messageData);
      try {
        AxiosMain.post(`${URL_MAIN}/api/message/create`, messageData).then(
          (res) => {
            // addNewMess(messageData);
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
      getGroupMessages(userId, chatData.conversationId, 1);
    } else {
      getFriendMessages(userId, chatData.conversationId, 1);
    }
  };

  const sendMessage = async () => {
    const textFieldNode = document.getElementById(`custom-css-outlined-input`);
    if (textFieldNode) {
      const messData = {
        room: conversationId,
        authorId: loginData.user._id,
        author: loginData.user.username,
        authorAvt: loginData.user.picture,
        message: textFieldNode.value,
        time: Date.now(),
      };
      await socket.emit("send_message", messData);
    }
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleGetMessDataInput({ content: e.target.value });
      sendMessage();
      e.target.value = "";
    }
  };

  const handleGetMessDataInput = (data) => {
    // setMessageData({ ...messageData, userId, conversationId, ...data });
    const messageData = { userId, conversationId, ...data };
    console.log(`messData = `, data);
    addNewMess(messageData);
    if (data.content) postMessageData(messageData);
  };

  const handleOnClickPostMessage = () => {
    // handleGetMessDataInput({ content: txt.current });
    const textFieldNode = document.getElementById(`custom-css-outlined-input`);
    console.log(textFieldNode.value);
    if (textFieldNode.value) {
      handleGetMessDataInput({ content: textFieldNode.value });
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

  const handleOnChange = (e) => {
    text.current = e.target.value;
  };

  useEffect(() => {
    process();
    // if we have conversation among two user, it will render a chat box at footer
  }, [conversationId]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log(data);
      setMessages((prevMess) => [data, ...prevMess]);

      console.log(`messages after receive = `, messages);
    });
  }, [socket]);

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
            placeholder="T??m ki???m tin nh???n"
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

      <ChatBoxFooter
        handleOnKeyUp={handleOnKeyUp}
        handleOnClick={handleOnClickPostMessage}
        messages={messages}
      />
    </>
  );
}
