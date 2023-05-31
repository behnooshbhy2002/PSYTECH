import React from "react";
import SearchBox from "../Components/MainPage/SearchBox";
import ServiceSlide from "../Components/MainPage/ServiceSlide";
import DoctorSlider from "../Components/MainPage/doctorSlider";
import Star from "../Components/Rating/Star";

export default function Home() {
  const detail = {
    psy: [
      {
        name: "behnoosh",
        image: "behnooooo",
      },
    ],
    dis: [
      {
        id: 1,
        name: "his",
      },
      {
        id: 2,
        name: "vas",
      },
    ],
  };
  const { psy, dis } = detail;
  const objpsy = psy[0];
  for (let i = 0; i < dis.length; i++) {
    console.log(dis[i].name);
  }

  console.log(psy);
  console.log(dis);
  console.log(objpsy);
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <SearchBox></SearchBox>
        <ServiceSlide></ServiceSlide>
        <DoctorSlider></DoctorSlider>
      </div>
      <div>{psy[0].name}</div>
    </>
  );
}
