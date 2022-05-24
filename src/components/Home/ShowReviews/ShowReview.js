import React from 'react';
import reviewImg from '../../../images/review/review.png';

const ShowReview = ({ user }) => {
  const { name, review, ratings } = user;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={reviewImg} alt='' />
            </div>
                  </div>
                  <h3 className='text-center text-xl font-bold'>{ name}</h3>
                  <h3 className='text-center text-xl '>{ review}</h3>
                  <h3 className='text-center text-xl '><b>Ratings:</b> { ratings}</h3>
        </div>
      </div>
    </>
  );
};

export default ShowReview;
