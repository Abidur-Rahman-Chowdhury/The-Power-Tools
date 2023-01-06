import React from 'react';
import { useNavigate } from 'react-router-dom';
// You can also use <link> for styles


const ShowProduct = ({ tools }) => {
    const { _id, name, img, des, minimum, available, price } = tools;
  const navigate = useNavigate();

  return (

   
      <div className="card card-compact max-w-4/5   bg-base-100 p-5 shadow-lg border" >
      <figure>
        <img className='max-w-[200px] max-h-[200px] img-lazy'
          src={img}
          alt={name}
          loading="lazy" />
      </figure>
      <div className="card-body">
              <h2 className='text-center text-2xl font-bold '>{name}</h2>
              <p className='text-justify text-lg mt-[-10px]'>{ des}</p>
              <p className='text-center text-lg mt-[-10px]'><b>Minimum Quantity:</b> { minimum}</p>
              <p className='text-center text-lg mt-[-10px]'><b>Available Quantity:</b> { available}</p>
              <p className='text-center text-lg mt-[-10px]'><b>Price:</b> ${ price}</p>
        <div className="card-actions justify-center mt-[-5px]">
          <button className="btn btn-primary" onClick={()=>navigate(`/purchase/${_id}`)}>Purchase Now</button>
        </div>
      </div>
    </div>
  
    
  );
};

export default ShowProduct;
