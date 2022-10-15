import React, { useState, useEffect } from 'react';
import "./MainSection.css";
import TransactionCard from "./TransactionCard/TransactionCard";

function MainSection() {

  const [lastsTransactions, setLastsTransactions] = useState([]);

  useEffect(() => {
    console.log('%cComponent Main Section is mount', 'color: green');
    fetch("http://localhost:3001/operation/listTheLasts", {
      headers: { "authorization": localStorage.getItem("token") }
    })
      .then(response => response.json())
      .then(data => setLastsTransactions(data.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='main-section'>
      <div className="main-section-title-box">
        <h2 className='main-section-title'>LASTS TRANSACTIONS</h2>
      </div>
      <div className="main-section-content">
        {
          lastsTransactions.map(el => <TransactionCard content={el} />)
        }
      </div>
    </div>
  )
}

export default MainSection