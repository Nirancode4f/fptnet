/* eslint-disable no-unreachable */

import React from 'react'
import PropTypes from "prop-types"

import boring from "../../page/Profile/assets/img/boring.png"


PostComp.prototype = {
    userPost: PropTypes.array,
    onPostClick: PropTypes.func,
}

PostComp.defaultProps = {
    userPost: [],
    onPostClick: null
}

function PostComp(props) {


    const { userPost, onPostClick } = props
    
    const handleClick = (userPost) => {
        if (onPostClick) {
            onPostClick(userPost)
        }
    }


    return (
        <div className="Tag_action_write Row">
            {   userPost.length > 0 ?
                userPost.map(userPost => (
                    <div key={userPost._id} onClick={handleClick} className="Col C-4">
                        <img className="Tag_action_post" src={userPost.image} alt="#" />
                    </div>
                )
                )
                : 
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={boring}/>
            }
        </div>


    )


}
export default PostComp
