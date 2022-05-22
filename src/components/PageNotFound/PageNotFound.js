import React from 'react';
import notfound from '../../images/notfound/404.jpg'
const PageNotFound = () => {
    return (
        <div className='w-full h-full mt-10'>
           <img className='w-full h-[88vh]' src={notfound} alt="page not found"  />
        </div>
    );
};

export default PageNotFound;