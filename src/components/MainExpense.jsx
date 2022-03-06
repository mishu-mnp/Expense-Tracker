import React, { useState } from 'react';
import { useStateValue } from '../state/StateProvider';
import ListExpense from './ListExpense';
import './mainExpense.css';


const MainExpense = () => {
    const [{ transactions }, dispatch] = useStateValue();

    const [type, setType] = useState("income")
    const [category, setCategory] = useState("Category")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")

    const addTransaction = () => {
        var id = "id" + Math.random().toString(16).slice(2)
        dispatch({
            type: 'ADD_Transaction',
            transaction: {
                id: id,
                type: type,
                category: category,
                amount: amount,
                date: date
            }
        })
        setAmount(0)
        setCategory("Category")
        setDate("")
        setType("income")
    }

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setData(values => ({ ...values, [name]: value }))
    // }

    const handleSelectType = (e) => {
        setType(e.target.value)
    }

    const handleSelectCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }


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
                                        <select id="type" value={type} onChange={handleSelectType}>
                                            <option value="income" >Income</option>
                                            <option value="expense">Expense</option>
                                        </select>
                                    </div>
                                    <div className="expense-category">
                                        <select id="category" value={category} onChange={handleSelectCategory}>
                                            <option defaultValue='Category'>Category</option>
                                            <option value="shopping">Shopping</option>
                                            <option value="fees">Fees</option>
                                            <option value="friend">Friend</option>
                                            <option value="travelling">Travelling</option>
                                        </select>
                                    </div>
                                    <div className='amount'>
                                        <input type="text" name='amount' placeholder='Amount' value={amount}
                                            onChange={handleAmount} />
                                    </div>
                                    <div className='date'>
                                        <input type="date" name='date' value={date} onChange={handleDate} />
                                    </div>
                                </div>
                            </form>
                            <button className='btn' onClick={addTransaction}>Add</button>
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