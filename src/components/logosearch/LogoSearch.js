import React from 'react';
import '../../styles/LogoSearch.css';
import Logo from '../../image/logokw.png';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function LogoSearch() {
    return (
        <div className='logosearch'>
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
    )
}

export default LogoSearch