import React, { useState, useEffect } from 'react';
import "./Table.css";
import TableHead from './TableHead/TableHead';
import TableBody from "./TableBody/TableBody";
import OperationForm from "./OperationForm/OperationForm";
import { addOperation, editOperation } from '../../../../Services/Operation/forOperation';
import { findOneOperation } from '../../../../Services/Operation/getOperations';

function Table({ rowData, countData, setCountData }) {

  const [menu, setMenu] = useState(false);
  const [optList, setOptList] = useState(false);
  const [showForm, setShowForm] = useState('');
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
    setCountData(countData + 1)
  }

  const findData = async () => {
    const operation = await findOneOperation(showForm.id);
    console.log(operation);
    // setEditData(operation)
  }

  useEffect(() => {

  }, [submit])

  useEffect(() => {

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
              setShowForm('');
            }}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </li>
            <li className="opt-list" onClick={() => setShowForm("add")}>Add</li>
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
          !showForm
            ? <table className='table'>
              <TableHead />
              <TableBody rowData={rowData} showForm={setShowForm} />
            </table>
            : <OperationForm showForm={showForm} />
        }
      </div>
    </div>
  )
}

export default Table