import React from "react";
import SearchBox from "../Components/MainPage/SearchBox";
import ServiceSlide from "../Components/MainPage/ServiceSlide";
import DoctorSlider from "../Components/MainPage/doctorSlider";
export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <SearchBox></SearchBox>
        <ServiceSlide></ServiceSlide>
        <DoctorSlider></DoctorSlider>
      </div>
    </>
  );
}
