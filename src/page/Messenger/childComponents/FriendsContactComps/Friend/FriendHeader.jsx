import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function FriendHeader(props) {
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
        <GroupAddIcon sx={{ m: 1 }} />
      </div>
    </div>
  );
}
