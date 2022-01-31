import { Avatar, TextField } from "@mui/material";
import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import Post from "./Post";

export const PostBlock = (props) => {
    const { PostData } = props;

    

    return (
        <div className="Newfeed-body-post-container">
            {

                PostData.map((post) => 

                     <Post key={post._id} Post={post} />
                
                     )

            }
       

        </div>
    );
};
