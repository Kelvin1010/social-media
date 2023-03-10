import React from 'react';
import '../../styles/RightSide.css';
import Home from "../../image/home.png";
import Noti from "../../image/noti.png";
import Comment from "../../image/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../trendcard/TrendCard';
import ShareModal from '../sharemodal/ShareModal';

function RightSide({ modalOpened, setModalOpened }) {
    return (
        <div className="rightside">
            <TrendCard />
            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    )
}

export default RightSide