import React from 'react';
import ListExpense from './ListExpense';
import './mainExpense.css';


const MainExpense = () => {
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
                                        <select id="type">
                                            <option value="income">Income</option>
                                            <option value="expense">Expense</option>
                                        </select>
                                    </div>
                                    <div className="expense-category">
                                        <select id="category">
                                            <option defaultValue='Category'>Category</option>
                                            <option value="shopping">Shopping</option>
                                            <option value="fees">Fees</option>
                                            <option value="friend">Friend</option>
                                            <option value="travelling">Travelling</option>
                                        </select>
                                    </div>
                                    <div className='amount'>
                                        <input type="text" name='amount' placeholder='Amount' />
                                    </div>
                                    <div className='date'>
                                        <input type="date" name='date' />
                                    </div>
                                    <button className='btn'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="expense-data">
                        <ListExpense />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainExpense