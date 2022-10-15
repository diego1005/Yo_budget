import React from 'react';
import "./Table.css";
import TableRow from "./TableRow/TableRow";

function Table({ rowData, countData }) {

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
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="table-content">
        <table className='table'>
          <thead>
            <tr className='table-title'>
              <th className="table-head">Concept</th>
              <th className="table-head">Amount</th>
              <th className="table-head">Date</th>
              <th className="table-head">Type</th>
              <th className="table-head">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
              rowData.map((el, idx) => <TableRow key={idx + el.id} content={el} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table