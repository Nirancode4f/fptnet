import React from 'react';
import { useState, useEffect } from "react";
import CmtUser from './CmtUser';


function CmtBox(props) {


    const { postData } = props
    const comments = postData.comments
    console.log(`postData `, postData)


    return (

        <div>

            {/* ẩn cmt thì class comment-main display:none */}
            <div className="comment-main">
                <div className="modal-wiew-detail-post-content-comment-content">



                    {

                        comments.length > 0 ?

                        comments.map(comment => (


                            <CmtUser

                                key={comment._id}
                                Cmt={comment}
                               

                            />


                        )):<></>
                               

                   }



                </div>

            </div>

        </div>
    );
}

export default CmtBox;