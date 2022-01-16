import React, { useEffect, useRef, useState } from "react";

import ChatBox from "./ChatBox";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";

export default function ChatBoxContainer(props) {
  const { currentItem, userId } = props;
  return (
    <>
      <ChatBoxHeader
        headerData={{ avatar: currentItem.avatar, name: currentItem.name }}
      />
      <ChatBox
        chatData={{
          targetId: currentItem.id,
          convs_type: currentItem.contact_type,
          targetAvt: currentItem.avatar,
        }}
        userId={userId}
      />
      <ChatBoxFooter />
    </>
  );
}
