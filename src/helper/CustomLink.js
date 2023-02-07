import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <div className='nav_icon'>
            <div className={isActive ? "active" : ""}>
                <Link to={to} {...props} key={children}>
                    <img src={children} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default CustomLink