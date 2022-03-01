import { Avatar, Button } from '@mui/material'
import React from 'react'

const CmtTag = (props) => {

    const {data} = props 
    console.log(data)
  return (
    <>
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
            light I want you to know that I'm all yours You and me run the same
            course
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
    </>
  )
}

export default CmtTag