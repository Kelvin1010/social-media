import React from 'react'
import PostSide from '../../components/postside/PostSide'
import ProfileCard from '../../components/profilecard/ProfileCard'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import RightSide from '../../components/rightside/RightSide'
import '../../styles/Profile.css';

function Profile() {
    return (
        <div className="profile">
            <ProfileLeft/>

            <div className="profile_center">
                <ProfileCard/>
                <PostSide/>
            </div>

            <RightSide/>
        </div>
    )
}

export default Profile