import React from 'react';
import women from '../../images/woman.png'
import '../style/PatientCard.css'

const PatientCard = () => {
  let gender="women";
  return (
    <div className="patient-card">
          <div className=" patient-card-img">
        <img src={women} alt="women" height="110" width="110" className='patient-card-img'/>
      </div>
      <div className=" patient-card-name">
        <h4 className='patient-card-name'>پناه راستی</h4>
      </div>
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