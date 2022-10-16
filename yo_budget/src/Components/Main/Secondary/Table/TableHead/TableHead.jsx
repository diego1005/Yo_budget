import React from 'react';
import "./TableHead.css"

function TableHead() {
    return (
        <thead>
            <tr className='table-title'>
                <th className="table-head">Concept</th>
                <th className="table-head">Amount</th>
                <th className="table-head">Date</th>
                <th className="table-head">Type</th>
                <th className="table-head">
                    <i className="fa-solid fa-trash"></i>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead