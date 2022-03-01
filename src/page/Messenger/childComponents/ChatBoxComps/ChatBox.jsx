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
import { orange } from "@mui/material/colors";
import LinearProgress from '@mui/material/LinearProgress';

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || `https://fanserverapi.herokuapp.com`;

const block = 1; //testing
const loginData = JSON.parse(localStorage.getItem('loginData'))

export default function ChatBox(props) {
  const { chatData, userId, onCurrentConvsIdChange, currentItem, headerData } =
    props;

  console.log(`headerData = `, headerData)
  const [messages, setMessages] = useState([]);
  const [historychatData, setHistorychatData] = useState(chatData);
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
      borderColor: "#f36f21"},
      "&:hover fieldset": {
        borderColor: "#f36f21",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f36f21",
      },
    },
  });


  // footer input
  const { onMessagePost, conversationId, newMess } = props;
  const [text, setText] = React.useState("");
  const [isConvesation, setIsConversation] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

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
    let result;
    if (currentItem.convsType) {
      try {
        AxiosMain
          .post(`/api/group/message/create`, messageData)
          .then((res) => {
            addNewMess(
              messageData
            )
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(messageData);
      try {
        AxiosMain
          .post(`${URL_MAIN}/api/message/create`, messageData)
          .then((res) => {
            addNewMess(
              messageData
            )
          });
      } catch (error) {
        console.log(error);
      }
    }
    return result;
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
    setText(e.target.value);
    // image (future)
  };


  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleGetMessDataInput({ content: text });
      
      e.target.value = "";
    }
  };

  const handleGetMessDataInput = (data) => {
    // setMessageData({ ...messageData, userId, conversationId, ...data });
    const messageData = { userId, conversationId, ...data };
    
    postMessageData(messageData)
      .then((res) => {
        if (res.data.success) {
          
          console.log("Gửi tin nhắn thành công");
        } else {
          console.log("Gửi tin nhắn thất bại");
        }
      })
      .catch((err) => console.log(err));
  };

  // add new message to chat box main
  const addNewMess = (message) => {
    const time = new Date()
    let cloneMess = {...message, userId: {
      _id: loginData.user._id,
      username: loginData.user.username,
      picture: loginData.user.picture
    }, unsend: false, createAt: time.getTime()}
    setMessages([cloneMess,...messages])
  }

  useEffect(() => {
    process();
    // if we have conversation among two user, it will render a chat box at footer

    setIsConversation(!!conversationId);
  }, [chatData.conversationId]);
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
        <div  className="ChatSearch">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="ChatSearchLabel"
            placeholder="Tìm kiếm tin nhắn"
          />
        </div>
      </div>



      
      <div className="ChatBox">
        
        {messages ? <ChatBoxMain messages={messages} userId={userId} /> : <>
          <div className="ChatBoxMain">
            <LinearProgress
            
        color="inherit"
        style={{ color: "#f36f21", height: "2px" }}
            />
          </div>
        </>}
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
                          <IconButton color="warning">
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
