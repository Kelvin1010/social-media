import React from 'react'
import FollowersCard from '../followerscard/FollowersCard'
import InfoCard from '../infocard/InfoCard'
import LogoSearch from '../logosearch/LogoSearch';
import '../../styles/ProfileLeft.css';

function ProfileLeft() {
    return (
        <div className="profileleft">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileLeft