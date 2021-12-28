import React, { Component } from 'react'
import './HeroImageStyles.css';

class HeroImage extends Component {
    render() {
        return (
            <div className='hero-img'
                style={{background: `url(${this.props.background_img}) no-repeat center center/cover`}}
            >
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImage
