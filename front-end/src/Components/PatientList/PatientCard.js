import { React, useState } from "react";
import "../style/PatientCard.css";
import women from "../../images/woman.png";
import men from "../../images/men.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

// import
const PatientCard = (props) => {
  let { name, gender, id } = props.data;
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dr_id = userInfo?.id;

  const [session, setSession] = useState({});

  const handleViewFile = (p_id) => {
    localStorage.setItem("dr_id", dr_id);
    localStorage.setItem("p_id", p_id);
    axios
      .post(`http://127.0.0.1:8000/appointments/medical_recorder/`, {
        id_patient: localStorage.getItem("p_id"),
        id_psychologist: localStorage.getItem("dr_id"),
      })
      .then((response) => {
        //setSession(response.data);
        //setfileList(response.data);
        //setSession_list(fileList?.session_list);
        //setMedical_recordeID(fileList?.medical_record?.id);
        //console.log(medical_recordeId)
        console.log(response.data);
        localStorage.setItem("m_id", response.data?.medical_record?.id);
        navigate("/CaseHistory");
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleViewPrescription = (p_id) => {
    localStorage.setItem("dr_id", dr_id);
    localStorage.setItem("p_id", p_id);
    axios
      .post(`http://127.0.0.1:8000/appointments/prescription_list/`, {
        id_patient: localStorage.getItem("p_id"),
        id_psychologist: localStorage.getItem("dr_id"),
      })
      .then((response) => {
        //setSession(response.data);
        //console.log(response.data);
        console.log(response.data);
        localStorage.setItem("page_id", response.data?.prescription_page?.pk);
        navigate("/DrRecipeHistory");
        //return response
      })
      .catch((error) => {
        console.log(error);
      });

    //  console.log(session)
    // const toComponentB = () => {
    //   navigate("/RecipeHistory", { state: data });
    // };
    //history("/RecipeHistory");
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
            handleViewFile(id);
          }}
        >
          مشاهده و تکمیل پرونده
        </button>
        <br></br>
        <button
          className="patient-card-button"
          onClick={() => {
            handleViewPrescription(id);
          }}
        >
          ارسال نسخه به بیمار
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
