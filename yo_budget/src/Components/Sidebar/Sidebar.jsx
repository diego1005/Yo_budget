import React from 'react';
import "./Sidebar.css"
import SidebarOpt from './SidebarOpt/SidebarOpt';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-title">
        <div className="title-box">
          {/* icon */}
          <h2 className='title-icon'>MATERIAL DASHBOARD</h2>
        </div>
        <hr />
      </div>
      <ul className='sidebar-list'>
        <SidebarOpt sidebarTo="/operations" sidebarOpt="OPERATIONS" />
        <SidebarOpt sidebarTo="/users" sidebarOpt="USERS" />
        <SidebarOpt sidebarTo="/login" sidebarOpt="LOG IN" />
        <SidebarOpt sidebarTo="/signin" sidebarOpt="SIGN IN" />
      </ul>
    </div>
  )
}

export default Sidebar