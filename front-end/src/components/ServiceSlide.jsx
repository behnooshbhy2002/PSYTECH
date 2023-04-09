
import React from 'react';
import personal from '../images/personal.png'
import family from '../images/family.png'
import kids from '../images/kids.png'
import love from '../images/love.png'
import study from '../images/study.png'

import './ServisSlide.css';

const ServiceSlide = () => {
  return (
    <div className='serviceDiv' >
    <h4 className='serviceTitle' dir='rtl'>خدمات سایت</h4>
    <hr className='serviceLine'></hr>
    <div className='services' dir='rtl'>
        
        <li className='sec'><img  src={personal}/><h6>فردی</h6></li>
        <li className='sec'><img  src={family}/><h6>خانواده</h6></li>
        <li className='sec'><img  src={kids}/><h6>کودک</h6></li>
        <li className='sec'><img  src={love}/><h6>ازدواج</h6></li>
        <li className='sec'><img  src={study}/><h6>تحصیلی</h6></li>
    </div>
    </div>
    
  )
}

export default ServiceSlide

