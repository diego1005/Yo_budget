import React from 'react'
import "./TransactionSection.css"
import TransactionCard from "./TransactionCard/TransactionCard";

function TransactionSection({ lastsOperations }) {
    return (
        <div className="main-section-content">
            {
                lastsOperations.map((operation, idx) =>
                    <TransactionCard key={`${idx}-${operation.id}`} operation={operation} />
                )
            }
        </div>
    )
}

export default TransactionSection