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
import { Icon } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from "prop-types"

const URL_MAIN =
  process.env.REACT_APP_URL_MAIN || "https://fanserverapi.herokuapp.com";

const error = "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";


CmtUser.prototype = {
  CmtInfor: PropTypes.object,
  onDELETE: PropTypes.func
}

CmtUser.defaultProps = {
  CmtInfor: {},
  onDELETE:null
}


function CmtUser(props) {
  
  const [showCmtSetting, setshowCmtSetting] = useState(false)
  const [SaveCmt, setSaveCmt] = useState({})
  const { CmtInfor , onDELETE } = props
  const picture = CmtInfor.userId.picture
  const username = CmtInfor.userId.username

  const ref = useRef()

  const {timeString, CmtDate} = FomatData(new Date(CmtInfor.createAt))

  const handleCmtSettingClick = ()=>{
    if (!showCmtSetting){
      setshowCmtSetting(true)
    }
}

const handleDelete = () =>{
  onDELETE(CmtInfor)
}

let SettingRef = useRef()

useEffect(()=>{
 if(showCmtSetting)
  { document.addEventListener("mousedown",(event)=>{
    if( SettingRef.current && !SettingRef.current.contains(event.target))
    {
        setshowCmtSetting(false)
    }

  })}
 
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
              
           <div className="like-cmt-btn"> <FavoriteBorderIcon color='error' fontSize='small'/> </div> 
           {/* <div className="liked-cmt-btn"> <FavoriteIcon color='error' fontSize='small'/> </div>  */}
             
            <div onClick={handleCmtSettingClick} className="more-info-cmt-btn" >{ !showCmtSetting && `...`  }</div>
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
                     <ListItemText onClick={handleDelete}><span>Delete</span></ListItemText>
       
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
          <b className='comment-time-post' >{CmtDate}</b>
            <span >
              Trả lời
            </span>
          </div>
        </div>


      </div>

    )
  
}

export default CmtUser