import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css"

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
        {/* Create component sidebar options */}
        <li>
          <Link to="/operations" className='sidebar-link'>
            {/* icon */}
            <span className='sidebar-opt'> OPERATIONS</span>
          </Link>
        </li>
        <li>
          <Link to="/users" className='sidebar-link'>
            {/* icon */}
            <span className='sidebar-opt'> USERS</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar