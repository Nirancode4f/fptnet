import React from 'react'
import "./assets/Deadline.css"

import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function Newfeed() {
 
    return (
    
     <div className='Deadline-container'>
         {/* begin student info  */}
         <div className='Content-deadline'>
               <div className="Deadline">
                    <div className="deadline-status"> NEVER GIVE UP!</div>

                               <div className="student-info-number">
                                   MSSV: <p>Mã số sinh viên</p>
                                </div>
                     <div className="student">
                           <div className="student-info">
                               

                               <div className="student-info-quanlity-deadline"> 
                                   Unfinished: <p>20</p>
                               </div>
                            </div>    
                            <div className="student-quick-add-deadline"> 
                            <TextField id="standard-basic" label="Tên Deadline" variant="standard" color='warning'   
                            style={{
                                marginTop:"14px",
                                marginRight:"12px",
                                width:"100%",
                                bordercolor:"#f36f21"
                            }}
                            />
                            <TextField id="standard-basic" label="Mô tả" variant="standard"  color='warning'
                            style={{
                                marginRight:"12px",
                                marginTop:"14px",
                                width:"100%",
                                bordercolor:"#f36f21"
                            }}
                            />
                                <TextField
                                 id="date"
                                 label="Hạn nộp"
                                 type="date"
                                 defaultValue="2022-01-01"
                                 sx={{ width: "100%" }}
                                 InputLabelProps={{
                                   shrink: true,
                                 }}
                                 style={{
                                     marginTop:"12px",
                                 }}
                                />

                            </div>         
                            </div>
                        <div className="quick-add-deadline-btn">
                        <Button color='warning' variant="contained" style={{
                            
                        }}>Tạo Deadline</Button>

                        </div>
               </div>
         {/* end student info  */}
        
             

         </div>
         
     </div>
    
    )
}
