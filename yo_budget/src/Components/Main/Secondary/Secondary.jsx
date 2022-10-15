import React, { useState, useEffect } from 'react';
import "./Secondary.css";
import Table from "./Table/Table";
import Aside from "./Aside/Aside";

function Secondary() {

  const [rowData, setRowData] = useState([]);
  const [countData, setCountData] = useState(0)

  useEffect(() => {
    console.log('%cComponent Table is mount', 'color: green');
    fetch("http://localhost:3001/operation/list", {
      headers: { "authorization": localStorage.getItem("token") }
    })
      .then(response => response.json())
      .then(data => {
        setCountData(data.count)
        setRowData(data.data)
      })
      .catch(err => console.error(err))
  },[])

  return (
    <div className='second-section'>
      <Table rowData={rowData} countData={countData} />
      <Aside rowData={rowData} />
    </div>
  )
}

export default Secondary