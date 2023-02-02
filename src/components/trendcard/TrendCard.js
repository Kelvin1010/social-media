import React from 'react'
import { TrendData } from '../../Data/TrendData';
import '../../styles/TrendCard.css';

function TrendCard() {
    return (
        <div className="trendcard">
            <h3>Trends for you</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard