import React, { useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import { Button } from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import CreateGroup from "./CreateGroup";

export default function FriendHeader(props) {
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleOnClick = (e) => {
    setOpenPopUp(!openPopUp ? true : false);
  };

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
          <Button onClick={handleOnClick}>
            <GroupAddIcon color="warning" />
          </Button>
        </div>
      </div>
      {openPopUp ? <CreateGroup setOpenPopUp={setOpenPopUp}/> : <></>}
    </div>
  );
}
