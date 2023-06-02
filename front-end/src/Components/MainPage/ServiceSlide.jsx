import React from "react";
import personal from "../../images/personal.png";
import family from "../../images/family.png";
import kids from "../../images/kids.png";
import love from "../../images/love.png";
import study from "../../images/study.png";
import "../style/ServisSlide.css";
import { useNavigate } from "react-router-dom";
const ServiceSlide = () => {
  const history = useNavigate();

  const handleSpeacial = (spe) => {
    //history("/PsycologistList");
    //removeQuery("specialist", history);
    addQuery("specialist", spe, history);
  };
  const addQuery = (key, value, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.set(key, value);
    url({
      pathname: "/PsycologistList",
      search: searchParams.toString(),
    });
  };

  const removeQuery = (key, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.delete(key);
    url({
      pathname: "/PsycologistList",
      search: searchParams.toString(),
    });
  };

  return (
    <div className="serviceDiv">
      <h4 className="serviceTitle" dir="rtl">
        خدمات سایت
      </h4>
      <hr className="serviceLine"></hr>
      <div className="services" dir="rtl">
        <li
          className="sec"
          onClick={() => {
            handleSpeacial("فردی");
          }}
        >
          <img src={personal} />
          <h6>فردی</h6>
        </li>
        <li
          className="sec"
          onClick={() => {
            handleSpeacial("خانواده");
          }}
        >
          <img src={family} />
          <h6>خانواده</h6>
        </li>
        <li
          className="sec"
          onClick={() => {
            handleSpeacial("کودک");
          }}
        >
          <img src={kids} />
          <h6>کودک</h6>
        </li>
        <li
          className="sec"
          onClick={() => {
            handleSpeacial("ازدواج");
          }}
        >
          <img src={love} />
          <h6>ازدواج</h6>
        </li>
        <li
          className="sec"
          onClick={() => {
            handleSpeacial("تحصیلی");
          }}
        >
          <img src={study} />
          <h6>تحصیلی</h6>
        </li>
      </div>
    </div>
  );
};

export default ServiceSlide;
