import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import CaseInput from "../Components/componentss/CaseInput";
import CaseItem from "../Components/componentss/CaseItem";
import "../Components/style/CaseHistory.css";
import { useLocation } from "react-router-dom";
import Message from "../Components/Error&Loading/Message";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
function CaseHistory() {
  const [StatusForm, setStatusForm] = useState(false);
  const [fileId, setFileId] = useState(-1);
  const [fileList, setfileList] = useState();
  const [session_list, setSession_list] = useState();
  const [medical_recordeId, setMedical_recordeID] = useState();
  const navigate = useNavigate();

  //const location = useLocation();
  //let FileList = location.state;
  //console.log(FileList);
  //let session_list = FileList?.session_list;
  //let medical_recorde = FileList?.medical_recorde?.id;
  //console.log(session_list);

  const fetchData = () => {
    return axios.get(`http://127.0.0.1:8000/appointments/create_session/?id=${localStorage.getItem("m_id")}`)
    .then((response) => {
      console.log(response.data);
      setfileList(response.data);
        // setSession_list(fileList?.session_list);
        // setMedical_recordeID(fileList?.medical_record?.id);
        // console.log(medical_recordeId)
      //doctor = response.data;
      //setDrList(response.data);
      //console.log(drList);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  let x;
  useEffect(() => {
    x = fetchData();
  }, []);
  // FileList = [
  //   {
  //     id: 1,
  //     title: "جلسه دوم",
  //     date: "2020 / 01 / 01",
  //     content: "behnoosh was here",
  //   },
  //   {
  //     id: 5,
  //     title: "جلسه سوم",
  //     date: "2021/02/02",
  //     content: "جلسه 3 اینجا بود",
  //   },
  // ];

  const handleClick = (clicked_id) => {
    //console.log(clicked_id);
    setFileId(clicked_id);
    setStatusForm(true);
  };

  const closeHandle = () => {
    setStatusForm(false);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      {!userInfo ? (
        <div>
          <Message>دسترسی غیرمجاز</Message>
        </div>
      ) : (
        <div className="case-history" dir="rtl">
          <h1 className="text-case-history">شرح حال</h1>
          <div className="general-status-div">
            <h4 className="text-case-history">شرح کلی:</h4>
            <p className="text-case-history">
              بیمار دارای افسردگی خفیف همراه با اضطراب اجتماعی است که ریشه در
              کوکی وی دارد و....................
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
            {fileList?.map((item) => {
              return (
                <CaseItem data={item} clickhandler={handleClick}></CaseItem>
              );
            })}
          </div>
          <div>
            {StatusForm && (
              <CaseInput
                closing={closeHandle}
                fileId={fileId}
                FileList={fileList}
                // medical_recorde={medical_recordeId}
              ></CaseInput>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CaseHistory;
