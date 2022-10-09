import React from 'react';
import "./TopSection.css";
import InfoCard from "./InfoCard/InfoCard";

function TopSection() {
  return (
    <div className='top-section'>
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  )
}

export default TopSection