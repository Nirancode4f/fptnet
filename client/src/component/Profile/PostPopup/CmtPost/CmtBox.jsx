import React from 'react';

function CmtBox(props) {


    const { postData } = props


    return (

        <div>

            {/* ẩn cmt thì class comment-main display:none */}
            <div className="comment-main">
                <div className="modal-wiew-detail-post-content-comment-content">

                    <div className="comment-box">
                        <div className="comment-box-infor-commenter">
                            <div className="comment-box-infor-commenter-avt">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLR1qNHkmPssXVH0Yr-FeFhNtcvxw9XNYxGOQgWp6g=s48-c-k-c0x00ffffff-no-rj" alt="" />
                            </div>
                            <div className="comment-box-infor-commenter-name">
                                Tên commenter
                                <span className="more-info-cmt-btn" > ... </span>

                            </div>
                        </div>
                        <div className="comment-box-content">
                            nơi hiển thị nội dung comment mỗi comment chứa trong 1 thẻ div có class là comment-box
                            <div className="reaction-comment">
                                <span >
                                    Thích
                                </span>
                                <span >
                                    Trả lời
                                </span>
                            </div>
                        </div>


                    </div>




                </div>

            </div>

        </div>
    );
}

export default CmtBox;