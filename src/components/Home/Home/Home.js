import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import ShowProducts from '../ShowProducts/ShowProducts';
import ShowReviews from '../ShowReviews/ShowReviews';
import Summery from '../Summary/Summery';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { baseUrl } from '../../../api/constant';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/tools`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Summery></Summery>
            {!products ? <LoadingSpinner /> :<ShowProducts></ShowProducts>}
            <ShowReviews></ShowReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;