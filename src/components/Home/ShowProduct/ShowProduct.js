import React, { useEffect, useState } from 'react';


const ShowProduct = () => {
    const [data, setData] = useState([]);
   
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
   
    return (
        <div className='mt-10'>
            <h1 className='text-center text-3xl'>{ data.length}</h1>
        </div>
    );
};

export default ShowProduct;