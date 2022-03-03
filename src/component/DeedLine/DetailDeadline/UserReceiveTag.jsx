import { Avatar } from "@mui/material";
import { useState } from "react";

const UserReceiveTag = (props) => {
  const { data } = props;

  return (
    <>
      <div className="DetailDeadline-container-receiver-list-item">
        <Avatar alt="Remy Sharp" src={data.userId.picture} />
        <div className="DetailDeadline-container-receiver-list-item-Name">
          {data.userId.username}
        </div>
      </div>
    </>
  );
};
export default UserReceiveTag;
