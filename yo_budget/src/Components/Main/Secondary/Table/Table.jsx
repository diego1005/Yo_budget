import React, { useEffect } from 'react';
import "./Table.css";
import TableRow from "./TableRow/TableRow";

function Table() {

  useEffect(() => {
    console.log('%cComponent Table is mount', 'color: green');
  })

  return (
    <div className='table-container'>
      <div className="table-top">
        <div className="table-top-left">
          <h2>OPERATIONS</h2>
          <p>
            <i className="fa-solid fa-check"></i>
            <span className='movements'>total movements</span>
          </p>
        </div>
        <div className="table-top-right">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="table-content">
        <table className='table'>
          <thead>
            <tr className='table-title'>
              <th className="table-head">1</th>
              <th className="table-head">2</th>
              <th className="table-head">3</th>
              <th className="table-head">4</th>
              <th className="table-head">5</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            <tr>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table