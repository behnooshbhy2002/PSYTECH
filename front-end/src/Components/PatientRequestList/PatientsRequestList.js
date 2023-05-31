import React, { Component } from "react";
import PatientRequestCard from "./PatientRequestCard";
import { useState, useEffect } from "react";
import SideBarr from "../SideBarr/SideBarr";
import axios from "axios";
function PatientsRequestList() {
  const [drList, setDrList] = useState([]);

  //const [url, setUrl] = useState("http://localhost:3001/list");


  const fetchInfo = () => {
    return axios
    .get("http://127.0.0.1:8000/appointments/request_list/")
    .then((response) => {
      console.log(response.data);
      //doctor = response.data;
     setDrList(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    fetchInfo();
  } , []);

  const DrArr_lenght = drList?.length;
  console.log(DrArr_lenght);
  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const numberOfItems = !isShowMore ? drList.length : 10;
  numberOfItems < 10 && setIsShowMore(!isShowMore);

  return (
    <>
      <div className="Kharrr">
        <SideBarr></SideBarr>
        <div className="Kharrrchild">
          <div className="container patient-list">
            <h3 className="patient-h3" style={{ alignItems: "center" }}>
              درخواست‌های من
            </h3>
            <div className="list-div-patient">
              {drList.slice(0, numberOfItems).map((item) => {
                return (
                  <div key={item.id}>
                    <PatientRequestCard
                    data={{
                      gender: item.gender,
                      name: item.full_name,
                    }}
                  />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {isShowMore && (
              <button onClick={toggleReadMoreLess} className="showAllDrBtn">
                <span className="showAllDrBtn__show_all">
                  {isShowMore && "بیشتر"}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientsRequestList;
