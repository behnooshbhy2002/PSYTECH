import React from "react";
import "../style/PatientCard.css";
import women from "../../images/woman.png";
import men from "../../images/men.png";
// import
const PatientCard = (props) => {
  let { name, gender, id } = props.data;
  const handleViewFile = () => {
    //route to files
  };
  return (
    <div className="patient-card">
      <span className="patient-details">
        <div>
          <img
            src={gender == "2" ? women : men}
            alt="women"
            height="110"
            width="110"
            className="patient-card-img"
          />
        </div>
        <div className=" patient-card-name">
          <h4 className=" patient-card-name">{name}</h4>
        </div>
      </span>
      <div className="patient-list-buttons">
        <button
          className="patient-card-button"
          onClick={() => {
            handleViewFile(id);
          }}
        >
          مشاهده و تکمیل پرونده
        </button>
        <br></br>
        <button className="patient-card-button">ارسال نسخه به بیمار</button>
      </div>
    </div>
  );
};

export default PatientCard;
