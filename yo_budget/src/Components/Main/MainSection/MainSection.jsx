import React, { useState, useEffect } from 'react';
import "./MainSection.css";
import TransactionSection from './TransactionSection/TransactionSection';
import { listTheLasts } from '../../../Services/Operation/getOperations';

function MainSection() {

  const [lastsOperations, setLastsOperations] = useState([])

  const getTheLasts = async () => {
    const { data } = await listTheLasts();
    setLastsOperations(data)
  }

  useEffect(() => {
    console.log('%cComponent Main Section is mount', 'color: green');
    getTheLasts();
  }, [])

  return (
    <div className='main-section'>
      <div className="main-section-title-box">
        <h2 className='main-section-title'>LASTS TRANSACTIONS</h2>
      </div>
      <div className="main-section-container">
        <TransactionSection lastsOperations={lastsOperations} />
      </div>
    </div>
  )
}

export default MainSection