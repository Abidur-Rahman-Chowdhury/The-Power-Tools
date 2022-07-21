import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/banner/1.jpg';
import img2 from '../../../images/banner/2.jpg';
import img3 from '../../../images/banner/3.jpg';
const Banner = () => {
  return (
    <Carousel showArrows={true} className='w-[90%] mx-auto mt-[81px]' autoPlay infiniteLoop>
    <div className='h-[700px]'>
        <img src={img1} className='h-[100%]' alt="" />
        <p className="legend">Slide 1</p>
    </div>
    <div className='h-[700px]'>
        <img src={img2} className='h-[100%]' alt="" />
        <p className="legend">Slide 2</p>
    </div>
    <div className='h-[700px]'>
        <img src={img3} className='h-[100%]' alt="" />
        <p className="legend">Slide 3</p>
    </div>
  
   
</Carousel>
  );
};

export default Banner;
