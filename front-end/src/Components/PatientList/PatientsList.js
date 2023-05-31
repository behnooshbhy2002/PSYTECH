import React, { Component } from "react";
import PatientCard from "./PatientCard";
import { useState, useEffect } from "react";
import SideBarr from "../SideBarr/SideBarr";
function PatientsList() {
  const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setDrList(json));
  }, [url]);

  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMoreLess = () => {
    setIsShowMore(false);
  };

  let numberOfItems;
  if (drList) {
    const DrArr_lenght = drList.length;
    numberOfItems = !isShowMore ? DrArr_lenght : 10;
  }

  return (
    <>
      <div className="Kharrr">
        <SideBarr></SideBarr>
        <div className="Kharrrchild">
          <div className="container patient-list">
            <h3 className="patient-h3" style={{ alignItems: "center" }}>
              بیمار‌های من
            </h3>
            <div className="list-div-patient">
              {drList.slice(0, numberOfItems).map((item) => {
                return (
                  <PatientCard
                    data={{
                      name: item.name,
                      gender: item.gender,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div>
            {isShowMore && drList.length > 10 && (
              <button onClick={toggleReadMoreLess} className="showAllDrBtn">
                <span className="showAllDrBtn__show_all_text">
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

export default PatientsList;
