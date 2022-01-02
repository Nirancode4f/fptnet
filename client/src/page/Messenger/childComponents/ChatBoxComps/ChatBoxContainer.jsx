import React from "react";

export default function ChatBoxContainer() {
  return (
    <>
      <div className="ChatBoxHeader">
        <div className="Person">
          <img
            className="FriendAvatar"
            src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            alt="avatar user"
          />
          <span className="FriendName">Thanh Nhân</span>
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
    </>
  );
}
