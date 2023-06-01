import PPanelDoctorCard from "./PPanelDoctorCard";
import PPanelReqCard from './PPanelReqCard'
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
        <SideBarrPatient></SideBarrPatient>
        <div className="Kharrrchild">
          <div className=" ppanel-list">
            <h3 className="ppanel-list-h3" style={{ alignItems: "center" }}>
              درخواست های من
            </h3>
            <div className="list-div-ppanel">
              {drList.slice(0, numberOfItems).map((item) => {
                  return (
                  <PPanelReqCard className='card-in-list-ppanel'
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
    )
}
export default DoctorList;