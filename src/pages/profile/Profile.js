import React from 'react'
import PostSide from '../../components/postside/PostSide'
import ProfileCard from '../../components/profilecard/ProfileCard'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import RightSide from '../../components/rightside/RightSide'
import '../../styles/Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile_center">
                <ProfileCard/>
                <div 
                    style={{
                        width:'70vw !important'
                    }}
                >
                    <PostSide/>
                </div>
            </div>
        </div>
    )
}

export default Profile