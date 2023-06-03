import React from "react";
import { useState, useEffect } from "react";
import "../style/DrEditProfile.css";
import profilepic from "../../images/men.png";
import SideBarrPatient from "./SideBarrPatient";
import Message from "../Error&Loading/Message";
import { useSelector } from "react-redux";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  FormLabel,
  Col,
  Row,
} from "react-bootstrap";

function EditProfile() {
  const [user, setUser] = useState({
    gender: "",
    phone: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  // const handleInputChange = (event) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // }
  const handleSubmit = (event) => {
    if (user.password != confirmPassword) {
      console.log("Error");
    } else {
      const id = JSON.parse(localStorage.key(0));
      console.log(id);
      event.preventDefault();
      fetch(`http://127.0.0.1:8000/appointments/patient_profile/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log(id);
    fetch(`http://127.0.0.1:8000/appointments/psychologist_profile/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User profile successfully editted!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields correctly</h1>
      </div>
    );
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return !userInfo ? (
    <div>
      <Message>دسترسی غیرمجاز</Message>
    </div>
  ) : (
    <>
      <div className="Kharrr">
        <SideBarrPatient></SideBarrPatient>
        <div className="Kharrrchild">
          <div className="Editprofile-div" dir="rtl">
            <img id="edit-pic" src={profilepic} alt=""></img>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Label htmlFor="inputPassword5">رمز جدید:</Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="password"
                    placeholder="رمز عبور"
                    value={user.password}
                    onChange={(e) => {
                      setUser((current) => ({
                        ...current,
                        password: current.password,
                      }));
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="inputPassword5">
                    تکرار رمز جدید:
                  </Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="password"
                    placeholder="رمز عبور تکرار"
                  />
                </Col>
              </Row>

              <Row>
                <Form.Text id="passwordHelpBlock" muted>
                  پسورد شما باید بیشتر از 8 حرف شامل اعدادوحروف کوچک و بزرگ
                  انگلیسی باشد.
                </Form.Text>
              </Row>
              <br></br>
              <hr></hr>
              <Row>
                <Col>
                  <Form.Label>شماره تلفن جدید:</Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="text"
                    placeholder="03122222"
                    value={user.phone}
                    onChange={(e) => {
                      setUser((current) => ({
                        ...current,
                        phone: e.target.value,
                        password: current.password,
                      }));
                    }}
                  />
                </Col>
              </Row>
              <Button id="Edit-btn" type="submit">
                ویرایش اطلاعات
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
