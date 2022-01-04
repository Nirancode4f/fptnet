
import React from 'react'


const PostComp = (props) => {

    const {test , comp} = props

    return (

        <div className="Col C-4">
            <img className="Tag_action_post" src={comp} alt="#" />
        </div>

    )
}
export default PostComp
