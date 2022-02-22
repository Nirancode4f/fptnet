import { Button, TextField, IconButton } from "@mui/material";
import { Box } from "@mui/material/node_modules/@mui/system";
import MoodIcon from "@mui/icons-material/Mood";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import ContactListItem from "./ContactListItem";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const userId = JSON.parse(localStorage.loginData).user._id;

ContactList.prototype = {
  handleGetItem: PropTypes.func,
  itemsData: PropTypes.array,
};
ContactList.defaultProps = {
  handleGetItem: null,
  itemsData: [],
};
export default function ContactList(props) {
  const { handleGetItem, itemsData } = props;
  const [Items, setItems] = useState(itemsData);

  console.log(`contactList = `, itemsData);

  console.log(`2 234=`, itemsData.length);

useEffect(() => {
  
setItems(itemsData)
  
}, [itemsData])

 
  return (
    <>
      <div className="FriendsContact">
        <ul className="FriendList">{
                Items.map((item) => (
                  <ContactListItem
                    key={item.conversationId}
                    data={{
                      username: item.username,
                      avatar: item.picture,
                      id: item._id,
                      conversationId: item.conversationId,
                    }}
                    OnClickGetItem={handleGetItem}
                  />
                ))
        }</ul>
      </div>
    </>
  );
}
