import { styled } from "@mui/system";
import { Avatar, Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import FomatData from "../../../helpGUI/FomatData";
import Cmt from "./Cmt";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f36f21",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f36f21",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {},
    "&:hover fieldset": {
      borderColor: "#f36f21",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f36f21",
    },
  },
});
export const Post = (props) => {
  const { Post } = props;

  const { timeString } = FomatData(Post.createAt);

  const [ShowCmtBox, setShowCmtBox] = useState(false);

  const handleCmtClick = () => {
    if (!ShowCmtBox) {
      setShowCmtBox(true);
    } else {
      setShowCmtBox(false);
    }
  };


  return (
    <>
      <div className="newfeed-info-poster">
        <Avatar
          alt="Meow"
          src={Post.userId.picture}
          sx={{
            width: 42,
            height: 42,
            border: "2px solid #f36f21",
            margin: "0 10px",
          }}
        />

        <div className="newfeed-info-poster-name-and-time">
          <h3 className="newfeed-info-poster-name">{Post.userId.username}</h3>
          <span className="newfeed-info-poster-time">{timeString}</span>
        </div>
        <div className="more-info-post-button ">
          <Button
            variant="text"
            style={{
              color: "#f36f21",
              display: "block",
            }}
          >
            <span> ...</span>
          </Button>
        </div>
      </div>
      <div className="Newfeed-body-post-content-text">{Post.content}</div>
      {Post.image && (
        <div className="Newfeed-body-post-content-img">
          <img alt="" className="post-img" src={Post.image} />
        </div>
      )}
      <div className="Newfeed-body-post-content-reaction-quanlity">
        <div className="like-quanlity">
          <span>{Post.like} liked</span>
        </div>
        <div className="comment-and-share-quanlity">
          <div className="comment-quanlity">{Post.totalcmt} commented</div>
          <div className="share-quanlity">0 shared</div>
        </div>
      </div>
   
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          fullWidth={true}
          sx={{paddingTop : 1, paddingBottom : 1}}
          color="inherit"
        >
          <Button
            variant="text"
            style={{
              color: "#f36f21",
              display: "block",
            }}
          >
            {/* <!-- <i className="fas fa-heart"></i> --> */}
            <i className="far fa-heart like-icon"></i>
            <span>Th??ch</span>
          </Button>

          <Button
            onClick={handleCmtClick}
            style={{
              color: "#f36f21",
              display: "block",
            }}
          >
            <i className="far fa-comment-dots"></i>
            <span> B??nh lu???n</span>
          </Button>

          <Button
            style={{
              color: "#f36f21",
              display: "block",
            }}
          >
            <i className="far fa-share-square"></i>
            <span>Chia s???</span>
          </Button>
        </ButtonGroup>
      
      <div className="Newfeed-body-post-content-comment-area">
        <div className="Newfeed-body-post-content-comment-label">
          <TextField
            label="  Nh???p b??nh lu???n c???a b???n   "
            size="small"
            color="warning"
            focused
            style={{
              width: "100%",
              height: "40px",
              padding: "2px",
            }}
          />
        </div>

        {ShowCmtBox && <Cmt postData={Post} />}
      </div>
    </>
  );
};
export default Post;
