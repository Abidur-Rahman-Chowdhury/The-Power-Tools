import React from 'react';
import reviewImg from '../../../images/review/review.png';

const ShowReview = ({ user }) => {
  const { name, review, ratings } = user;
  return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl ">
        <div class="card-body">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
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
