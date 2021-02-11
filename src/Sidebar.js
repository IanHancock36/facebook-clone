import userEvent from '@testing-library/user-event';
import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow'
function Sidebar() {
    return (
        <div className="sidebar" >
          <SidebarRow src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fiso.500px.com%2Fthe-top-20-nature-photos-on-500px-so-far-this-year%2F&psig=AOvVaw3hIbgj76lrYtrpxvWR7vZ1&ust=1613135194504000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMizo4Xz4e4CFQAAAAAdAAAAABAD' title="Ian Hancock" />
          
          
           <SideBarRow title= 'Pages'/>
           <SideBarRow title= 'Friends'/>
           <SideBarRow title= 'Pages'/>
           <SideBarRow title= 'Pages'/>
           <SideBarRow title= 'Pages'/>
        </div>
    )
}

export default Sidebar
