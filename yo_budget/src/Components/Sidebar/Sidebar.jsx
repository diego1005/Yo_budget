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
      <div className="sidebar-list-container">
        <ul className='sidebar-list'>
          <SidebarOpt sidebarTo="/operations" sidebarOpt="DASHBOARD" />
          <SidebarOpt sidebarTo="/users" sidebarOpt="OPERATIONS" />
          <SidebarOpt sidebarTo="/users" sidebarOpt="PROFILE" />
          <SidebarOpt sidebarTo="/login" sidebarOpt="LOG IN" />
          <SidebarOpt sidebarTo="/signin" sidebarOpt="SIGN IN" />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar