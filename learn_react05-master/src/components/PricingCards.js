import React from 'react'
import './PricingCardsStyles.css';
import { Link } from 'react-router-dom';

const PricingCards = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='usd'>$1,000</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Shared Living -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='usd'>$5,000</p>
                    <p>- 7 Days -</p>
                    <p>- Monkeys -</p>
                    <p>- Scuba Tour -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='usd'>$10,000</p>
                    <p>- 21 Days -</p>
                    <p>- Chef and Open Bar -</p>
                    <p>- Staffed Yacht -</p>
                    <p>- Private Beach -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCards
