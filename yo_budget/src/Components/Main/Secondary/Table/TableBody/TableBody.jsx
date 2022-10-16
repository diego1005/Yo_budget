import React from 'react';
import "./TableBody.css";
import TableRow from '../TableRow/TableRow';

function TableBody({rowData, editData, showForm}) {

  return (
    <tbody className='table-body'>
    {
      rowData.map((el, idx) => <TableRow key={idx + el.id} content={el} showForm={showForm} />)
    }
  </tbody>
  )
}

export default TableBody