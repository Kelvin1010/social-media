import React, { useRef, useState } from 'react';
import '../../styles/PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import ProfileImage from '../../image/boycry.jpg';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


function PostShare() {

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setImage({
            image: URL.createObjectURL(img),
        });
        }
    };

    return (
        <div className="postshare">
            <Link to={'/profile/:id'}>
                <Avatar
                    alt=""
                    src={ProfileImage}
                    className='img-postshare'
                />
            </Link>
            <div>
                <input type="text" placeholder="What's happening" />
                {image && (
                    <div className="preview_image">
                    <UilTimes onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                    </div>
                )}
                <div className="post_options">
                <div className="option" style={{ color: "var(--photo)" }}
                onClick={()=>imageRef.current.click()}
                >
                    <UilScenery />
                    Photo
                </div>
                <div className="option" style={{ color: "var(--video)" }}>
                    <UilPlayCircle />
                    Video
                </div>{" "}
                <div className="option" style={{ color: "var(--location)" }}>
                    <UilLocationPoint />
                    Location
                </div>{" "}
                <div className="option" style={{ color: "var(--shedule)" }}>
                    <UilSchedule />
                    Shedule
                </div>
                <button className="button ps-button">Share</button>
                <div style={{ display: "none" }}>
                    <input
                    type="file"
                    name="myImage"
                    ref={imageRef}
                    onChange={onImageChange}
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default PostShare