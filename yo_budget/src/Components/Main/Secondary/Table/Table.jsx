import React, { useState, useEffect } from 'react';
import "./Table.css";
import TableHead from './TableHead/TableHead';
import TableBody from "./TableBody/TableBody";
import OperationForm from "./OperationForm/OperationForm";

function Table({ rowData, countData, setBackArrow, setNewTransaction }) {

  const [menu, setMenu] = useState(false);
  const [optList, setOptList] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [addTransaction, setAddTransaction] = useState({});
  const [editTransaction, setEditTransaction] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {

    const handleSubmit = () => {
      let url = "http://localhost:3001/operation/";
      let route = submit;
      let body = {};
      if (route === "add") body = JSON.stringify(addTransaction);
      if (route === "edit") body = JSON.stringify(editTransaction);

      if (submit !== false && Object.keys(body).length !== 0) {
        fetch((url + route), {
          method: "POST",
          headers: {
            "authorization": localStorage.getItem("token"),
            "Content-type": "application/json"
          },
          body
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.error(err))
      }
    }

    handleSubmit();
  }, [showForm, addTransaction, editTransaction, submit])

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
              setShowForm(prevState => prevState = false);
              setBackArrow(1);
            }}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </li>
            <li className="opt-list" onClick={() => setShowForm(prevState => prevState = "add")}>Add</li>
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
            : <OperationForm content={showForm} addData={addTransaction} editData={editTransaction} setAdd={setAddTransaction} setEdit={setEditTransaction} setSubmit={setSubmit} setNewTransaction={setNewTransaction} />
        }
      </div>
    </div>
  )
}

export default Table