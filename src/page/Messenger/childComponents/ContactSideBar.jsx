import React, { useEffect, useState } from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import AxiosMain from "../../../API/AxiosMain";
import axios from "axios";
import ContactList from "./FriendsContactComps/ContactList";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

function ContactSideBar(props) {
  const { userId, handleGetItem } = props;

  const [Items, setItems] = useState([]);

  const getAllConvsOfUser = (userId) => {
    try {
      AxiosMain.post("/api/conversation/getconvs", {
        userId,
      }).then((res) => {
        console.log("contactSideBar =", res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllConvsOfUser(userId);
  }, []);

  return (
    <div>
      <FriendHeader />

      <ContactList handleGetItem={handleGetItem} data={Items} />
    </div>
  );
}

export default ContactSideBar;
