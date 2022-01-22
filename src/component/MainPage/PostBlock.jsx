import { Avatar, TextField } from '@mui/material'
import React from 'react'
import { Button, ButtonGroup } from '@mui/material'


export const PostBlock = () => {
    return (
        <div className="Newfeed-body-post-container">
        <div className="newfeed-info-poster">
            <Avatar
                alt="Meow"
                src="https://salenhanh.com/wp-content/uploads/2020/05/meo-Scotland-Fold.jpg"
                sx={{ width: 42, height: 42, border: "2px solid #f36f21", margin: "0 10px" }}
            />

            <div className="newfeed-info-poster-name-and-time">
                <h3 className="newfeed-info-poster-name">Tên poster</h3>
                <span className="newfeed-info-poster-time">06:06 06/06/2066</span>
            </div>
            <div className='more-info-post-button '>
                <Button variant="text"
                    style={{
                        color: "#f36f21",
                        display: "block",

                    }}>
                    <span> ...</span>

                </Button>
            </div>
        </div>

        <div className="Newfeed-body-post-content-text">
            Nơi hiển thị status, caption , nội dung bài đăng bla bla.
            Nơi hiển thị status, caption , nội dung bài đăng bla bla.
            Nơi hiển thị status, caption , nội dung bài đăng bla bla.
            Nơi hiển thị status, caption , nội dung bài đăng bla bla.
        </div>
        <div className="Newfeed-body-post-content-img">


            <img alt="" className="post-img" src="https://file.hstatic.net/200000108863/file/1_f9b88477e56c4439a081f213aec8997f_grande.png" />

        </div>
        <div className="Newfeed-body-post-content-reaction-quanlity">
            <div className="like-quanlity">
                <i className="fas fa-heart"></i>
                <span>400 lượt thích</span>
            </div>
            <div className="comment-and-share-quanlity">
                <div className="comment-quanlity">
                    340 bình luận
                </div>
                <div className="share-quanlity">
                    10 lượt chia sẻ
                </div>
            </div>
        </div>
        <div className="Newfeed-body-post-content-reaction-button">
            <ButtonGroup variant="text" aria-label="text button group" fullWidth={true} color='inherit' >
                <Button variant="text"
                    style={{
                        color: "#f36f21",
                        display: "block",

                    }}>
                    {/* <!-- <i className="fas fa-heart"></i> --> */}
                    <i className="far fa-heart like-icon"></i>
                    <span>Thích</span>
                </Button>

                <Button
                    style={{
                        color: "#f36f21",
                        display: "block",

                    }}>
                    <i className="far fa-comment-dots"></i>
                    <span> Bình luận</span>
                </Button>

                <Button
                    style={{
                        color: "#f36f21",
                        display: "block",

                    }}>
                    <i className="far fa-share-square"></i>
                    <span>Chia sẻ</span>
                </Button>


            </ButtonGroup>


        </div>
        <div className="Newfeed-body-post-content-comment-area">
            <div className="Newfeed-body-post-content-comment-label">

                <TextField label="  Nhập bình luận của bạn   " color="warning" focused
                    style={{
                        width: "100%",
                        height: "100%",
                    }} />


            </div>
            <div className="Newfeed-body-post-content-comment-box">
                {/* <!-- mỗi cmt trong 1 cmt section--> */}
                <div className="comment-section">
                    <Avatar
                        alt="Meow"
                        src="https://salenhanh.com/wp-content/uploads/2020/05/meo-Scotland-Fold.jpg"
                        sx={{ width: 38, height: 38, }}
                    />

                    <div className="comment-detail">
                        <span className="commenter-name">
                            Tên Commenter
                        </span>
                        <p>
                            I want you to know that it's our time
                            You and me bleed the same light
                            I want you to know that I'm all yours
                            You and me run the same course
                        </p>
                        <div className="comment-reaction">
                            <ButtonGroup size="small" aria-label="small button group">
                                <Button variant="text"
                                    style={{
                                        color: "#f36f21",
                                        display: "block",
                                    }}>

                                    <span>Thích</span>
                                </Button>

                                <Button variant="text"
                                    style={{
                                        color: "#f36f21",
                                        display: "block",
                                    }}>

                                    <span>Trả lời</span>
                                </Button>
                            </ButtonGroup>


                        </div>
                    </div>

                </div>
                {/* end 1 comment*/}
                {/* <!-- mỗi cmt trong 1 cmt section--> */}
                <div className="comment-section">
                    <Avatar
                        alt="Meow"
                        src="https://salenhanh.com/wp-content/uploads/2020/05/meo-Scotland-Fold.jpg"
                        sx={{ width: 38, height: 38, }}
                    />

                    <div className="comment-detail">
                        <span className="commenter-name">
                            Tên Commenter
                        </span>
                        <p>
                            I want you to know that it's our time
                            You and me bleed the same light
                            I want you to know that I'm all yours
                            You and me run the same course
                        </p>
                        <div className="comment-reaction">
                            <Button variant="text"
                                style={{
                                    color: "#f36f21",
                                    display: "block",
                                }}>

                                <span>Thích</span>
                            </Button>

                            <Button variant="text"
                                style={{
                                    color: "#f36f21",
                                    display: "block",
                                }}>

                                <span>Trả lời</span>
                            </Button>



                        </div>
                    </div>

                </div>
                {/* end 1 comment*/}
                {/* <!-- mỗi cmt trong 1 cmt section--> */}
                <div className="comment-section">
                    <Avatar
                        alt="Meow"
                        src="https://salenhanh.com/wp-content/uploads/2020/05/meo-Scotland-Fold.jpg"
                        sx={{ width: 38, height: 38, }}
                    />

                    <div className="comment-detail">
                        <span className="commenter-name">
                            Tên Commenter
                        </span>
                        <p>
                            I want you to know that it's our time
                            You and me bleed the same light
                            I want you to know that I'm all yours
                            You and me run the same course
                        </p>
                        <div className="comment-reaction">
                            <Button variant="text"
                                style={{
                                    color: "#f36f21",
                                    display: "block",
                                }}>

                                <span>Thích</span>
                            </Button>

                            <Button variant="text"
                                style={{
                                    color: "#f36f21",
                                    display: "block",
                                }}>

                                <span>Trả lời</span>
                            </Button>



                        </div>
                    </div>

                </div>
                {/* end 1 comment*/}
                {/* <!-- mỗi cmt trong 1 cmt section--> */}


                {/* end 1 comment*/}
            </div>
        </div>
    </div>
    )
}