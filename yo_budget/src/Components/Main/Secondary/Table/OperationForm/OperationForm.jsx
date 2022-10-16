import React from 'react';
import "./OperationForm.css"

function OperationForm({ content, addData, editData, setAdd, setEdit, setSubmit, setNewTransaction }) {

  const submitHandler = (e) => {
    e.preventDefault();

    if (content === "add") setAdd(addData);
    if (content === "edit") setEdit(editData);

  }

  return (
    <div className='operation-form-container'>
      <h3 className='operation-title'><span className={content === "add" ? "par-add" : "par-edit"}>{content === "add" ? "ADD" : "EDIT"}</span> TRANSACTION</h3>
      <form className='operation-form' onSubmit={submitHandler}>
        <div className="form-box">
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="date" name="operation_date"
              onChange={
                content === "add"
                  ? e => setAdd({ ...addData, operation_date: e.target.value })
                  : content === "edit"
                    ? e => setEdit({ ...editData, operation_date: e.target.value })
                    : ''
              }
              value={
                content === "add"
                  ? addData.operation_date
                  : content === "edit"
                    ? editData.operation_date
                    : ''
              }
            />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="text" name="concept" placeholder='Concept of the operation'
              onChange={
                content === "add"
                  ? e => setAdd({ ...addData, concept: e.target.value })
                  : content === "edit"
                    ? e => setEdit({ ...editData, concept: e.target.value })
                    : ''
              }
              value={
                content === "add"
                  ? addData.concept
                  : content === "edit"
                    ? editData.concept
                    : ''
              }
            />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <select name="operation_type"
              onChange={
                content === "add"
                  ? e => setAdd({ ...addData, operation_type: e.target.value })
                  : content === "edit"
                    ? e => setEdit({ ...editData, operation_type: e.target.value })
                    : ''
              }>
              <option value="incomes">Income</option>
              <option value="Expenses">Expense</option>
            </select>
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-dollar-sign"></i>
            <input className='form-amount' type="text" name="amount" placeholder='Amount of the operation'
              onChange={
                content === "add"
                  ? e => setAdd({ ...addData, amount: e.target.value })
                  : content === "edit"
                    ? e => setEdit({ ...editData, amount: e.target.value })
                    : ''
              }
              value={
                content === "add"
                  ? addData.amount
                  : content === "edit"
                    ? editData.amount
                    : ''
              }
            />
          </div>
        </div>
        <div className="btn-submit-form">
          {
            content === "add"
              ? <button type='submit'><i className="fa-regular fa-square-plus btn-add"  onClick={() => {
                setSubmit("add");
                setNewTransaction(true)
              }}></i></button>
              : <button type='submit'><i className="fa-solid fa-pen-to-square btn-edit" onClick={() => {
                setSubmit("edit");
                setNewTransaction(true)
              }}></i></button>
          }
        </div>
      </form>
    </div >
  )
}

export default OperationForm