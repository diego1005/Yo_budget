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
          <SidebarOpt sidebarTo="/" sidebarOpt="DASHBOARD" sidebarIcon={<i className="fa-solid fa-chart-line"></i>} />
          <SidebarOpt sidebarTo="/operations" sidebarOpt="OPERATIONS" sidebarIcon={<i className="fa-solid fa-cash-register"></i>} />
          <SidebarOpt sidebarTo="/profile" sidebarOpt="PROFILE" sidebarIcon={<i className="fa-solid fa-user"></i>} />
          <SidebarOpt sidebarTo="/userinn" sidebarOpt="LOG IN" sidebarIcon={<i className="fa-solid fa-right-to-bracket"></i>} />
          <SidebarOpt sidebarTo="/userinn" sidebarOpt="SIGN IN" sidebarIcon={<i className="fa-solid fa-right-to-bracket"></i>} />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar