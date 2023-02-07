import React from 'react'
import FriendCard from '../../components/friendcard/FriendCard'
import { Followers } from '../../Data/FollowersData';
import '../../styles/Friends.css';

function Friends() {
    return (
        <div className='friends'>
            <div className='friends_center'>
                {Followers.slice(0,10).map((item) => <FriendCard img={item.img} name={item.name}/>)}
            </div>
        </div>
    )
}

export default Friends