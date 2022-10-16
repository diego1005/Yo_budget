import React, { useState, useEffect } from 'react';
import "./Main.css";
import TopSection from "../Main/TopSection/TopSection";
import MainSection from "../Main/MainSection/MainSection";
import Secondary from "../Main/Secondary/Secondary";

function Main() {

  const [firstLastFive, setFirstLastFive] = useState([]);
  const [lastFive, setLastFive] = useState([]);
  const [countList, setCountList] = useState(0);
  const [newTransaction, setNewTransaction] = useState(false);

  useEffect(() => {
    console.log('%cComponent Main Section is mount', 'color: green');
    let offset = 0;
    if (countList > 0) offset = 5;
    fetch(`http://localhost:3001/operation/listTheLasts/${offset}`, {
      headers: { "authorization": localStorage.getItem("token") }
    })
      .then(response => response.json())
      .then(data => {
        if (countList === 0) setFirstLastFive(data.data);
        if (countList > 0) setLastFive(data.data);
      })
      .catch(err => console.error(err))
  }, [newTransaction, countList])

  return (
    <div className='main'>
      <TopSection />
      <MainSection firstLastFive={firstLastFive} lastFive={lastFive} setCountList={setCountList} />
      <Secondary setNewTransaction={setNewTransaction} />
    </div>
  )
}

export default Main