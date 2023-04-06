import React from 'react';

import personal from '../images/personal.svg';
import love from '../images/In love-pana.svg';
import family from '../images/family.svg';
import kid from '../images/kids.svg';
import study from '../images/study.svg';

import './ServisSlide.css';

const ServiceSlide = () => {
  return (

    <div className='all' dir='rtl'>
        <li className='sec'><img  src={kid}/><h6>rrrr</h6></li>
        <li className='sec'><img  src={study}/><h6>rrrr</h6></li>
        <li className='sec'><img  src={family}/><h6>gggg</h6></li>
        <li className='sec'><img  src={love}/><h6>pppp</h6></li>
        <li className='sec'><img  src={personal}/><h6>ooooo</h6></li>
    </div>
    
  )
}

export default ServiceSlide