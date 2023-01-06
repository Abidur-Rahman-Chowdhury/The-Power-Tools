import React from 'react';
import deals from '../../../images/business/deals.png';
import revenue from '../../../images/business/financial data.png';
import project from '../../../images/business/project completed.png';

const Summery = () => {
    return (
        <>
        <div className="text-center mb-10" >
        <h2 className="text-3xl italic text-center font-bold border-b-2 inline-block " >
          Business Summary
        </h2>
      </div>
        <div className='grid gap-y-5 w-[70%] lg:gap-x-80  xl:gap-x-40 md:gap-x-40 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-10'>
      <div className="card w-80  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={deals}
            alt="deals"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Make Deals</h2>
          <p className='text-5xl'>75+</p>
          
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={revenue}
            alt="revenue"
            className="rounded-xl max-h-[187px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Earns Revenue</h2>
          <p className='text-5xl'>500 M+</p>
          
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={project}
            alt="project"
            className="rounded-xl max-h-[187px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Project Completed</h2>
          <p className='text-5xl'> 120 +</p>
          
        </div>
      </div>
    </div>
        
        </>
  );
};

export default Summery;
