import React from 'react'
import "./assets/Newfeed.css"
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Avatar } from '@mui/material'
import { TextField } from '@mui/material'
import { useState, useEffect } from "react";
import { height, padding, width } from '@mui/system'
import { IconButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { useInput } from '@mui/material'
import { InputUnstyled } from '@mui/material'
import { styled } from '@mui/system';
import { ButtonGroup } from '@mui/material'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PostBlock } from './PostBlock'
import { useNavigate } from 'react-router-dom'
// import CssTextField from "../../CssMUISettings/CssTextField"
const error =
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/No_Pic.jpg";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#f36f21',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#f36f21',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            
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
const navigate = useNavigate()
  // if not logindata changeroute to login page
  useEffect(() => {
    if ( !LoginData) {
      navigate("/login");
   }
  }, [LoginData,  navigate]);


    return (
        <>
            <div className='Newfeed-container'>
                <div className='Content'>
                    <div className='Newfeed'>
                        <Container maxWidth="sm">
                            <div className="Newfeed-header">
                                <div style={{ width: "500px" }} className="Newfeed-header-input">


                                    <Avatar
                                        sx={{
                                            width: 55,
                                            height: 55,
                                        }}
                                        style={{
                                            margin:"0 15px 0 0",


                                        }}
                                        src={ LoginData.user.picture ? LoginData.user.picture : error}
                                        alt="avatar"
                                    />
                                    <CssTextField
                                        size='small'
                                        
                                        fullWidth={true}
                                        label="Tell me what are you thinking about"
                                        id="custom-css-outlined-input"
                                        
                                        />



                                </div>
                                <div className="Newfeed-header-quick-add">
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <div className="Newfeed-header-add-img">
                                            <Button variant="text"
                                                style={{
                                                    color: "#f36f21",
                                                    width: "180px",
                                                }}>
                                                <span>  <i className="far fa-images"></i> Thêm ảnh</span>

                                            </Button>

                                        </div>

                                        <div className="Newfeed-header-add-emotion">
                                            <Button variant="text"
                                                style={{
                                                    color: "#f36f21",
                                                    width: "180px"
                                                }}>
                                                <span>   <i className="far fa-laugh"></i> Thêm trạng thái</span>

                                            </Button>

                                        </div>

                                    </ButtonGroup>




                                </div>
                            </div>
                            <PostBlock/>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}
