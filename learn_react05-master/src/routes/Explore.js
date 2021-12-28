import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import View from '../assets/view.jpeg';
import ExploreCard from '../components/ExploreCard';


const Explore = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage
                heading="Explore"
                text="Check out the top attractions!"
                background_img={View}
            />
            <ExploreCard/>
            <Footer/>
        </div>
    )
}

export default Explore
