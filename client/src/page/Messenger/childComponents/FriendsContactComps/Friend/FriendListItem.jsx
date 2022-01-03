import React from "react";

export default function FriendListItem() {
  return (
    <>
      <li className="FriendListItem">
        <img
          className="UserListItemAvatar"
          src="data:image/png;base64,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"
          alt="avatar user"
        />
        <div className="UserListItemName">Thanh Nhân</div>
      </li>
    </>
  );
}
