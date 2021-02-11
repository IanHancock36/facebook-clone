import React from 'react';
import { Avatar } from '@material-ui/core';
import "./SidebarRow.css";

function SideBarRow({src,title,Icon}) {
    return (
        <div className = "sidebarRow">
            {src && <Avatar src ={src} />}
            {Icon && <Icon />}
            
            <h4>{title} </h4>
        </div>
    )
}

export default SideBarRow
