import React from 'react'
import "./assets/Deadline.css"
import { useState, useEffect } from "react";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#f36f21',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#f36f21',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: '#f36f21',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#f36f21',
        },
    },
});



export default function Newfeed() {
    const [LoginData, setLoginData] = useState(
        localStorage.getItem("loginData")
          ? JSON.parse(localStorage.getItem("loginData"))
          : null
      );

    


    return (
    
     <div className='Deadline-container'>
         {/* begin student info  */}
         <div className='Content-deadline'>
               <div className="Deadline">
                    <div className="deadline-status"> NEVER GIVE UP!</div>

                               <div className="student-info-number">
                                   MSSV: <p>{LoginData.user.mssv ? LoginData.user.mssv : "" }</p>
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
                                <CssTextField
                                 id="date"
                                 label="Due"
                                 type="date"
                                 defaultValue="2022-01-01"
                                 sx={{ width: "100%" }}
                                 
                                 style={{
                                     marginTop:"12px",
                                 }}
                                />

                            </div>         
                            </div>
                        <div className="quick-add-deadline-btn">
                        <Button color='warning' variant="contained" style={{
                            
                        }}>Make Deadline</Button>

                        </div>
               </div>
         {/* end student info  */}
        
             

         </div>
         
     </div>
    
    )
}
