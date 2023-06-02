import React from "react";
import SearchBox from "../Components/MainPage/SearchBox";
import ServiceSlide from "../Components/MainPage/ServiceSlide";
import DoctorSlider from "../Components/MainPage/doctorSlider";
import Rating from "../Components/Rating";
import AlertDialogSlide from "../Components/Rating/popup";
//import StarRating from "./starRating";
export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <SearchBox></SearchBox>
        <ServiceSlide></ServiceSlide>
        <DoctorSlider></DoctorSlider>
      </div>
      {/* <Rating totalStar={5} />
      <AlertDialogSlide></AlertDialogSlide> */}
      <AlertDialogSlide></AlertDialogSlide>
    </>
  );
}
