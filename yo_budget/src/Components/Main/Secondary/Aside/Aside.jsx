import React, { useState, useEffect } from 'react';
import "./Aside.css";

function Aside({ rowData }) {

  const [totalIncomes, settotalIncomes] = useState(0);
  const [totalExpenses, settotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  const currencyFormat = Intl.NumberFormat('es-ES');

  useEffect(() => {

    const tote = () => {
      let totalI = 0;
      let totalE = 0;
      rowData.forEach(el => {
        if (el.operation_type === "income") {
          totalI += (el.amount === undefined) ? 0 : parseFloat(el.amount);
        } else {
          totalE += (el.amount === undefined) ? 0 : parseFloat(el.amount);
        }
      })
      const total = totalI - totalE
      settotalIncomes(totalI);
      settotalExpenses(totalE);
      setBalance(total)
    }

    tote();
  }, [rowData])

  return (
    <div className='aside'>
      <div className="aside-title-box">
        <h3 className='aside-title'>SUMMARY</h3>
      </div>
      <div className="aside-content">
        <div className="incomes-box">
          <h3 className='incomes-title'>INCOMES</h3>
          <p className="total-incoms">Total Incomes: {currencyFormat.format(totalIncomes)}</p>
        </div>
        <div className="expenses-box">
          <h3 className="expenses-title">EXPENSES</h3>
          <p className="total-expenses">Total Expenses: {currencyFormat.format(totalExpenses)}</p>
        </div>
        <div className="balance-box">
          <h3 className="balance-title">BALANCE</h3>
          <p className="balance">Balance: {currencyFormat.format(balance)}</p>
        </div>
      </div>
      <div className="aside-bottom"></div>
    </div>
  )
}

export default Aside