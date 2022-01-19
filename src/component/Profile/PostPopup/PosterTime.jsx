import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import { render } from 'react-dom';
import { Paper } from '@mui/material';
import { MenuList } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

class PosterTime extends React.Component{

    

    render() {
        return (
            <div className="modal-wiew-detail-post-info-post">
                        <div className="modal-wiew-detail-post-info-post-avt-user">
                            <img src={this.props.Avatar || this.props.errorPic} alt="" />
                        </div>
                        <div className="name-and-time">

                            <div className="modal-wiew-detail-post-info-post-name-user">
                                {this.props.UserName}
                            </div>
                            <div className="modal-wiew-detail-post-info-post-time">
                                {this.props.Postdate}
                            </div>
                        </div>

                        <div /* onClick={handleCmtSettingClick}*/ className="more-info-post-btn" > ...  </div>
            {/* {showCmtSetting && <div>
              <div className="more-info-post-btn-option" >
                <Paper sx={{ width: 135, height: 75,padding:0, maxWidth: '100%' }}>
                 <MenuList>
                      <MenuItem>
                       <ListItemIcon>
                       <EditIcon fontSize="small" color=''/>
                      </ListItemIcon>
                      <ListItemText><span>Edit</span></ListItemText>
         
                       </MenuItem>
                       <MenuItem>
                       <ListItemIcon>
                       <DeleteIcon fontSize='small'/>
                       </ListItemIcon>
                       <ListItemText><span>Delete</span></ListItemText>
         
                     </MenuItem>
    
                </MenuList>
              </Paper>
            </div> 
              
              </div>} */}
                    </div>
        )
    }
}
export default PosterTime