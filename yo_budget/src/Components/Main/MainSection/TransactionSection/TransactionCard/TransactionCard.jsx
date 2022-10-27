import React from 'react';
import "./TransactionCard.css"


function TransactionCard({ operation }) {

    const op_type = operation.operation_type;

    const currencyFormat = Intl.NumberFormat('es-ES');

    return (
        <div className="tran-card">
            <div className="arrow-box">
                {
                    op_type === "income"
                        ? <i className="fa-solid fa-circle-chevron-up"></i>
                        : <i className="fa-solid fa-circle-chevron-down"></i>
                }
            </div>
            <div className="tran-data">
                <div className="tran-date-box">
                    <p className='tran-date'>{operation.operation_date}</p>
                </div>
                <div className="tran-second">
                    <div className="tran-concept-box">
                        <p className="tran-concept">{operation.concept}</p>
                    </div>
                    <div className="tran-amount-box">
                        <p className='tran-amount'>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <span>  {currencyFormat.format(operation.amount)} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard