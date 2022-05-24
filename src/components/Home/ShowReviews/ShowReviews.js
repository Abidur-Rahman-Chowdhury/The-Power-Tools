import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../api/constant';
import ShowReview from './ShowReview';

const ShowReviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/reviews`)
            .then(res => res.json())
            .then(data => setUserReviews(data));
    },[userReviews])
    return (
        <div className='mt-5 mb-20'>
            <h2 className='text-center text-3xl font-bold italic'>What Our Customer Says!</h2>

            <div className='grid place-items-center gap-5  mt-5  grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>

                {
                    userReviews.map(user => <ShowReview
                    
                        key={user._id}
                        user={user}
                    ></ShowReview>)
                }
            </div>

        </div>
    );
};

export default ShowReviews;