import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import ShowProducts from '../ShowProducts/ShowProducts';
import Summery from '../Summary/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Summery></Summery>
            <ShowProducts></ShowProducts>
            <Contact></Contact>
        </div>
    );
};

export default Home;