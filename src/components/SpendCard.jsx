import React from 'react';
import './spendCard.css';

const SpendCard = (props) => {
    const { title } = props;
    return (
        <div className='spend-card'>
            <div className="container">
                <div className="card">
                    <h2 className='title'>{title}</h2>
                    <p className='price'>$ <span className='amount'>5000</span></p>
                    <div className="pie-chart">
                        <p>Pie Chart for {title} data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpendCard