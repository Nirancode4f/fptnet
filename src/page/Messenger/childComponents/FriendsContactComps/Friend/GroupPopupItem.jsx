import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Checkbox } from "@mui/material";

export default function GroupPopupItem({
  data,
  handleAddMember,
  handleRevMember,
}) {
  const [checked, setChecked] = useState(false);

  const handleOnChecked = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      handleAddMember(data._id);
    } else {
      handleRevMember(data._id);
    }
  };
  return (
    <>
      <li className="FriendListItem">
        <Avatar src={data.picture} />
        <div className="UserListItemName">{data.username}</div>
        <Checkbox checked={checked} onChange={handleOnChecked} />
      </li>
    </>
  );
}
