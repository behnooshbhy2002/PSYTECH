import PPanelDoctorCard from "./PPanelDoctorCard";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import SideBarrPatient from "./SideBarrPatient";
function DoctorList() {
  const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setDrList(json);
  //       console.log(json);
  //     });
  // }, [url]);
  const fetchInfo = (par) => {
    return axios
      .get(`http://127.0.0.1:8000/appointments/doctor_list/${par}`)
      .then((response) => {
        console.log(response);
        //doctor = response.data;
        setDrList(response.data);
        console.log(drList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const id = userInfo?.id;
  const par = `?id=${id}`;
  useEffect(() => {
    fetchInfo(par);
  }, [par]);

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
              {drList?.slice(0, numberOfItems)?.map((item) => {
                return (
                  <PPanelDoctorCard
                    className="card-in-list-ppanel"
                    data={{
                      id: item.id,
                      img: item.picture,
                      name: item.name,
                      p_id: id,
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
export default DoctorList;
