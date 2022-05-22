import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Summery from '../Summary/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Summery></Summery>
        </div>
    );
};

export default Home;