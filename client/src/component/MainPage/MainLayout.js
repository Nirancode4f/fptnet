import React from 'react'
import Header from '../Layout/Header'
import NavBar from '../Layout/NavBar'
import "../Layout/assets/Layout.css"

const MainLayout = (props) => {
    return (
        <><Header userpic={props.userpic}/><NavBar /></>
    )
}

export default MainLayout
