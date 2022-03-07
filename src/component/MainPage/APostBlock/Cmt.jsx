import { Avatar, Button, ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import AxiosMain from "../../../API/AxiosMain";
import CmtTag from "./CmtTag";

const Cmt = (props) => {
  const { postData } = props;
  console.log(postData)

  const [CmtList, setCmtList] = useState([]);
  const [Block, setBlock] = useState(1);

  const handleGetComment = () => {
    try {
      AxiosMain.post("/api/comment/get", {
        postId: `${postData._id}`,
        block: Block,
        sorttype: 1,
      }).then((res)=>{
        console.log(`comment `,res)
        setCmtList(res.comments)
      })
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
  handleGetComment()

 
}, [])


  return (
    <div className="Newfeed-body-post-content-comment-box">

      {CmtList && CmtList.map(e=><CmtTag key={e._id} data={e} UserCmt={e.userId}/>)}
     
    </div>
  );
};

export default Cmt;
