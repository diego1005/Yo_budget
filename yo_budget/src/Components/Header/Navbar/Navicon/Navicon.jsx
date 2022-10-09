import React from 'react';
import "./Navicon.css";

function Navicon() {
  return (
    <div>
      <button className='nav-btn-user'><i className="fa-solid fa-user nav-icon"></i></button>
      <button className='nav-btn-gear'><i className="fa-solid fa-gear nav-icon"></i></button>
    </div>
  )
}

export default Navicon