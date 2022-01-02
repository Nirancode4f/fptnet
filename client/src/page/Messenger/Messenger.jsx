import axios from "axios";
import React from "react";
import { useEffect } from "react";
import MainLayout from "../../component/MainPage/MainLayout";
import ChatBoxContainer from "./childComponents/ChatBoxComps/ChatBoxContainer";
import ContactSideBar from "./childComponents/ContactSideBar";

import "./Messenger.css";

export default function Messenger() {
  useEffect(() => {}, []);
  return (
    <>
      <MainLayout />
      <div className="Messenger">
        <div className="MessengerContainer">
          {/* friend list */}
          <ContactSideBar />
          {/* chatbox */}

          <ChatBoxContainer />
          <div className="ChatBox">
            <div className="ChatBoxMain">
              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>

              <div className="ChatBoxMessage">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Nhân</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
              <div className="ChatBoxMessageOwnerUser">
                <img
                  className="ChatBoxMessageAvatar"
                  src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
                  alt="avatar user"
                />
                <div className="ChatBoxMessageContent">
                  <div className="ChatBoxMessageInfo">
                    <h4 className="ChatBoxMessageInfoName">Tôi</h4>
                    <h5 className="ChatBoxMessageInfoTime">11:34 24/12/2021</h5>
                  </div>
                  <div className="ChatBoxMessageContentText">
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google
                    phát triển. Nó cung cấp giao diện trang web, ứng dụng trên
                    thiết bị di động cho hệ điều hành Android và iOS và giao
                    diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện
                    ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BoxChatFooter">
            <div className="WriteMessage">
              <input
                placeholder="Nhập Tin Nhắn"
                type="text"
                className="WriteLabel"
              />{" "}
            </div>
            <div className="Attachment">
              <i className="fas fa-paperclip"></i>
              <i className="far fa-images"></i>
              <i className="far fa-grin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
