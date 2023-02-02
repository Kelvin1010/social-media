import React from 'react'
import FollowersCard from '../followerscard/FollowersCard'
import LogoSearch from '../logosearch/LogoSearch'
import ProfileCard from '../profilecard/ProfileCard'
import '../../styles/ProfileSide.css';
function ProfileSide() {
    return (
        <div className="profileside">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileSide