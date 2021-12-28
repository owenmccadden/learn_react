import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Walkway from '../assets/walkway.jpeg';
import Form from '../components/Form';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage
                heading="Contact"
                text="Get in touch"
                background_img={Walkway}
            />
            <Form/>
            <Footer/>
        </div>
    )
}

export default Contact
