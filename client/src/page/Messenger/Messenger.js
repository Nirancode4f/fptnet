import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import Chatting from "./Chatting";
import "./Messenger.css";

export default function Messenger() {
  const [listFriends, setListFriends] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);
  const [listGroups, setListGroups] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);
  return <div className="Messenger"></div>;
}
