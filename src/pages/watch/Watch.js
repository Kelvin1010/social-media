import React from 'react';
import WatchCard from '../../components/watchcard/WatchCard';
import '../../styles/Watch.css';

function Watch() {
    return (
        <div className='watch'>
            <div className='watch_center'>
                <WatchCard />
            </div>
        </div>
    )
}

export default Watch