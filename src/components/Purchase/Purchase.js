import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../api/constant';

const Purchase = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/tools/${id}`, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
        })
    },[])
    return (
        <div>
            <h2 className='mt-20 text-4xl'>ID { products.length}</h2>
        </div>
    );
};

export default Purchase;