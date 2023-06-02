import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../../actions/doctorActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";
import "../style/doctorCard.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
const DoctorCard = (props) => {
  let { imgSrc, nameDoctor, title, score, id } = props.data;
  const handleDetailButton = (p_id) => {
    console.log(p_id);
    //history(`/PsycologistProfile`);
    addQuery("id", p_id, history);
  };

  const history = useNavigate();

  const addQuery = (key, value, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.set(key, value);
    url({
      pathname: "/PsycologistProfile",
      search: searchParams.toString(),
    });
  };

  const dispatch = useDispatch();
  const loc = useLocation();
  const par = loc.search;

  useEffect(() => {
    dispatch(listDoctors(par));
  }, [dispatch, par]);
  return (
    <Card className="p-0 overflow-hidden h-300 card-class ">
      <div className=" overflow-hidden rounded-30 p-0 bg-dark">
        <CardImg className="card-img" src={imgSrc}></CardImg>
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-10">{nameDoctor}</Card.Title>
        <p className="display-10">{title}</p>
        <div className="doctor-card-platform-info-slider ">
          <span className="doctor-card-rating-slider" dir="rtl">
            <i className="mdi mdi-star f-19"></i>
            {score}
          </span>
        </div>
      </Card.Body>
      <Button
        className="w-90 button-border-radius"
        variant="success"
        id="test"
        onClick={() => {
          handleDetailButton(id);
        }}
      >
        مشاهده پزشک
      </Button>
    </Card>
  );
};
export default DoctorCard;
