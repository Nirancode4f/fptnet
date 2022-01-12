import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from 'react-dom';
import { useLinkClickHandler } from 'react-router-dom';
import { Paper } from '@mui/material';
import { MenuList } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';



const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";



function CmtUser(props) {
  
  const [showCmtSetting, setshowCmtSetting] = useState(false)
  const [SaveCmt, setSaveCmt] = useState({})
  const { CmtInfor } = props
  const picture = CmtInfor.userId.picture
  const username = CmtInfor.userId.username



  const handleCmtSettingClick = ()=>{
    if (!showCmtSetting){
      setshowCmtSetting(true)
    }else{
      setshowCmtSetting(false)
    }
}


    return (

      <div className="comment-box">
        <div className="comment-box-infor-commenter">
          <div className="comment-box-infor-commenter-avt">
            <img src={
             picture !== "" ? picture : error

  
            } alt="" />
          </div>
          <div className="comment-box-infor-commenter-name">
           {username}
            <div onClick={handleCmtSettingClick} className="more-info-cmt-btn" > ... 
            {/* child of more info cmt btn */}
       
            </div>
            {showCmtSetting && <div>
              <div className="more-info-cmt-btn-option" >
                <Paper sx={{ width: 150, height: 75,padding:0, maxWidth: '100%' }}>
                 <MenuList>
                      <MenuItem>
                       <ListItemIcon>

                      </ListItemIcon>
                      <ListItemText><span>Edit</span></ListItemText>
         
                       </MenuItem>
                       <MenuItem>
                       <ListItemIcon>

                       </ListItemIcon>
                       <ListItemText><span>Delete</span></ListItemText>
         
                     </MenuItem>
    
                </MenuList>
              </Paper>
            </div> 
              
              </div>}
          </div>
        </div>
        <div className="comment-box-content">
          {CmtInfor.content}
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