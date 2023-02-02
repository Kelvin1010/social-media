import React from 'react';
import '../../styles/LogoSearch.css';
import Logo from '../../image/logo.png';
import SearchIcon from '@mui/icons-material/Search';

function LogoSearch() {
    return (
        <div className='logosearch'>
            <img src={Logo} alt="" />
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