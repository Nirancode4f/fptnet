import React, { useEffect, useState } from "react";
import { InputAdornment, IconButton, TextField, styled } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";

export default function ChatBoxFooter({
  handleOnKeyUp,
  handleOnClick,
  messages,
}) {
  const [text, setText] = useState("");

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

  useEffect(() => {
    const textFieldNode = document.getElementById(`custom-css-outlined-input`);
    textFieldNode.value = text;
  }, [messages]);

  return (
    <>
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
          onKeyUp={handleOnKeyUp}
          autoFocus={true}
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
                <IconButton color="warning" onClick={handleOnClick}>
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
