import React from 'react';
import MainLayout from '../../component/MainPage/MainLayout';
import './Messenger.css'

export default function Messenger() {
  return (
    <div className='Messenger'>
      <MainLayout>
                <div className="chating-content">
                    <div className="friend-header">
                        <div className="friend-header-search">
                        <input type="text" className="friend-search-label" placeholder="Tìm kiếm bạn bè"/>
                        <i className="fas fa-search"></i>
                    </div>
                    
                   
                         <button className="friend-header-setting">
                            <i className="fas fa-cogs"></i>
                         </button>
                    </div>
                    <div className="friends">
                     
                        
                        <ul className="friend-list">

                            <i className="fab fa-battle-net"></i>
                            Friend
                            <input type="checkbox" hidden id="open-friend-list" className="show-friend-list-btn"/>
                            <label for="open-friend-list"> 
                                <i className="show-list-icon fas fa-angle-down"></i>
                             </label>
                            <li className="friend-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Thanh Nhân</div>
                            </li>
                            <li className="friend-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Dương Nguyễn</div>
                            </li>
                            <li className="friend-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Khang Nguyễn</div>
                            </li>
                            <li className="friend-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Hoàng Phúc</div>
                            </li>
      
                        </ul>

                        <ul className="teacher-list"> 
                            <i className="fab fa-battle-net"></i>
                            Teacher
                            <input type="checkbox" hidden id="open-teacher-list" className="show-teacher-list-btn"/>
                            <label for="open-teacher-list"> 
                                <i className="show-list-icon fas fa-angle-down"></i>
                             </label>
                            <li className="teacher-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Thanh Nhân</div>
                            </li>
                            <li className="teacher-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">Thanh Nhân</div>
                            </li>

                        </ul>

                        <ul className="group-list">
                            <i className="fab fa-battle-net"></i>
                            Group
                            <input type="checkbox" hidden id="open-group-list" className="show-group-list-btn"/>
                            <label for="open-group-list"> 
                                <i className="show-list-icon fas fa-angle-down"></i>
                             </label>
                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>

                            <li className="group-list-item">
                                <img className="user-list-item__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                                <div className="user-list-item__name">PC17310</div>
                            </li>
                        </ul>
                     

                    
                    </div>
                    <div className="chat-box-header">
                        <div className="person">
                            <img className="friend__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"></img>
                            <span className="friend__name">Thanh Nhân</span>
                        </div>
                        <div className="chat-search">
                            <i className="fas fa-search"></i>
                            <input type="text" className="chat-search-label" placeholder="Tìm kiếm tin nhắn"/>
                        </div>
                    </div>

                    <div className="chat-box">
                        <div className="chat-box-main">
                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm. Wikipedia</div>
                                </div>

                            </div>
                            <div className="chat-box-message--owner-user">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name--owner">Tôi</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa. See the trademark owner for rules about appropriate use of their trademarks.</div>
                                </div>

                            </div>
                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK Ready to pour… the Font Awesome 6 Beta!
                                    The next generation of the web's favorite icon library + toolkit is now available as a Beta release! Try out the Free version. Subscribe to Font Awesome Pro to get even more!</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>

                            <div className="chat-box-message">
                                <img className="chat-box-message__avatar" src="https://cdn3.vectorstock.com/i/1000x1000/64/42/passed-stamp-checkmark-sign-and-symbol-vector-14856442.jpg"> </img>
                                <div className="chat-box-message__content">
                                   <div className="chat-box-message__info">
                                    <h4 className="chat-box-message__info-name">Nhân</h4>
                                    <h5 className="chat-box-message__info-time">11:34 24/12/2021</h5>
                                   </div>
                                   <div className="chat-box-message__content-text">OK</div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
               
                    <div className="box-chat-footer">
                        <div className="write-message">
                            <input placeholder="Nhập Tin Nhắn" type="text" className="write-label"/> </div>
                            <div className="attachment">
                                <i className="fas fa-paperclip"></i>
                                <i className="far fa-images"></i>
                                <i className="far fa-grin"></i>
                            </div>
                       
                    </div>
                </div>

        </MainLayout> 
    </div>
  )
}
