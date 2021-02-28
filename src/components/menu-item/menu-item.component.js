import './menu-item.styles.scss'
import {useHistory} from 'react-router-dom'

import React from 'react'

 const MenuItem = ({title,imageUrl,size,linkUrl}) => {
    const hist=useHistory()
    const funVisit=()=>{
            //props.history.push(linkUrl)
        hist.push(linkUrl)
    }

    return (
         
            <div className={`menu-item ${size}`} onClick={funVisit} >
                    <div className="backgroundImage" style={{backgroundImage:`url(${imageUrl})`}}   ></div>
                    <div className="content">

                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
     
    )
}
export default MenuItem;
