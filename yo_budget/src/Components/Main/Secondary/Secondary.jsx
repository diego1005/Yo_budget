import React, { useState, useEffect } from 'react';
import "./Secondary.css";
import Table from "./Table/Table";
import Aside from "./Aside/Aside";
import { listAllOperations } from '../../../Services/Operation/getOperations';

function Secondary() {

  const [rowData, setRowData] = useState([]);
  const [countData, setCountData] = useState(0);
  const [backArrow, setBackArrow] = useState(0);

  const getData = async () => {
    const { count, data } = await listAllOperations();
    setRowData(data);
    setCountData(count);
  }

  useEffect(() => {
    console.log('%cComponent Table is mount', 'color: green');

    getData();

  }, [backArrow])

  return (
    <div className='second-section'>
      <Table rowData={rowData} countData={countData} backArrow={setBackArrow} />
      <Aside rowData={rowData} />
    </div>
  )
}

export default Secondary