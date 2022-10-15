import React from 'react';
import "./TableRow.css";

function TableRow({ content }) {

  const currencyFormat = Intl.NumberFormat('es-ES');

  return (
    <tr className='table_row'>
      <td className='row-content'>
        {content.concept}
      </td>
      <td className='row-content'>
        <span className='dollar_symbol'><b>$ </b></span>
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
      <td className='row-content'>
        <p><i className="fa-solid fa-pen-to-square"></i></p>
        <p><i className="fa-solid fa-trash"></i></p>
      </td>
    </tr>
  )
}

export default TableRow