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

function DoctorPageDetail() {
  const [psyInfo, setPsyInfo] = useState({});
  const [url, setUrl] = useState("http://localhost:3002/psyInfo");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPsyInfo(json));
  // }, [url]);

  
  const dispatch = useDispatch();
  const loc = useLocation();
  const par = loc.search;

  //console.log(par);
  useEffect(() => {
    dispatch(DrDetails(par));
  }, [dispatch, par]);

  const dr = useSelector((state) => state.drDetails);
  const { error, loading, details } = dr;
  //console.log(error)

const {psychologist , disease} = details;
//console.log(details);
//console.log(Object.keys(details));
console.log(disease);
console.log(psychologist);

const item = psychologist;
//console.log(item.full_name)
  // const kharrr = [1 , 2]
  // const numberOfItems = psyInfo ? psyInfo.length : 0;
  return (
    <>
    <div>{disease}</div>
    </>
  );
}

export default DoctorPageDetail;
