import React, { useState } from 'react';
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
import LogoutIcon from '@mui/icons-material/Logout';
import { ActionIcon, Menu } from '@mantine/core';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/AuthActions';
import LoginIcon from '@mui/icons-material/Login';
import { Login } from '@mui/icons-material';

function Head() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.authData)
    const [modalOpened, setModalOpened] = useState(false);
    const handleLogOut = ()=> {
        dispatch(logout())
    }

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
                <Menu withinPortal position="bottom-end" shadow="sm">
                    <Menu.Target>
                    <ActionIcon>
                        <SettingsIcon style={{width:35,height:35, color:"#3566f9"}} />
                    </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {user 
                            ? <Menu.Item onClick={handleLogOut} icon={<LogoutIcon size={14} style={{color:"#3566f9"}}/>}>Log out</Menu.Item>
                            : null 
                        }
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>
    )
}

export default Head