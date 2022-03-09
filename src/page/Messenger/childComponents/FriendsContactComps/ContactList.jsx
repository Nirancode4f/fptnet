import ContactListItem from "./ContactListItem";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

  // useEffect(() => {
  //   if (Items[0].convsType) {
  //     handleGetItem({
  //       username: Items[0].username,
  //       convsType: Items[0].convsType,
  //       conversationId: Items[0].conversationId
  //     })
  //   } else {
  //     handleGetItem({
  //       username: Items[0].username,
  //       convsType: Items[0].convsType,
  //       conversationId: Items[0].conversationId,
  //       avatar: Items[0].picture
  //     })
  //   }
  // }, [])

  return (
    <>
      <div className="FriendsContact">
        <ul className="FriendList">
          {Items.map((item) => (
            <ContactListItem
              key={item.conversationId}
              data={{
                username: item.username,
                avatar: item.picture,
                conversationId: item.conversationId,
                convsType: item.convsType,
                totalMessages: item.totalMessages,
              }}
              OnClickGetItem={handleGetItem}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
