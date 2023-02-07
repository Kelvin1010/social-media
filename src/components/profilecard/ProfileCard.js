import React from 'react'
import Cover from "../../image/nen.jpg";
import Profile from "../../image/boycry.jpg";
import '../../styles/ProfileCard.css';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoCard from '../infocard/InfoCard';

function ProfileCard() {
    const ProfilePage = true;
    return (
        <div className="profilecard">
            <div className="profile_images">
                <img src={Cover} alt="" />
                <Link to={'/profile/:id'}>
                    <Avatar
                        alt=""
                        src={Profile}
                        sx={{ width: 86, height: 86 }}
                        style={{
                            bottom: "2.5rem"
                        }}
                    />
                </Link>
            </div>

            <div className="profile_name">
                <span>Kelvin Ward</span>
                <span>Developer</span>
            </div>
            <InfoCard />
            <div className="follow_status">
                <hr />
                <div>
                <div className="follow">
                    <span>9999</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>

                {ProfilePage && (
                    <>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
                </div>
                <hr />
            </div>
            {ProfilePage ? "" : <span>My Profile</span>}
        </div>
    )
}

export default ProfileCard