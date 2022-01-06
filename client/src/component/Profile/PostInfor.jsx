import ProfilePopUp from "./ProfilePopUp";
import React, { Component } from 'react';



class PostInfor extends React.Component{

    render(){
        return(
            <ProfilePopUp props={this.props.data} />
        )
    }

}
export default PostInfor;