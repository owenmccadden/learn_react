import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/PricingCards'
import Monkeys from '../assets/monkeys.jpg';


const Pricing = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage
                heading="Pricing"
                text="Choose your trip:"
                background_img={Monkeys}
            />  
            <PricingCards/>
            <Footer/>
        </div>
    )
}

export default Pricing
