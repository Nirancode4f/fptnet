import React, { Component } from 'react';



class Postimage extends React.Component{

    render(){
        return(
            <img src={this.props.image || this.props.errorPic} alt="" />
        )
    }

}
export default Postimage;