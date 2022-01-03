import React from "react";

export default function ChatBoxFooter() {
  return (
    <>
      <div className="BoxChatFooter">
        <div className="WriteMessage">
          <input
            placeholder="Nhập Tin Nhắn"
            type="text"
            className="WriteLabel"
          />{" "}
        </div>
        <div className="Attachment">
          <i className="fas fa-paperclip"></i>
          <i className="far fa-images"></i>
          <i className="far fa-grin"></i>
        </div>
      </div>
    </>
  );
}
