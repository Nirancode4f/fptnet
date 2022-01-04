import axios from "axios";
import React, { useState, useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

export default function Messenger() {
  const [listFriends, setListFriends] = useState([]);
  const [listTeachers, setListTeachers] = useState([]);
  const [listGroups, setListGroups] = useState([]);

  useEffect(() => {
    console.log("ran");
    try {
      const userId = JSON.parse(localStorage.getItem("loginData")).user._id;
      console.log(userId);
      axios
        .post(
          `http://localhost:3000/api/friend/get`,
          {
            userId: userId,
          },
          {
            "Content-Type": {
              headers: "application/json",
            },
          }
        )
        .then(async (res) => {
          setListFriends(res.data.friends);
          console.log(res.data.friends);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}

          <ContactSideBar listFriends={listFriends} />

<<<<<<< HEAD
                         <i className="fab fa-battle-net"></i>
                         Friend
                         <input type="checkbox" hidden id="OpenFriendList" className="ShowFriendListBtn"/>
                         <label htmlFor="OpenFriendList"> 
                             <i className="ShowListIcon fas fa-angle-down"></i>
                          </label>

                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Dương Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Khang Nguyễn</div>
                         </li>
                         <li className="FriendListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Hoàng Phúc</div>
                         </li>
   
                     </ul>

                     <ul className="TeacherList"> 
                         <i className="fab fa-battle-net"></i>
                         Teacher
                         <input type="checkbox" hidden id="OpenTeacherList" className="ShowTeacherListBtn"/>
                         <label htmlFor="OpenTeacherList"> 
                             <i className="ShowListIcon fas fa-angle-down"></i>
                          </label>

                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>
                         <li className="TeacherListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">Thanh Nhân</div>
                         </li>


                     </ul>

                     <ul className="GroupList">
                         <i className="fab fa-battle-net"></i>
                         Group
                         <input type="checkbox" hidden id="OpenGroupList" className="ShowGroupListBtn"/>
                         <label htmlFor="OpenGroupList"> 
                             <i className="ShowListIcon fas fa-angle-down"></i>
                          </label>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>
                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>
                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>
                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>
                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>
                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                         <li className="GroupListItem">
                             <img className="UserListItemAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                             <div className="UserListItemName">PC17310</div>
                         </li>

                     </ul>
                  

                 
                 </div>
           {/* chatbox */}
             
           <div className="ChatBoxHeader">
                        <div className="Person">
                            <img className="FriendAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/>
                            <span className="FriendName">Thanh Nhân</span>
                        </div>
                        <div className="ChatSearch">
                            <i className="fas fa-search"></i>
                            <input type="text" className="ChatSearchLabel" placeholder="Tìm kiếm tin nhắn"/>
                        </div>
                    </div>

                    <div className="ChatBox">
                        <div className="ChatBoxMain">
                            
                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>

                            <div className="ChatBoxMessage">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="ChatBoxMessageOwnerUser">
                                <img className="ChatBoxMessageAvatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"/> 
                                <div className="ChatBoxMessageContent">
                                   <div className="ChatBoxMessageInfo">
                                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="ChatBoxMessageContentText">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            
                        </div>
                    </div>

                    <div class="BoxChatFooter">
                        <div class="WriteMessage">
                            <input placeholder="Nhập Tin Nhắn" type="text" class="WriteLabel"/> </div>
                            <div class="Attachment">
                                <i class="fas fa-paperclip"></i>
                                <i class="far fa-images"></i>
                                <i class="far fa-grin"></i>
                            </div>
                       
                    </div>

             </div>
         </div>
     
      </>

  )
=======
          {/* chatbox */}

          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
>>>>>>> c211efc1d210a42cbfec3d6c09e3100a88e6e394
}
