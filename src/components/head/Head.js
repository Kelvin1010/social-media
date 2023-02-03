import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Head.css';
import Logo from '../../image/logokw.png';
import Friend from '../../image/friend.png';
import Watch from '../../image/watch.png';
import Home from "../../image/home.png";
import Group from '../../image/group.jpg';
import Shop from '../../image/shop.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CustomLink from '../../helper/CustomLink';

function Head() {


    const navigate = useNavigate();

    return (
        <div className='head'>
            <div className='head_left'>
                <Link to={'/'}>
                    <img src={Logo} alt="" className='logo-img' />
                </Link>
                <div className="search">
                    <input type="text" placeholder='#Explore' />
                    <div className="s-icon">
                        <SearchIcon/>
                    </div>
                </div>
            </div>
            <div className='head_center'>
                <CustomLink to={'/'} children={Home} />
                <CustomLink to={'/friends'} children={Friend} />
                <CustomLink to={'/watch'} children={Watch} />
                <CustomLink to={'/market'} children={Shop} />
                <CustomLink to={'/group'} children={Group} />
            </div>
            <div className='head_right'>
                Right 
            </div>
        </div>
    )
}

export default Head