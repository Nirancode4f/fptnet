import React from "react";

export default function ChatBoxFooter(props) {
  const { onMessagePost, conversation } = props;
  const [text, setText] = React.useState("");
  const [isConvesation, setIsConversation] = React.useState(false);

  const handleOnChange = (e) => {
    setText(e.target.value);
    // image (future)
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      onMessagePost({ content: text });
      e.target.value = "";
    }
  };

  // everytime props change re-render all component
  React.useEffect(() => {
    // if we have conversation among two user, it will render a chat box at footer
    setIsConversation(!!conversation);
  }, [props]);

  return (
    <>
      {isConvesation ? (
        <div className="BoxChatFooter">
          <div className="WriteMessage">
            <input
              placeholder="Nhập Tin Nhắn"
              type="text"
              className="WriteLabel"
              onChange={handleOnChange}
              onKeyUp={handleOnKeyUp}
            />
          </div>
          <div className="Attachment">
            <i className="fas fa-paperclip"></i>
            <i className="far fa-images"></i>
            <i className="far fa-grin"></i>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
