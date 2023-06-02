import { React, useState, useEffect } from "react";
import "../Components/style/DoctorPageDetail.css";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DrDetails } from "../actions/doctorActions";
import { SendRequest } from "../actions/requestActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "../Components/Rating";
import Toast from "../Components/Error&Loading/toast";
function DoctorPageDetail() {
  const [psyInfo, setPsyInfo] = useState({});
  const [sickness, setSickness] = useState([]);
  const [url, setUrl] = useState("http://localhost:3002/psyInfo");
  const [anable, setEnable] = useState(true);

  const dispatch = useDispatch();
  const loc = useLocation();
  const par = loc.search;

  useEffect(() => {
    dispatch(DrDetails(par));
  }, [dispatch, par]);

  const dr = useSelector((state) => state.drDetails);
  const { error, loading, details } = dr;

  let image, name, address, exprience, rate, id, medical, phone;
  let diseaseArr = [];

  console.log(Array.isArray(details));
  console.log("out");
  if (!Array.isArray(details)) {
    console.log("gol is here");
    const { psychologist, disease } = details;
    if (Array.isArray(psychologist)) {
      console.log(psychologist[0]);
      image = psychologist[0].image;
      name = psychologist[0].full_name;
      address = psychologist[0].address;
      exprience = psychologist[0].exprience;
      rate = psychologist[0].rate;
      medical = psychologist[0].medical_number;
      phone = psychologist[0].phone_number;
      id = psychologist[0].id;
      //console.log(image , name)
    }
    if (Array.isArray(disease)) {
      diseaseArr = disease;
      console.log(diseaseArr);
    }
  }

  const [open, setOpen] = useState(false);
  const handleCommentButton = () => {};
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function addItem(add_item) {
    if (add_item) {
      // parse existing storage key or string representation of empty array
      var existingEntries = JSON.parse(
        localStorage.getItem("list_items") || "[]"
      );

      // Add item if it's not already in the array, then store array again
      if (!existingEntries.includes(add_item)) {
        existingEntries.push(add_item);
        localStorage.setItem("list_items", JSON.stringify(existingEntries));
      } else {
        // or tell user it's already there
        console.log(add_item + " already exists");
      }
    }
  }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handleRequest = (pk_dr) => {
    console.log(userInfo?.id, pk_dr);
    dispatch(SendRequest(userInfo?.id, pk_dr));
  };

  const requestStatus = useSelector((state) => state.sendRequest);
  const { reqResult } = requestStatus;
  console.log(reqResult?.data);
  //addItem(reqResult?.data);

  // if (reqResult?.msg == "successfuly") {
  //   return (
  //     <>
  //       <Toast
  //         userFull={name}
  //         messageType={true}
  //         buttonclicked={buttonclicked}
  //       ></Toast>
  //     </>
  //   );
  // }

  //let en = true;

  // let l = JSON.parse(localStorage.getItem("list_items"));
  // console.log(Array.isArray(l));
  // l.map((item) => {
  //   console.log(item);
  //   if (item == id) {
  //     console.log(item);
  //     en = false;
  //     setEnable(false);
  //   }
  // });

  //rating
  const [stars, setStars] = useState(5);
  const [hoverd, setHovered] = useState(-1);
  const [rated, setRated] = useState(-1);

  const handleSetRated = (value) => {
    setRated(value);
  };
  const handleSetHovered = (value) => {
    setHovered(value);
  };

  const handleReset = () => {
    setRated(-1);
    setHovered(-1);
  };

  const handleSubmitRate = (value) => {
    //console.log(id)
    const { data } = axios
      .post("http://127.0.0.1:8000/appointments/rating/", {
        pk: id,
        rate: value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //console.log(Object.keys(details));
  // console.log(psyInfo);
  //const x = psyInfo['0'];
  //console.log(x)
  // const data = details.json()
  //const data = JSON.stringify(details)
  //const data2 = JSON.parse(data)
  //const {dieseas} = data2
  // const d2 = JSON.parse( JSON.stringify(disease))
  //console.log( typeof JSON.stringify(disease))
  //const {khar} = psychologist

  //const x = psychologist
  // console.log(x)
  // console.log(x.image)

  // setPsyInfo(psychologist[0]);
  // setSickness(disease);

  // const item = psychologist;
  // console.log(item[0].full_name);

  return (
    <div key={id}>
      <div className="detail-doctor-top-page">
        <div className="main-datail-doctor ">
          <img
            src={image}
            alt=""
            className="img-fluid mx-auto d-block rounded-circle main-detail-doctor-img"
          />
          <div className="main-detail-doctor-text">
            <h4>{name}</h4>
            <h5>
              میزان تجربه:
              {exprience}
            </h5>
            <p> شماره نظام پزشکی: {medical}</p>
          </div>
        </div>

        <div
          className="request-doctor-detail"
          style={{ backgroundColor: "white" }}
        >
          <h5 className="loc-h5-text">آدرس مطب و شماره تماس</h5>
          <div className="loc-div">
            <LocationOnIcon className="loc-icon"></LocationOnIcon>
            {address}
          </div>
          <div className="loc-div-buttom loc-div">
            <LocalPhoneIcon className="loc-icon loc-icon-phone"></LocalPhoneIcon>
            {phone}
          </div>
        </div>
      </div>

      <div className="detail-docor-buttom-page">
        <div className="detail-docor-buttom-page-right">
          <h4 className="main-detail-doctor-about">درباره پزشک</h4>
          <div className="bio-doctor">
            <div className="bio-doctor-text">
              <h5>بیوگرافی:</h5>

              {diseaseArr.map((item) => {
                return (
                  <>
                    <div className="bio-item-doctor">
                      <CheckBoxIcon style={{ color: "green" }}></CheckBoxIcon>
                      <p>{item.title}</p>
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
              در صورتی که توسط دکتر ویزیت شده اید و تمایل به دریافت نسخه خود
              دارید، نخست باید برای پزشک مورد نظر خود درخواست ثبت کنید.
            </p>
            {enable ? (
              <button
                className="detail-doctor-req-button"
                onClick={() => {
                  console.log(id);
                  handleRequest(id);
                  handleClose();
                }}
              >
                ثبت درخواست برای {name}
              </button>
            ) : (
              <button className="detail-doctor-req-button-disable">
                ثبت درخواست برای {name} انجام شده است
              </button>
            )}
          </div>

          <div
            className="detail-doctor-req detail-doctor-rate "
            style={{
              backgroundColor: "white",
            }}
          >
            <h5 className="loc-h5-text text-rate-top">میزان رضایت از پزشک</h5>

            <div className="rate-div-deatail-doc">
              <i
                className="mdi mdi-star f-19"
                style={{ marginLeft: "2px" }}
              ></i>
              {rate}
            </div>

            <button
              className="detail-doctor-req-button"
              onClick={handleClickOpen}
            >
              {" "}
              رای دادن به {name}
            </button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"میزان رضایت خود را مشخص کنید"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <div className="star-container">
                    <div>
                      {[...Array(stars)].map((each, i) => (
                        <span
                          key={i}
                          onMouseOver={() => {
                            handleSetHovered(i);
                          }}
                          onMouseOut={() => {
                            handleSetHovered(rated);
                          }}
                          onClick={() => {
                            handleSetRated(i + 1);
                            console.log(i + 1);
                          }}
                          className={i <= hoverd ? "hovered" : ""}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <button onClick={() => handleReset()}>Reset Rating</button>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button
                  onClick={() => {
                    console.log(rated);
                    handleSubmitRate(rated);
                  }}
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorPageDetail;
