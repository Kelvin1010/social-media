import React from 'react';
import '../../styles/Post.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Share } from '@mui/icons-material';
import { Button, Card } from '@mui/material';

function Post({data}) {
    return (
        <Card>
            <div className="post">
                <img src={data.img} alt="" />

                <div className="post_react">
                    <Card>
                        <Button>{data.liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}</Button>
                        <Button><CommentIcon /></Button>
                        <Button><Share /></Button>
                    </Card>
                </div>


                <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

                <div className="detail">
                    <span><b>{data.name}</b></span>
                    <span> {data.desc}</span>
                </div>
            </div>
        </Card>
    )
}

export default Post