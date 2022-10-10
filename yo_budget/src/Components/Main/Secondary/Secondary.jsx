import React from 'react';
import "./Secondary.css";
import Table from "./Table/Table";
import Aside from "./Aside/Aside";

function Secondary() {
  return (
    <div className='second-section'>
      <Table />
      <Aside />
    </div>
  )
}

export default Secondary