import React from 'react';
import '../../styles/FollowersCard.css';
import { Followers } from '../../Data/FollowersData';
import { Avatar } from '@mui/material';

function FollowersCard() {
    return (
        <div className='followerscard'>
            <h3>Who is following you</h3>

            {Followers. map((follower, id)=>{
                return(
                    <div className="follower">
                        <div>
                            <Avatar alt={follower.name} src={follower.img} />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>
                            Follow
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard