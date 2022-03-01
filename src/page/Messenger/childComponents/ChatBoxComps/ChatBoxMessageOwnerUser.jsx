import React from "react";
import defaultAvatar from "../../../../component/Layout/assets/avatar-user.png";
import AvatarUser from "../../../../component/Layout/AvatarUser";
export default function ChatBoxMessageOwnerUser(props) {
  const { message } = props;

  return (
    <>
      <div className="ChatBoxMessageOwnerUser">
        <div className="ChatBoxMessageContent">
          <div className="ChatBoxMessageInfo">
            {/* <h4 className="ChatBoxMessageInfoName">Tôi</h4> */}
            {/* <h5 className="ChatBoxMessageInfoTime">{message.createAt}</h5> */}
          </div>
          <div className="ChatBoxMessageContentText">{message.content}</div>
        </div>
        <AvatarUser />
      </div>
    </>
  );
}
