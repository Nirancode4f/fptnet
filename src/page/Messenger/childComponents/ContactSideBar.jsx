import React, { useEffect, useState } from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import FriendsContact from "../childComponents/FriendsContactComps/FriendsContact";
import axios from "axios";

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

function ContactSideBar(props) {
  const { userId, handleGetItem } = props;

  const [friendsData, setFriendsData] = useState([]);
  const [teachersData, setTeachersData] = useState([]);
  const [groupsData, setGroupsData] = useState([]);

  // get friends data here
  const getFriendsData = async (userId) => {
    let result;
    try {
      result = await axios.post(
        `${URL_MAIN}/api/friend/get`,
        {
          userId: userId,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  // get all teachers data here
  const getTeachersData = async () => {
    let result;
    try {
      result = await axios.get(
        `${URL_MAIN}/api/user/teachers`,
        {
          userId: userId,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  // get all groups of user
  const getGroupsData = async (userId) => {
    let result;
    try {
      result = await axios.post(
        `${URL_MAIN}/api/group/conversation/getconvs`,
        {
          userId: userId,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  useEffect(() => {
    // run first everytime props change
    Promise.all([
      getFriendsData(userId),
      getTeachersData(userId),
      getGroupsData(userId),
    ])
      .then((result) => {
        const [fData, tData, gData] = result;

        setFriendsData(fData.data.friends);

        setTeachersData(tData.data.teachers);

        setGroupsData(gData.data.conversations);
      })
      .catch((err) => console.log(err));
  }, [userId, handleGetItem]);

  return (
    <div>
      <FriendHeader />

      <FriendsContact
        friendsData={friendsData}
        teachersData={teachersData}
        groupsData={groupsData}
        handleGetItem={handleGetItem}
      />
    </div>
  );
}

export default ContactSideBar;