import React, { useState } from 'react';
import { expenseCategories, incomeCategories } from '../constants/categories';
import { useStateValue } from '../state/StateProvider';
import ListExpense from './ListExpense';
import './mainExpense.css';
import { v4 as uuidv4 } from 'uuid';

const MainExpense = () => {
    const [{ transactions }, dispatch] = useStateValue();

    const initialState = {
        amount: '',
        category: '',
        type: 'income',
        date: '',
    };

    const [data, setData] = useState(initialState)


    const addTransaction = () => {
        dispatch({
            type: 'ADD_Transaction',
            transaction: { ...data, id: uuidv4(), amount: Number(data.amount) }
        })
        setData(initialState)
    }


    const selectedCategories = data.type === 'income' ? incomeCategories : expenseCategories

    return (
        <div className='MainExpense'>
            <div className="expense-container">
                <div className="card">
                    <h1 className='title'>Expense Tracker</h1>
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <span className='price'>$ <span className='amount'>4000</span></span>
                    </div>
                    <div className="speechy-text">
                        <p>Try to Speak</p>
                        <p>Add income for $500 in Category Salary for Friday</p>
                    </div>
                    <div className="divider"></div>
                    <div className="add-expenses">
                        <p>Type</p>
                        <div className="expense-form">
                            <form>
                                <div className="form-data">
                                    <div className="expense-type">
                                        <select id="type" value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })}>
                                            <option value="income" >Income</option>
                                            <option value="expense">Expense</option>
                                        </select>
                                    </div>
                                    <div className="expense-category">
                                        <select id="category" value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} required>
                                            <option value="NA" defaultValue='--'>--select--</option>
                                            {selectedCategories.map((category) => (
                                                <option key={category.type} value={category.type}>{category.type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='amount'>
                                        <input type="text" name='amount' placeholder='Amount' value={data.amount || ''}
                                            onChange={(e) => setData({ ...data, amount: parseInt(e.target.value) })} required />
                                    </div>
                                    <div className='date'>
                                        <input type="date" name='date' value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} required />
                                    </div>
                                </div>
                            </form>
                            <button className='btn' onClick={addTransaction} disabled={Number(data.amount) === 0}>Add</button>
                        </div>
                    </div>
                    <div className="expense-data">
                        {transactions.map(transaction => (
                            <ListExpense key={transaction.id} id={transaction.id} type={transaction.type} className='transaction-data'
                                amount={transaction.amount} category={transaction.category} date={transaction.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainExpense