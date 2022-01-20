import React from "react"

class ShowLikeCmt extends React.Component{

    render() {
        return (
            <div className="display-like-and-comment-quanlity">
                        <i className="fas fa-heart">   <span>{this.props.like}</span></i>
                        <i className="fas fa-comments">  <span>{this.props.cmt}</span></i>
                    </div>
        )
    }
}
export default ShowLikeCmt