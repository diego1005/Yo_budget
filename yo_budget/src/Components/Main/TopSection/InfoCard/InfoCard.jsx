import React from 'react';
import "./InfoCard.css";


function InfoCard(props) {
  return (
    <div className='info-card'>
      <div className="top-card">
        <div className="icon-card">
          {props.icon}
        </div>
        <div className="data-card">
          <p className='data-title'>Titulo</p>
          <p className='data-info'>Info</p>
        </div>
      </div>
      <div className="middle-card"><hr /></div>
      <div className="bottom-card"></div>
    </div>
  )
}

export default InfoCard