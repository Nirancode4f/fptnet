import React from "react";

export default function FriendHeader() {
  return (
    <div>
      <div className="FriendHeader">
        <div className="FriendHeaderSearch">
          <input
            type="text"
            className="Friend_HearchLabel"
            placeholder="Tìm kiếm bạn bè"
          />
          <i className="fas fa-search"></i>
        </div>

        <button className="Friend_Header_Setting">
          <i className="fas fa-cogs"></i>
        </button>
      </div>
    </div>
  );
}
