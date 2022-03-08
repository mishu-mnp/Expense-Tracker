import React from 'react';
import './listExpense.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../state/StateProvider';

const ListExpense = (props) => {

    const [{ transactions }, dispatch] = useStateValue();

    const { id, type, category, amount, date } = props;

    const deleteTransaction = () => {
        dispatch({
            type: 'DELETE_Transaction',
            id: id
        })
    }

    return (
        <div className='ListExpense'>
            <div className="list-data">
                <div className="transaction-type">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} className='icon icon-dollar'
                        style={{ color: type === 'income' ? 'green' : 'red' }} />
                </div>
                <div className="data-left">
                    <h3>{category}</h3>
                    <p>$ <span className='amount'>{amount}</span> <span className='date'>{date}</span></p>
                </div>
                <div className="delete-right icon" onClick={deleteTransaction}>
                    <FontAwesomeIcon icon={faTrash} className='icon icon-trash' />
                </div>
            </div>
        </div>
    )
}

export default ListExpense