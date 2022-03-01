import { Avatar, TextField } from "@mui/material";
import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import Post from "./Post";

export const PostBlock = (props) => {
    const { PostData } = props;

    

    return (
      <>
            {

                PostData.map((post) => 
                     <div key={post._id} className="Newfeed-body-post-container">
                     <Post Post={post} />
                     </div>
                     )

            }
       

      </> 
    );
};
