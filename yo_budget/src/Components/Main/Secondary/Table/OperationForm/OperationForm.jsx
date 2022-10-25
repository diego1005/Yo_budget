import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom"
import "./OperationForm.css"

function OperationForm({ content, addData, editTransaction, setAdd, setEdit, setSubmit, setNewTransaction, editData }) {

  const [erase, setErase] = useState()

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   if (content.form === "add") setAdd(addData);
  //   if (content.form === "edit") setEdit(editTransaction);

  // }

  // useEffect(() => {
  //   fetch(`http://localhost:3000/operation/delete/${erase}`, {
  //     method: "DELETE",
  //     headers: { "authorization": localStorage.getItem("token") }
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err))
  // }, [erase])

  return (
    <div className='operation-form-container'>
      <h3 className='operation-title'><span className={content.form === "add" ? "par-add" : "par-edit"}>{content.form === "add" ? "ADD" : "EDIT"}</span> TRANSACTION</h3>
      <form className='operation-form' /*onSubmit={submitHandler}*/>
        <div className="form-box">
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="date" name="operation_date"
              onChange={
                content.form === "add"
                  ? e => setAdd({ ...addData, operation_date: e.target.value })
                  : content === "edit"
                    ? e => setEdit({ ...editTransaction, operation_date: e.target.value })
                    : ''
              }
              value={
                content.form === "add"
                  ? addData.operation_date
                  : content.form === "edit"
                    ? editTransaction.operation_date
                    : ''
              }
            />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <input type="text" name="concept" placeholder='Concept of the operation'
              onChange={
                content.form === "add"
                  ? e => setAdd({ ...addData, concept: e.target.value })
                  : content.form === "edit"
                    ? e => setEdit({ ...editTransaction, concept: e.target.value })
                    : ''
              }
              value={
                content.form === "add"
                  ? addData.concept
                  : content.form === "edit"
                    ? editTransaction.concept
                    : ''
              }
            />
          </div>
          <div className="operation-form-control">
            <i className="fa-solid fa-arrow-right"></i>
            <select name="operation_type"
              onChange={
                content.form === "add"
                  ? e => setAdd({ ...addData, operation_type: e.target.value })
                  : content.form === "edit"
                    ? e => setEdit({ ...editTransaction, operation_type: e.target.value })
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
                content.form === "add"
                  ? e => setAdd({ ...addData, amount: e.target.value })
                  : content.form === "edit"
                    ? e => setEdit({ ...editTransaction, amount: e.target.value })
                    : ''
              }
              value={
                content.form === "add"
                  ? addData.amount
                  : content.form === "edit"
                    ? editTransaction.amount
                    : ''
              }
            />
          </div>
        </div>
        <div className="btn-submit-form">
          {
            content.form === "add"
              ? <button type='submit'><i className="fa-regular fa-square-plus btn-add" onClick={() => {
                setSubmit("add");
                <Navigate replace to="/" />
              }}></i></button>
              : <div>
                <button onClick={() => setErase(content.id)}>
                  <i className="fa-solid fa-trash btn-trash"></i>
                </button>
                <button type='submit'><i className="fa-solid fa-pen-to-square btn-edit" onClick={() => {
                  setSubmit("edit");
                  <Navigate replace to="/" />
                }}></i></button>
              </div>
          }
        </div>
      </form>
    </div >
  )
}

export default OperationForm