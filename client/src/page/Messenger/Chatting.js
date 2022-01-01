import React from "react";
import "./Chatting.css";

export default function Chatting() {
  return (
    <div className="Chatting">
      <div className="friend-header">
        <div className="friend-header-search">
          <input
            type="text"
            className="friend-search-label"
            placeholder="Tìm kiếm bạn bè"
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <button className="friend-header-setting">
        <i className="fas fa-cogs"></i>
      </button>
      <div className="friends">
        <ul className="friend-list">
          <i className="fab fa-battle-net"></i>
          Friend
          <input
            type="checkbox"
            hidden
            id="open-friend-list"
            className="show-friend-list-btn"
          />
          <label for="open-friend-list">
            <i className="show-list-icon fas fa-angle-down"></i>
          </label>
          <li className="friend-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Thanh Nhân</div>
          </li>
          <li className="friend-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Dương Nguyễn</div>
          </li>
          <li className="friend-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Khang Nguyễn</div>
          </li>
          <li className="friend-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Hoàng Phúc</div>
          </li>
        </ul>

        <ul className="teacher-list">
          <i className="fab fa-battle-net"></i>
          Teacher
          <input
            type="checkbox"
            hidden
            id="open-teacher-list"
            className="show-teacher-list-btn"
          />
          <label for="open-teacher-list">
            <i className="show-list-icon fas fa-angle-down"></i>
          </label>
          <li className="teacher-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Thanh Nhân</div>
          </li>
          <li className="teacher-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">Thanh Nhân</div>
          </li>
        </ul>

        <ul className="group-list">
          <i className="fab fa-battle-net"></i>
          Group
          <input
            type="checkbox"
            hidden
            id="open-group-list"
            className="show-group-list-btn"
          />
          <label for="open-group-list">
            <i className="show-list-icon fas fa-angle-down"></i>
          </label>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
          <li className="group-list-item">
            <img
              className="user-list-item__avatar"
              src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"
            ></img>
            <div className="user-list-item__name">PC17310</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
