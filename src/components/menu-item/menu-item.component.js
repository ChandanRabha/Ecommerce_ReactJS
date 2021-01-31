import './menu-item.styles.scss'

import React from 'react'

 const MenuItem = ({title,imageUrl,size}) => {
     
    return (
            <div className={`menu-item ${size}`}>
                    <div className="backgroundImage" style={{backgroundImage:`url(${imageUrl})`}}></div>
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
    )
}
export default MenuItem;