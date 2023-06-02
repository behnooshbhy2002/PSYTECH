import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";
import "../style/doctorCard.css";
const DoctorCard = (props) => {
  let { imgSrc, nameDoctor, title, score } = props.data;
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
      <Button className="w-90 button-border-radius" variant="success" id="test">
        مشاهده و رزرو نوبت پزشک
      </Button>
    </Card>
  );
};
export default DoctorCard;
