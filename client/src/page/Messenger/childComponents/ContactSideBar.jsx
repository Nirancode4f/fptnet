import React from "react";
import FriendHeader from "./FriendsContactComps/Friend/FriendHeader";
import FriendsContact from "../childComponents/FriendsContactComps/FriendsContact";


function ContactSideBar(props)
{

const {listFriends,listTeachers,groupsData} = props

  return (
    <div >
      <FriendHeader />
        < FriendsContact
          listFriends={listFriends}
          listTeachers={listTeachers}
          groupsData={groupsData} />
      
    </div>

  )
}

export default ContactSideBar
