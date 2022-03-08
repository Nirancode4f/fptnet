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
            <p className="ChatBoxMessageInfoTime">{`${new Date(
              message.createAt
            ).toLocaleDateString("vi-VN")} - ${new Date(
              message.createAt
            ).getHours()}:${
              new Date(message.createAt).getMinutes() < 10
                ? "0" + String(new Date(message.createAt).getMinutes())
                : new Date(message.createAt).getMinutes()
            }`}</p>
          </div>
          <div className="ChatBoxMessageContentText">{message.content}</div>
        </div>
        <AvatarUser />
      </div>
    </>
  );
}
