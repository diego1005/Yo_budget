import React from 'react';
import "./OperationForm.css"

function OperationForm({ showForm }) {

  return (
    <div className='operation-form-container'>
      <h3 className='operation-title'>
        <span className={showForm === "add" ? "par-add" : "par-edit"}>
          {showForm === "add" ? "ADD " : "EDIT "}
        </span>
        TRANSACTION
      </h3>
      <form className='operation-form'>
        <div className="form-box">
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="date" name="operation_date" />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="text" name="concept" placeholder='Concept of the operation' />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <select name="operation_type">
              <option value="incomes">Income</option>
              <option value="Expenses">Expense</option>
            </select>
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-dollar-sign"></i>
            <input className='form-amount' type="text" name="amount" placeholder='Amount of the operation' />
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