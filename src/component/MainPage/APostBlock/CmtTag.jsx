import { Avatar, Button } from '@mui/material'
import React from 'react'

const CmtTag = (props) => {

    const {data , UserCmt} = props 
    console.log(`data `,data) 
    console.log(UserCmt)
  return (
    <>
    {/* <!-- mỗi cmt trong 1 cmt section--> */}
   { data && <div className="comment-section">
        <Avatar
          alt="Meow"
          src={`${ UserCmt ? UserCmt.picture : ""}`}
          sx={{ width: 38, height: 38 }}
        />

        <div className="comment-detail">
              <div className="name-time-post">
          <span className="commenter-name">{ UserCmt ? UserCmt.username : ""}</span>
          <span className="time-post-cmt">22/11/2021 04:22</span>
                </div>

          <p>
           {data.content}
          </p>
          <div className="comment-reaction">
            <Button
              variant="text"
              style={{
                padding:0,
                color: "#f36f21",
                display: "block",
              }}
            >
              <span>Thích</span>
            </Button>

            <Button
              variant="text"
              style={{
                padding:0,
                color: "#f36f21",
                display: "block",
              }}
            >
              <span>Trả lời</span>
            </Button>

      
          </div>
        </div>
      </div>
   }
    </>
  )
}

export default CmtTag