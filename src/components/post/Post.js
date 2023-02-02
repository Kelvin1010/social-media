import React from 'react';
import '../../styles/Post.css';
import Comment from '../../image/comment.png';
import Share from '../../image/share.png';
import Heart from '../../image/like.png';
import NotLike from '../../image/notlike.png';

function Post({data}) {
    return (
        <div className="post">
            <img src={data.img} alt="" />

            <div className="post_react">
                <img src={data.liked?Heart: NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>


            <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post