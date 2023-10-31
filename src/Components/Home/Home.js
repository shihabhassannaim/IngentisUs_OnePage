import React from 'react';
import Header from '../Header/Header';
import Advertise from '../Advertise/Advertise';
import CoreFeatures from '../Advertise/CoreFeatures';
import CoreFeaturesAnother from '../Advertise/CoreFeaturesAnother';
import MoreAbout from '../Advertise/MoreAbout';
import Testimunial from '../Testimunial/Testimunial';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Advertise />
            <CoreFeatures />
            <CoreFeaturesAnother />
            <MoreAbout />
            <Testimunial />
            <About />
        </div>
    );
};

export default Home;