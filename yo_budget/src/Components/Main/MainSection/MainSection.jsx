import React from 'react';
import "./MainSection.css";
import TransactionCard from "./TransactionCard/TransactionCard";

function MainSection({ firstLastFive, lastFive, setCountList }) {

  return (
    <div className='main-section'>
      <div className="main-section-title-box">
        <h2 className='main-section-title'>LASTS TRANSACTIONS</h2>
      </div>
      <div className="main-section-container">
        <div className="main-section-content">
          {
            firstLastFive.map((el, idx) => <TransactionCard key={`${idx}-${el.id}`} content={el} />)
          }
          {
            setCountList(1)
          }
        </div>
        <div className="main-section-content">
          {
            lastFive.map((el, idx) => <TransactionCard key={`${idx}-${el.id}`} content={el} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MainSection