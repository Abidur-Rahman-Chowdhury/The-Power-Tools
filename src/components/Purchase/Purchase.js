import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className='mt-20 text-4xl'>ID { id}</h2>
        </div>
    );
};

export default Purchase;