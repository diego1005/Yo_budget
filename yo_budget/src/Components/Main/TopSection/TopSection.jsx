import React from 'react';
import "./TopSection.css";
import InfoCard from "./InfoCard/InfoCard";

function TopSection() {
  return (
    <div className='top-section'>
      <InfoCard icon={<i className="fa-solid fa-book icon-img fcolor"></i>} />
      <InfoCard icon={<i className="fa-solid fa-chart-simple icon-img scolor"></i>} />
      <InfoCard icon={<i className="fa-solid fa-users icon-img tcolor"></i>} />
    </div>
  )
}

export default TopSection