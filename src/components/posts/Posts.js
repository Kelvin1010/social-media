import React from 'react'
import { PostsData } from '../../Data/PostsData';
import '../../styles/Posts.css';
import Post from '../post/Post';

function Posts() {
    return (
        <div className="posts">
            {PostsData.map((post, id)=>{
                return <Post data={post} id={id} key={id}/>
            })}
        </div>
    )
}

export default Posts