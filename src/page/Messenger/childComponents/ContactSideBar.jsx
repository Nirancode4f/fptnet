/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import AxiosMain from "../../../API/AxiosMain";
import axios from "axios";
import ContactList from "./FriendsContactComps/ContactList";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";
ContactSideBar.prototype = {
  handleGetItem: PropTypes.func,
};
ContactSideBar.defaultProps = {
  handleGetItem: null,
};
function ContactSideBar(props) {
  const { handleGetItem } = props;

  // const [Data, setData] = useState([]);
  const [FriendsData, setFriendsData] = useState([]);
  const [userId, setUserId] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData")).user._id
      : null
  );

  const getFriendsData = (items, index, type) => {
    if (!type[index]) {
      for (const member of items.members) {
        if (member._id !== userId) {
          return {
            // _id: member._id,
            username: member.username,
            picture: member.picture,
            conversationId: items._id,
            convsType: 0
          };
        }
      }
    } else {
      return {
        username: items.name,
        conversationId: items._id,
        convsType: 1
      };
    }
    return {};
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getAllConvsOfUser(userId) {
    try {
      AxiosMain.post("/api/conversation/getconvs", {
        userId,
      }).then((res) => {
        // setData(res.conversations);
        const newClone = [];

        // let CLone = new Set();

        let postData = res.conversations;

        // newClone.forEach((data, index) => {
        //   CLone.add(data._id);
        // });

        // console.log(`CLOne`, CLone);

        postData.forEach((data, index) => {
          const firstValue = getFriendsData(data, index, res.type);

          if (firstValue) {
            if (firstValue._id !== data._id) {
              newClone.push(firstValue);
            }
          }
        });

        setFriendsData(newClone);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllConvsOfUser(userId);
  }, []);

  return (
    <div>
      <FriendHeader />

      <ContactList handleGetItem={handleGetItem} itemsData={FriendsData} />
    </div>
  );
}

export default ContactSideBar;
