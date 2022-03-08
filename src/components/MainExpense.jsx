import React, { useEffect, useState } from 'react';
import { expenseCategories, incomeCategories } from '../constants/categories';
import { useStateValue } from '../state/StateProvider';
import ListExpense from './ListExpense';
import './mainExpense.css';
import { v4 as uuidv4 } from 'uuid';
import { useSpeechContext } from '@speechly/react-client';

const MainExpense = () => {
    const [{ transactions }, dispatch] = useStateValue();

    const initialState = {
        amount: '',
        category: '',
        type: 'income',
        date: '',
    };

    const [data, setData] = useState(initialState)
    const { segment } = useSpeechContext()


    const addTransaction = () => {
        if (Number.isNaN(Number(data.amount)) || !data.date.includes('-')) return;
        dispatch({
            type: 'ADD_Transaction',
            transaction: { ...data, id: uuidv4(), amount: Number(data.amount) }
        })
        setData(initialState)
    }

    useEffect(() => {
        if (segment) {
            console.log(segment)
            if (segment.intent.intent === 'add_expense') {
                setData({ ...FormData, type: 'expense' })
            } else if (segment.intent.intent === 'add_income') {
                setData({ ...FormData, type: 'income' })
            } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                return addTransaction()
            } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                return setData(initialState)
            }

            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0) + e.value.toLowerCase().slice(1)}`
                switch (e.type) {
                    case 'amount':
                        setData({ ...data, amount: e.value })
                        break;
                    case 'category':
                        if (incomeCategories.map((iC) => iC.type).includes(category)) {
                            setData({ ...data, type: 'income', category: category })
                        } else if (expenseCategories.map((eC) => eC.type).includes(category)) {
                            setData({ ...data, type: 'expense', category: category })
                        }
                        break;
                    case 'date':
                        setData({ ...data, date: e.value })
                        break;
                    default:
                        break;
                }
            })

            if (segment.isFinal && data.amount && data.type && data.category && data.date) {
                addTransaction()
            }
        }
    }, [segment])


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
                    <div className="speechly-voice-text" style={{ height: segment && '3rem' }}>
                        {segment && segment.words.map((w) => w.value).join(" ")}
                    </div>
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
                    {transactions.length > 0 && <div className="expense-data">
                        {transactions.map(transaction => (
                            <ListExpense key={transaction.id} id={transaction.id} type={transaction.type} className='transaction-data'
                                amount={transaction.amount} category={transaction.category} date={transaction.date}
                            />
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default MainExpense