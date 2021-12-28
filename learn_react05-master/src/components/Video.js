import React from 'react'
import { Link } from 'react-router-dom';
import "./VideoStyles.css"

import waterfallVideo from '../assets/waterfall.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id="video">
                <source src={waterfallVideo} type='video/mp4'/>
            </video>
            <div className='content'>
                <div className='content_container'>
                <h1>Travel to Costa Rica!</h1>
                <p>See the sites of Costa Rica!</p>
            <div>
                <Link to='/explore' className='btn'>Explore</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Video
