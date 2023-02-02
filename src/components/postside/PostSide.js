import React from 'react'
import PostShare from '../postshare/PostShare';
import '../../styles/PostSide.css';
import Posts from '../posts/Posts';

function PostSide() {
    return (
        <div className='postside'>
            <div className="PostSide">
                <PostShare/>
                <Posts/>
            </div>
        </div>
    )
}

export default PostSide