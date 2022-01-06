import React from 'react'

function CmtUser(props) {


    const { Content,likelist,createAt } = props

    return (

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
                {Content}
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

    )
}

export default CmtUser