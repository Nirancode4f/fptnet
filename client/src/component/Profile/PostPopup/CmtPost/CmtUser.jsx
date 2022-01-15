import React, { useRef } from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from 'react-dom';
import { useLinkClickHandler } from 'react-router-dom';
import { Paper } from '@mui/material';
import { MenuList } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FomatData from '../../../../helpGUI/FomatData';

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";



function CmtUser(props) {
  
  const [showCmtSetting, setshowCmtSetting] = useState(false)
  const [SaveCmt, setSaveCmt] = useState({})
  const { CmtInfor } = props
  const picture = CmtInfor.userId.picture
  const username = CmtInfor.userId.username
  const ref = useRef()

  const {timeString, CmtDate} = FomatData(new Date(CmtInfor.createAt))
console.log(CmtInfor)

  const handleCmtSettingClick = ()=>{
    if (!showCmtSetting){
      setshowCmtSetting(true)
    }else{
      setshowCmtSetting(false)
    }
}


let SettingRef = useRef()

useEffect(()=>{
  document.addEventListener("mousedown",(event)=>{
    if(!SettingRef.current.contains(event.target))
    {
        setshowCmtSetting(false)
    }
  
  })
})

    return (

      <div className="comment-box">
        <div className="comment-box-infor-commenter">
          <div className="comment-box-infor-commenter-avt">
            <img src={
             picture !== "" ? picture : error

  
            } alt="" />
          </div>
          <div className="comment-box-infor-commenter-name"  >
           {username}
              <b className='comment-time-post' >{CmtDate}</b>
            <div onClick={handleCmtSettingClick} className="more-info-cmt-btn" > ...  </div>
            {showCmtSetting &&
            
            <div>
            <div ref={SettingRef} className="more-info-cmt-btn-option" id='setting-modal' >
              <Paper sx={{ width: 130, height: 75,padding:0, maxWidth: '100%' }}>
               <MenuList>
                    <MenuItem style={{ height:30 }}>
                     <ListItemIcon>
                     <EditIcon fontSize="small" color=''/>
                    </ListItemIcon>
                    <ListItemText><span>Edit</span></ListItemText>
       
                     </MenuItem>
                     <MenuItem style={{ height:30 }}>
                     <ListItemIcon>
                     <DeleteIcon fontSize='small'/>
                     </ListItemIcon>
                     <ListItemText><span>Delete</span></ListItemText>
       
                   </MenuItem>
  
              </MenuList>
            </Paper>
          </div> 
      </div>
            
            }
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