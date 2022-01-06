import React, { Component } from 'react';



class PostContent extends React.Component{

    render(){
        return(
            <div className="modal-wiew-detail-post-content-text">
            {this.props.content}
        </div>
        )
    }

}
export default PostContent;