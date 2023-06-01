import React from "react";
import "../style/PatientCard.css";
import women from "../../images/woman.png";
import men from "../../images/men.png";
import axios from "axios";
const PatientRequestCard = (props) => {
  let { id, gender, name } = props.data;
  //console.log(props);
  const handleAccept = (id) => {
    const { data } = axios
      .post(`http://127.0.0.1:8000/appointments/request_list/`, {
        pk: id,
        accept_status: true,
      })
      .then((response) => {
        console.log(response);
        //setDrList(response.data);
        //console.log(drList)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReject = (id) => {
    const { data } = axios
      .post(`http://127.0.0.1:8000/appointments/request_list/`, {
        pk: id,
        accept_status: false,
      })
      .then((response) => {
        console.log(response);
        //setDrList(response.data);
        //console.log(drList)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="patient-card">
      <span className="patient-details">
        <div>
          <img
            src={gender == "F" ? women : men}
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
            handleAccept(id);
          }}
        >
          پذیرش درخواست{" "}
        </button>
        <br></br>
        <button
          className="patient-card-button not-accept"
          onClick={() => {
            handleReject(id);
          }}
        >
          عدم پذیرش درخواست
        </button>
      </div>
    </div>
  );
};

export default PatientRequestCard;
