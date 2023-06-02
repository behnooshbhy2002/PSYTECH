import React, { Component } from "react";
import PatientCard from "./PatientCard";
import { useState, useEffect } from "react";
import SideBarr from "../SideBarr/SideBarr";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "../Error&Loading/Message";
function PatientsList() {
  const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  const dispatch = useDispatch();
  const history = useNavigate();

  const fetchInfo = (par) => {
    return axios
      .get(`http://127.0.0.1:8000/appointments//${par}`)
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

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setDrList(json));
  // }, [url]);

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
      {!userInfo ? (
        <div>
          <Message>دسترسی غیرمجاز</Message>
        </div>
      ) : (
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
                        name: item.full_name,
                        gender: item.gender,
                        id: item.id,
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
      )}
    </>
  );
}

export default PatientsList;
