import PPanelDoctorCard from "./PPanelDoctorCard";
import React, { Component } from "react";
import { useState, useEffect } from "react";

import SideBarrPatient from "./SideBarrPatient";
function DoctorList() {
     const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
        .then((json) => {
            setDrList(json)
            console.log(json)
        })
  }, [url]);
    
  const DrArr_lenght = drList.length;
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
        <SideBarrPatient></SideBarrPatient>
        <div className="Kharrrchild">
          <div className=" ppanel-list">
            <h3 className="ppanel-list-h3" style={{ alignItems: "center" }}>
              روانشناس های من
            </h3>
            <div className="list-div-ppanel">
              {drList.slice(0, numberOfItems).map((item) => {
                  return (
                  <PPanelDoctorCard className='card-in-list-ppanel'
                    data={{
                      img: item.picture,
                      name: item.name,
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
    )
}
export default DoctorList;