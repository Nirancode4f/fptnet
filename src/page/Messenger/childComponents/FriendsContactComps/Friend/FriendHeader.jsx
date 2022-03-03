import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import { Button } from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";

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
          {/* <i className="fas fa-cogs"></i> */}
          <SettingsIcon color="warning"></SettingsIcon>
        </button>
        <div className="Friend_Header_add-group">
          <Button>
            <GroupAddIcon color="warning" />
          </Button>
        </div>
      </div>
    </div>
  );
}
