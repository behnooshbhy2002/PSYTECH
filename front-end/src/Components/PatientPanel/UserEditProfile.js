import React from "react";
import { useState } from "react";
import "../style/DrEditProfile.css";
import profilepic from "../../images/men.png";
import SideBarrPatient from "./SideBarrPatient";
import Message from "../Error&Loading/Message";
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
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change

  // Handling the form submission
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (name === "" || email === "") {
  //       setError(true);
  //     } else {
  //       setSubmitted(true);
  //       setError(false);
  //     }
  //   };

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
            <Form>
              {/* <Form onSubmit={handleSubmit}> */}
              <Row>
                <Col>
                  <Form.Label htmlFor="inputPassword5">رمز جدید:</Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="password"
                    placeholder="رمز عبور"
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
