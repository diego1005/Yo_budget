import React, { useState } from 'react';
import "./OperationForm.css"
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../../../Features/Transactions/TransactionSlice";

function OperationForm({ showForm }) {

  const [transaction, settransaction] = useState({})

  const dispatch = useDispatch();

  const handleChange = e => {
    settransaction({
      ...transaction,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTransaction(transaction));
  }

  return (
    <div className='operation-form-container'>
      <h3 className='operation-title'>
        <span className={showForm === "add" ? "par-add" : "par-edit"}>
          {showForm === "add" ? "ADD " : "EDIT "}
        </span>
        TRANSACTION
      </h3>
      <form className='operation-form' onSubmit={handleSubmit}>
        <div className="form-box">
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="date" name="operation_date" onChange={handleChange} />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="text" name="concept" placeholder='Concept of the operation' onChange={handleChange} />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <select name="operation_type" onChange={handleChange}>
              <option>-- Select --</option>
              <option value="incomes">Income</option>
              <option value="Expenses">Expense</option>
            </select>
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-dollar-sign"></i>
            <input className='form-amount' type="text" name="amount" placeholder='Amount of the operation'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btn-submit-form">
          {
            showForm === "add"
              //add button
              ? <button type='submit'><i className="fa-regular fa-square-plus btn-add"></i></button>
              : <div>
                {/* trash button */}
                <button><i className="fa-solid fa-trash btn-trash"></i></button>
                {/* edit button */}
                <button type='submit'><i className="fa-solid fa-pen-to-square btn-edit"></i></button>
              </div>
          }
        </div>
      </form >
    </div >
  )
}

export default OperationForm