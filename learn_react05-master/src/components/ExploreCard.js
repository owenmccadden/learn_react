import React from 'react'
import './ExploreCardStyles.css'
import  {Link} from 'react-router-dom';

import Fruits from '../assets/fruits.jpeg';
import Bridge from '../assets/bridge.jpeg';

const ExploreCard = () => {
    return (
        <div className='explore'>
            <div className='left'>
                <h1>Explore</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Bridge} className='img' alt="fruits image"/>
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Fruits} className='img' alt="bridge image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard
