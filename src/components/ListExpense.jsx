import React from 'react';
import './listExpense.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faTrash } from '@fortawesome/free-solid-svg-icons'

const ListExpense = () => {

    // Transactions data
    const transactions = [
        { id: 1, type: 'Expense', category: 'Travelling', amount: '150', date: '12 Jan 2022' },
        { id: 2, type: 'Income', category: 'Salary', amount: '2000', date: '01 Feb 2022' },
        { id: 3, type: 'Expense', category: 'Fees', amount: '500', date: '16 Feb 2022' },
        { id: 4, type: 'Expense', category: 'Shopping', amount: '100', date: '20 Feb 2022' },
    ]

    return (
        <div className='ListExpense'>
            {transactions.map((transaction) => {
                return (
                    <div key={transaction.id} className="list-data">
                        <div className="transaction-type">
                            <FontAwesomeIcon icon={faMoneyCheckDollar} className='icon icon-dollar'
                                style={{ color: transaction.type === 'Income' ? 'green' : 'red' }} />
                        </div>
                        <div className="data-left">
                            <h3>{transaction.category}</h3>
                            <p>$ <span className='amount'>{transaction.amount}</span> <span className='date'>{transaction.date}</span></p>
                        </div>
                        <div className="delete-right">
                            <FontAwesomeIcon icon={faTrash} className='icon icon-trash' />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ListExpense