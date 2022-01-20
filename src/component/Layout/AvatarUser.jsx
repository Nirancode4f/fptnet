import React from "react";
import { Avatar } from "@mui/material";

export default function AvatarUser(props) {
  const userAvtAddr = JSON.parse(localStorage.getItem("loginData")).user
    .picture;
  const username = JSON.parse(localStorage.getItem("loginData")).user.username;
  const avatarStyles = {
    m: 1,
    border: 2,
    borderColor: "#808080",
  };
  return (
    <>
      <Avatar src={userAvtAddr} alt={username} sx={{ ...avatarStyles }} />
    </>
  );
}
