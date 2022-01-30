import { Avatar, Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Cmt = () => {
  return (

    <div className="Newfeed-body-post-content-comment-box">
          {/* <!-- mỗi cmt trong 1 cmt section--> */}
          <div className="comment-section">
            <Avatar
              alt="Meow"
              src="https://salenhanh.com/wp-content/uploads/2020/05/meo-Scotland-Fold.jpg"
              sx={{ width: 38, height: 38 }}
            />

            <div className="comment-detail">
              <span className="commenter-name">Tên Commenter</span>
              <p>
                I want you to know that it's our time You and me bleed the same
                light I want you to know that I'm all yours You and me run the
                same course
              </p>
              <div className="comment-reaction">
                <ButtonGroup size="small" aria-label="small button group">
                  <Button
                    variant="text"
                    style={{
                      color: "#f36f21",
                      display: "block",
                    }}
                  >
                    <span>Thích</span>
                  </Button>

                  <Button
                    variant="text"
                    style={{
                      color: "#f36f21",
                      display: "block",
                    }}
                  >
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
              sx={{ width: 38, height: 38 }}
            />

            <div className="comment-detail">
              <span className="commenter-name">Tên Commenter</span>
              <p>
                I want you to know that it's our time You and me bleed the same
                light I want you to know that I'm all yours You and me run the
                same course
              </p>
              <div className="comment-reaction">
                <Button
                  variant="text"
                  style={{
                    color: "#f36f21",
                    display: "block",
                  }}
                >
                  <span>Thích</span>
                </Button>

                <Button
                  variant="text"
                  style={{
                    color: "#f36f21",
                    display: "block",
                  }}
                >
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
              sx={{ width: 38, height: 38 }}
            />

            <div className="comment-detail">
              <span className="commenter-name">Tên Commenter</span>
              <p>
                I want you to know that it's our time You and me bleed the same
                light I want you to know that I'm all yours You and me run the
                same course
              </p>
              <div className="comment-reaction">
                <Button
                  variant="text"
                  style={{
                    color: "#f36f21",
                    display: "block",
                  }}
                >
                  <span>Thích</span>
                </Button>

                <Button
                  variant="text"
                  style={{
                    color: "#f36f21",
                    display: "block",
                  }}
                >
                  <span>Trả lời</span>
                </Button>
              </div>
            </div>
          </div>
          {/* end 1 comment*/}
          {/* <!-- mỗi cmt trong 1 cmt section--> */}

          {/* end 1 comment*/}
        </div>
  )
  
  ;
};

export default Cmt;
