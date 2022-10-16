import React from 'react';
import "./TableRow.css";

function TableRow({ content, showForm }) {

  const currencyFormat = Intl.NumberFormat('es-ES');

  return (
    <tr className='table_row' onClick={() => showForm(prevState => prevState = { form: "edit", id: content.id })}>
      <td className='row-content'>
        {content.concept}
      </td>
      <td className='row-content'>
        <i className="fa-solid fa-dollar-sign"></i>
        <span className={content.operation_type === "income" ? "income-line" : "expense-line"}>{currencyFormat.format(content.amount)}</span>
      </td>
      <td className='row-content'>
        {content.operation_date}
      </td>
      <td className='row-content'>
        {
          content.operation_type === "income"
            ? <span className='opt_income'>{content.operation_type}</span>
            : <span className='opt_expense'>{content.operation_type}</span>
        }
      </td>
    </tr>
  )
}

export default TableRow