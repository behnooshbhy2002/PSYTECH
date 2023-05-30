import { React, useState, useEffect } from "react";
import "../Components/style/DoctorPageDetail.css";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";
function DoctorPageDetail() {
  const [psyInfo, setPsyInfo] = useState([]);
  const [url, setUrl] = useState("http://localhost:3002/psyInfo");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPsyInfo(json));
  // }, [url]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.example.com/user-profile", {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      });
      setPsyInfo(response.data);
    };
  }, []);

  //console.log(url);
  const numberOfItems = psyInfo ? psyInfo.length : 0;
  return (
    <>
      {psyInfo.slice(0, 2).map((item) => {
        return (
          <>
            <div className="detail-doctor-top-page">
              <div className="main-datail-doctor ">
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid mx-auto d-block rounded-circle main-detail-doctor-img"
                />
                <div className="main-detail-doctor-text">
                  <h4>{item.full_name}</h4>
                  <h5>
                    میزان تجربه:
                    {item.experience}
                  </h5>
                  <p> شماره نظام پزشکی: {item.medical_number}</p>
                </div>
              </div>

              <div
                className="request-doctor-detail"
                style={{ backgroundColor: "white" }}
              >
                <h5 className="loc-h5-text">آدرس مطب و شماره تماس</h5>
                <div className="loc-div">
                  <LocationOnIcon className="loc-icon"></LocationOnIcon>
                  {item.address}
                </div>
                <div className="loc-div-buttom loc-div">
                  <LocalPhoneIcon className="loc-icon loc-icon-phone"></LocalPhoneIcon>
                  {item.phone_number}
                </div>
              </div>
            </div>

            <div className="detail-docor-buttom-page">
              <div className="detail-docor-buttom-page-right">
                <h4 className="main-detail-doctor-about">درباره پزشک</h4>
                <div className="bio-doctor">
                  <div className="bio-doctor-text">
                    <h5>بیوگرافی:</h5>

                    {item.diseases_list.map((item) => {
                      return (
                        <>
                          <div className="bio-item-doctor">
                            <CheckBoxIcon
                              style={{ color: "green" }}
                            ></CheckBoxIcon>
                            <p>{item}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="detail-docor-buttom-page-left">
                <h4 className="main-detail-doctor-about"> ثبت درخواست </h4>
                <div
                  className="detail-doctor-req"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <p className="detail-doctor-req-text">
                    در صورتی که توسط دکتر ویزیت شده اید و تمایل به دریافت نسخه
                    خود دارید، نخست باید برای پزشک مورد نظر خود درخواست ثبت
                    کنید.
                  </p>
                  <button className="detail-doctor-req-button">
                    ثبت درخواست برای {item.full_name}
                  </button>
                </div>

                {/* <h5>ldcjl</h5> */}
                <div
                  className="detail-doctor-req detail-doctor-rate "
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <h5 className="loc-h5-text text-rate-top">
                    میزان رضایت از پزشک
                  </h5>
                  {/* <div className=""> */}

                  <div className="rate-div-deatail-doc">
                    <i
                      className="mdi mdi-star f-19"
                      style={{ marginLeft: "2px" }}
                    ></i>

                    {item.rating}
                  </div>

                  {/* <h5>رای دادن</h5> */}

                  <button className="detail-doctor-req-button">
                    {" "}
                    رای دادن به {item.full_name}
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default DoctorPageDetail;
