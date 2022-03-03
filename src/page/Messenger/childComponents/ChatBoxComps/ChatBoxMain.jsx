import React, { useEffect, useState, useRef } from "react";
import ChatBoxMessage from "./ChatBoxMessage";
import ChatBoxMessageOwnerUser from "./ChatBoxMessageOwnerUser";
import { v4 } from "uuid";
import * as Scroll from "react-scroll";
import isEqual from "lodash/isEqual";
import LinearProgress from "@mui/material/LinearProgress";
import AxiosMain from "../../../../API/AxiosMain";
import InfiniteScroll from "react-infinite-scroller";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ChatBoxMain(props) {
  const {
    messages,
    userId,
    targetAvtSrc,
    totalMessages,
    convsType,
    conversationId,
  } = props;

  const [MainMess, setMainMess] = useState(messages);
  const [IsLoadingMess, setIsLoadingMess] = useState(false);
  const [NewMess, setNewMess] = useState(null);

  const [MaxBlock, setMaxBlock] = useState(null);
  const [Block, setBlock] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const messagesEndRef = useRef(null);
  const isMessagesOnTop = useRef(null);
  const ScrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };

  // block messages calculator
  const calBlocks = (totalMess) => {
    return (totalMess - (totalMess % 20)) / 20 + !!(totalMess % 20);
  };

  // get friend messages
  const addNewFriendMessages = async (userId, convsId, block) => {
    try {
      AxiosMain.post(`/api/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
      }).then((res) => {
        setNewMess(res.messages);
        setIsLoadingMess(false);
        setBlock((prevBlock) => prevBlock + 1);
        console.log(`get new mess = `, res.messages);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get group messages
  const addNewGroupMessages = async (userId, convsId, block) => {
    try {
      AxiosMain.post(`/api/group/message/getblock`, {
        userId: userId,
        conversationId: convsId,
        block,
      }).then((res) => {
        setNewMess(res.messages);
        setIsLoadingMess(false);
        setBlock((prevBlock) => prevBlock + 1);
        console.log(`get new mess = `, res.messages);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    
    ScrollToBottom();
    setMaxBlock(calBlocks(totalMessages));
  
  }, [messages]);



  const handleOnScroll = () => {
    const ScrollTop = isMessagesOnTop.current.scrollTop;
    // console.log(`in chat box container = `, Block.current, MaxBlock, IsLoadingMess);
    if (Block <= MaxBlock + 1 && ScrollTop === 0) {
      if (convsType) {
        setIsLoadingMess(true);
        addNewGroupMessages(userId, conversationId, Block);
        if (NewMess) MainMess.push(NewMess);
        console.log("after push", MainMess);
      } else {
        setIsLoadingMess(true);

        addNewFriendMessages(userId, conversationId, Block);
        if (NewMess) MainMess.push(...NewMess);
        console.log("after push", MainMess);
      }
    }
    // console.log(ScrollTop);
    // console.log(`all mess = `, MainMess);
  };

  const fetchData = async () => {
    console.log(`run`);
  };

  return (
    <div
      className="ChatBoxMain"
      // onScroll={handleOnScroll}
      // ref={isMessagesOnTop}
    >
      {/* {IsLoadingMess && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CircularProgress style={{ color: "#f36f21" }} />
        </Box>
      )}

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
      )} */}
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
        isReverse={true}
      >
        {MainMess.slice(0).reverse().map((message, index) =>
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
        )}
      <div ref={messagesEndRef} />
      </InfiniteScroll>
    </div>
  );
}
