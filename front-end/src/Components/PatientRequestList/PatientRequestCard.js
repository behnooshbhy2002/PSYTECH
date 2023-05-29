import React from 'react';
import '../style/PatientCard.css'
import women from '../../images/woman.png'
import men from '../../images/men.png'
const PatientRequestCard = (props) => {
  let{gender,name}=props.data;
  return (
    <div className="patient-card">
      <span className='patient-details'>
      <div >
        <img src={gender=='2' ? women : men} alt="women" height="110" width="110" className='patient-card-img'/>
      </div>
      <div className=" patient-card-name">
        <h4 className=' patient-card-name'>{name}</h4>
      </div>
      </span>
      <div className='patient-list-buttons'>
        <button className='patient-card-button'> 
        پذیرش درخواست </button>
        <br>
        </br>
        <button className='patient-card-button not-accept'>عدم پذیرش درخواست</button>
      </div>
    </div>
  );
}

export default PatientRequestCard;