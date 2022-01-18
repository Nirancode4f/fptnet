import React from "react";

export default function ChatBoxFooter(props) {
  const { handleEvent } = props;
  const [text, setText] = React.useState("");
  const handleOnChange = (e, text) => {
    // setText(e.target.);
    console.log(e.target);
  };

  return (
    <>
      <div className="BoxChatFooter">
        <div className="WriteMessage">
          <input
            placeholder="Nhập Tin Nhắn"
            type="text"
            className="WriteLabel"
            onChange={handleOnChange}
          />
        </div>
        <div className="Attachment">
          <i className="fas fa-paperclip"></i>
          <i className="far fa-images"></i>
          <i className="far fa-grin"></i>
        </div>
      </div>
    </>
  );
}
