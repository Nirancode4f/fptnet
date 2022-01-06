import React from "react"

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

                        <div className="more-info-post-btn">...</div> 
                    </div>
        )
    }
}
export default PosterTime