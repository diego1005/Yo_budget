import React, { useState, useEffect } from 'react';
import "./Secondary.css";
import Table from "./Table/Table";
import Aside from "./Aside/Aside";
import { listAllOperations } from '../../../Services/Operation/getOperations';
import { useSelector } from "react-redux";

function Secondary() {

  const transactionState = useSelector(state => state.transactions)

  const [rowData, setRowData] = useState([]);
  const [countData, setCountData] = useState(0);

  const getData = async () => {
    const { count, data } = await listAllOperations();
    setRowData(data);
    setCountData(count);
  }

  useEffect(() => {
    console.log('%cComponent Secondary is mount', 'color: green');

    getData();

  }, [countData])

  return (
    <div className='second-section'>
      <Table rowData={rowData} countData={countData} setCountData={setCountData} />
      <Aside rowData={rowData} />
    </div>
  )
}

export default Secondary