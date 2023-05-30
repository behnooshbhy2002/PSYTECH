import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorCard from "../MainPage/doctorCard";
import axios from "axios";
import "../style/doctorSlider.css";
//import images
import img1 from "../../images/zahra-etemadi.png";
import img2 from "../../images/ali-hemati.png";
import img3 from "../../images/elham-mohammadi.png";
import img4 from "../../images/maryam-amini.png";
import img5 from "../../images/maryam-montazeri.png";
import img6 from "../../images/sara-payam-shad.png";
import { useState, useEffect } from "react";
function DoctorSlider() {
  const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setDrList(json));
  // }, [url]);
  useEffect(() => {
    const { data } = axios
      .get("http://127.0.0.1:8000/accounts/resend_otp/")
      .then((response) => {
        console.log(response.data);
        setDrList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const numberOfItems = drList.length;
  return (
    <div>
      <div className="container py-4 px-4 justify-content-center rounded slider">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="p-drslider " dir="rtl">
          {" "}
          تعدادی از مشاوران
        </p>
        <hr className="serviceLine"></hr>
        <br />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          freeMode={true}
          grabCursor={true}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },

            1280: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          <div>
            {drList.slice(0, numberOfItems).map((item) => {
              return (
                <SwiperSlide>
                  <DoctorCard
                    data={{
                      imgSrc: item.picture,
                      nameDoctor: item.name,
                      title: item.spaciality,
                      score: item.rating,
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </div>
          <br />
        </Swiper>
      </div>
    </div>
  );
}
export default DoctorSlider;
