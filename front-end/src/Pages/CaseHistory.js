import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import CaseInput from "../Components/componentss/CaseInput";
import CaseItem from "../Components/componentss/CaseItem";
import "../Components/style/CaseHistory.css";

function CaseHistory() {
  const [StatusForm, setStatusForm] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setStatusForm(true);
  };

  const closeHandle = () => {
    setStatusForm(false);
  };

  return (
    <div className="case-history" dir="rtl">
      <h1 className="text-case-history">شرح حال</h1>
      <div className="general-status-div">
        <h4 className="text-case-history">شرح کلی:</h4>
        <p className="text-case-history">
          بیمار دارای افسردگی خفیف همراه با اضطراب اجتماعی است که ریشه در کوکی
          وی دارد و....................
        </p>
      </div>
      <div className="case-list-wrapper" dir="rtl">
        <div className="caseItem-wrapper">
          <IoAddCircle
            id="icon-add-caseItem"
            size={70}
            color="#a8a8a9"
            onClick={handleClick}
          ></IoAddCircle>
        </div>
        <CaseItem clickhandler={handleClick}></CaseItem>
      </div>
      <div>{StatusForm && <CaseInput closing={closeHandle}></CaseInput>}</div>
    </div>
  );
}

export default CaseHistory;
