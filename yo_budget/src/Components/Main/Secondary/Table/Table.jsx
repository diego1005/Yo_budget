import React, { useState, useEffect } from 'react';
import "./Table.css";
import TableHead from './TableHead/TableHead';
import TableBody from "./TableBody/TableBody";
import OperationForm from "./OperationForm/OperationForm";
import { addOperation, editOperation } from '../../../../Services/Operation/forOperation';
import { findOneOperation } from '../../../../Services/Operation/getOperations';

function Table({ rowData, countData, backArrow }) {

  const [menu, setMenu] = useState(false);
  const [optList, setOptList] = useState(false);
  const [showForm, setShowForm] = useState({ form: false });
  const [addTransaction, setAddTransaction] = useState({ concept: '', amount: '', operation_date: '', operation_type: '' });
  const [editTransaction, setEditTransaction] = useState({ concept: '', amount: '', operation_date: '', operation_type: '' });
  const [editData, setEditData] = useState({});
  const [submit, setSubmit] = useState(false);

  const sendData = () => {
    let body = {};
    switch (submit) {
      case "add":
        body = JSON.stringify(addTransaction);
        addOperation(body)
        setAddTransaction({});
        break;
      case "edit":
        body = JSON.stringify(editTransaction)
        editOperation(body, showForm.id)
        setEditData({});
        break;
    }
  }

  const findData = async () => {
    const operation = await findOneOperation(showForm.id);
    console.log(operation);
    // setEditData(operation)
  }

  useEffect(() => {

  }, [submit])

  useEffect(() => {
    if (showForm.form === "edit") { }
  }, [showForm])

  return (
    <div className='table-container'>
      <div className="table-top">
        <div className="table-top-left">
          <h2>OPERATIONS</h2>
          <h3>
            <i className="fa-solid fa-check"></i>
            <span className='movements'>{countData} total </span>
            <span>movements</span>
          </h3>
        </div>
        <div className="table-top-right">
          <i className="fa-solid fa-ellipsis-vertical" onClick={() => setMenu(prevState => !prevState)}></i>
        </div>
      </div>
      {
        menu &&
        <div className="table-menu">
          <ul className="menu-list">
            <li className="opt-list" onClick={() => {
              setShowForm(prevState => prevState = { form: false });
              backArrow(1);
            }}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </li>
            <li className="opt-list" onClick={() => setShowForm(prevState => prevState = { form: "add" })}>Add</li>
            <li onClick={() => setOptList(prevState => !prevState)} className="opt-list" >Order: </li>
            {
              optList &&
              <div className="order-opts">
                <li className="opt-list">by Incomes</li>
                <li className="opt-list">by Expenses</li>
              </div>
            }
          </ul>
        </div>
      }
      <div className="table-content">
        {
          !showForm.form
            ? <table className='table'>
              <TableHead />
              <TableBody rowData={rowData} showForm={setShowForm} />
            </table>
            : <OperationForm content={showForm} addData={addTransaction} editTransaction={editTransaction} setAdd={setAddTransaction} setEdit={setEditTransaction} setSubmit={setSubmit} editData={editData} />
        }
      </div>
    </div>
  )
}

export default Table