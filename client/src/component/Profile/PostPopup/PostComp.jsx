/* eslint-disable no-unreachable */


import PropTypes from "prop-types"

import boring from "../../../page/Profile/assets/img/boring.png"


PostComp.prototype = {
    userPosts: PropTypes.array,
    onPostClick: PropTypes.func,
}

PostComp.defaultProps = {
    userPosts: [],
    onPostClick: null
}

function PostComp(props) {


    const { userPosts, onPostClick } = props
    
    const handleClick = (userPost) => {
        if (onPostClick) {

            onPostClick(userPost)
        }
    }


    return (
        <div className="Tag_action_write Row">
            {   userPosts.length > 0 ?
                userPosts.map(userPost => (
                    <div 
                    key={userPost._id}
                    onClick={()=> handleClick(userPost)}
                     className="Col C-4">
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
