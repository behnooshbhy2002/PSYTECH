import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import CaseInput from "../Components/componentss/CaseInput";
import CaseItem from "../Components/componentss/CaseItem";
import "../Components/style/CaseHistory.css";
import { useLocation } from "react-router-dom";

function CaseHistory() {
  const [StatusForm, setStatusForm] = useState(false);
  const [fileId, setFileId] = useState(-1);
  const navigate = useNavigate();

  const location = useLocation();
  let FileList = location.state?.data;
  FileList = [
    {
      id: 1,
      title: "جلسه دوم",
      date: "2020 / 01 / 01",
      content: "behnoosh was here",
    },
    {
      id: 5,
      title: "جلسه سوم",
      date: "2021/02/02",
      content: "جلسه 3 اینجا بود",
    },
  ];

  const handleClick = (clicked_id) => {
    //console.log(clicked_id);
    setFileId(clicked_id);
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
            onClick={() => {
              //setFileId(false);
              handleClick(-1);
            }}
          ></IoAddCircle>
        </div>
        {FileList?.map((item) => {
          return <CaseItem data={item} clickhandler={handleClick}></CaseItem>;
        })}
      </div>
      <div>
        {StatusForm && (
          <CaseInput
            closing={closeHandle}
            fileId={fileId}
            FileList={FileList}
          ></CaseInput>
        )}
      </div>
    </div>
  );
}

export default CaseHistory;
