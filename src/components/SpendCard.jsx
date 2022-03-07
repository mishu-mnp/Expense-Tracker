import React from 'react';
import './spendCard.css';
import useTransaction from '../useTransaction';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const SpendCard = ({ title }) => {

    const { total, chartData } = useTransaction(title);

    return (
        <div className='spend-card'>
            <div className="container">
                <div className="card">
                    <h2 className='title'>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                    <p className='price'>$ <span className='amount'>{total}</span></p>
                    <div className="pie-chart">
                        <Chart type='doughnut' data={chartData} />
                    </div>
                </div>
            </div>
            <div className='strip' style={{ backgroundColor: title === 'income' ? 'green' : 'red' }}></div>
        </div>
    )
}

export default SpendCard