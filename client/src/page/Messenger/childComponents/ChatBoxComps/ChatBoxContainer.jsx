import React from "react";
import ChatBox from "./ChatBox";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";

export default function ChatBoxContainer() {
  return (
    <>
      <ChatBoxHeader />
      <ChatBox />
      <ChatBoxFooter />
    </>
  );
}
