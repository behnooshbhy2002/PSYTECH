import React from 'react';
import '../style/PatientCard.css'
const PatientCard = (props) => {
  let{image,name}=props.data;
  return (
    <div className="patient-card">
      <span className='col-md-9 patient-details'>
      <div >
        <img src={image} alt="women" height="110" width="110" className='patient-card-img'/>
      </div>
      <div className=" patient-card-name">
        <h4 className=' patient-card-name'>{name}</h4>
      </div>
      </span>
      <div>
        <button className='patient-card-button'> 
        مشاهده و تکمیل پرونده</button>
        <br>
        </br>
        <button className='patient-card-button'>ارسال نسخه به بیمار</button>
      </div>
    </div>
  );
}

export default PatientCard;