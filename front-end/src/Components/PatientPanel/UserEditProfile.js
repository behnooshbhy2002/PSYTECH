import React from "react";
import { useState, useEffect } from "react";
import "../style/DrEditProfile.css";
import profilepic from "../../images/men.png";
import SideBarrPatient from "./SideBarrPatient";
import Message from "../Error&Loading/Message";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    phone: "",
    password: "",
  });

  // const id=userInfo.id;
  // const par=`?id=${id}`;
  //  console.log(id);
  //  event.preventDefault();
  //  fetch(`http://127.0.0.1:8000/appointments/patient_profile/${par}`
  const navigate = useNavigate();
  const [phonenum,setPhoneNum]=useState("");
  const [passwordd,setPasswordd]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const id=userInfo.id;
    const par=`?id=${id}`;
    
    
  
    const data = {
      password: passwordd,
      phone_number: phonenum,
    };
  
    fetch(`http://127.0.0.1:8000/appointments/patient_profile/${par}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // handle success
          navigate("../MyProfileP");
        } else {
          throw new Error('Error creating user');
        }
      })
      .catch((error) => {
        // handle error
      });
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

            <Form onSubmit={handleSubmit} >
              <Row>
                <Col>
                  <Form.Label htmlFor="inputPassword5">رمز جدید:</Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="password"
                    placeholder="رمز عبور"
                     
                     onChange={(e) => {
                      setPasswordd(e.target.value);
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
                    placeholder="9112222332"
                    
                    onChange={(e) => {
                      setPhoneNum(e.target.value);
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
