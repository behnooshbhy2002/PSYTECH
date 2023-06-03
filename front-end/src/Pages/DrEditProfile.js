import React from "react";
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import "../Components/style/DrEditProfile.css";
import profilepic from "../images/ali-hemati.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SideBarr from "../Components/SideBarr/SideBarr";
import Message from "../Components/Error&Loading/Message";
import axios from "axios";
import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  FormLabel,
  Col,
  Row,
} from "react-bootstrap";

import { FileUpload } from "primereact";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "primereact/multiselect";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function EditProfile() {
  const navigate = useNavigate();
  const [selectedillnesses, setSelectedillnesses] = useState(null);
  const [opt, setOpt] = React.useState("");

  const handleClick = (event) => {
    event.preventDefault();

   
  const data = {
    specialist:selectedOption,
    password: password,
    address:address,
    phone_number: phoneNumber,
    experience:experiment,
    diseases:selectedillnesses
  };
  const id=userInfo.id;
  const par=`?id=${id}`;
  fetch(`http://127.0.0.1:8000/appointments/psychologist_profile/${par}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // handle success
        navigate("../MyProfile");
      } else {
        throw new Error('Error creating user');
      }
    })
    .catch((error) => {
      // handle error
    });
};


  const specials=[
    {name:"مشاوره فردی"},
    {name:"مشاوره خانواده"},
    {name:"مشاوره ازدواج"},
    {name:"مشاوره کودک"},
    {name:"مشاوره تحصیلی"},
  ]
  const illness = [
    { name: "اختلال شخصیت خودشیفته", id: "1" },
    { name: "وسواس", id: "2" },
    { name: "اختلال کابوس شبانه", id: "3" },
    { name: "اختلال هویت جنسیتی", id: "4" },
    { name: "هیستری", id: "5" },
    { name: "پرخوابی ایدیوپاتیک", id: "6" },
    { name: "بی‌خوابی", id: "7" },
    { name: "اختلال نافرمانی مقابله جویانه", id: "8" },
    { name: "اختلال خلقی فصلی", id: "9" },
    { name: "اسکیزوفرنی", id: "10" },
    { name: "نشخوار فکری", id: "11" },
    { name: "اختلال شخصیت اسکیزوتایپال", id: "12" },
    { name: "فوبیای اجتماعی", id: "13" },
    { name: "بی اختیاری عاطفی", id: "14" },
    { name: "اختلال شخصیت پارانوئید", id: "15" },
    { name: "اختلال هراس", id: "16" },
    { name: "اختلال اضطراب پس از سانحه", id: "17" },
    { name: "اختلال پرخوری", id: "18" },
    { name: "اختلال دو قطبی", id: "19" },
    { name: "اختلال شخصیت مرزی", id: "20" },
  ];

  

  
  const [img, setimg] = useState("");
  
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const [experiment,setExperiment]=useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  // Handling the name change

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  



  const [user, setUser] = useState({});

  useEffect(() => {
    const id=userInfo.id;
    const par=`?id=${id}`;
    fetch(`http://127.0.0.1:8000/appointments/psychologist_profile/${par}`)
      .then(response => response.json())
      .then(user => {
        setUser(user);
      })
      .catch(error => {
        // handle error
      });
  }, []);

  return (
    <>
      {/* {userInfo ? (
        <div>
          <Message>دسترسی غیرمجاز</Message>
        </div>
      ) : ( */}
        <div className="Kharrr">
          <SideBarr></SideBarr>
          <div className="Kharrrchild">
            <div className="Editprofile-div" dir="rtl">
              <img id="edit-pic" src={profilepic} alt=""></img>
              <Row>
                <Col>
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    customUpload
                    //uploadHandler={customBase64Uploader}
                  >
                    change
                  </FileUpload>
                </Col>
                <Col>
                  <FormControl sx={{ m: 1, minWidth: 300 }}>
                    
                    <input
                      className="input-edit"
                      type="text"
                      placeholder="تخصص"
                      defaultValue={selectedOption}
                      onChange={(e) => {
                        setSelectedOption(e.target.value);
                      }}
                    />
                     
                  </FormControl>
                </Col>
              </Row>

              <Form >
                {/* <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    /> */}
                {/* <input
                      className="input-edit"
                      type="text"
                      placeholder="تحصیلات"
                    /> */}

                <hr></hr>
                <Row>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">رمز جدید:</Form.Label>
                  </Col>
                  <Col>
                    <input
                      className="input-edit"
                      type="password"
                      placeholder="رمز عبور"
                      defaultValue={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      رمز جدید تکرار:
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
                <FormGroup>
                  <FormLabel>آدرس جدید مطب:</FormLabel>
                  <br></br>
                  <Form.Control
                    id="address-input-edit"
                    as="textarea"
                    placeholder="آدرس جدید مطب را به صورت دقیق و با جزییات وارد کنید..."
                    defaultValue={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </FormGroup>
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
                      defaultValue={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <Form.Label>تجربه:</Form.Label>
                  </Col>
                  <Col>
                    <input
                      className="input-edit"
                      type="text"
                      placeholder="10 سال"
                      defaultValue={experiment}
                      onChange={(e) => {
                        setExperiment(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <FormGroup key="inline" dir="rtl">
                  <Form.Label>لیست بیماری ها : </Form.Label>
                  <br></br>

                  <MultiSelect
                    value={selectedillnesses}
                    onChange={(e) => setSelectedillnesses(e.target.value)}
                    options={illness}
                    optionLabel="name"
                    placeholder="انتخاب کنید.."
                    maxSelectedLabels={10}
                    className="w-full md:w-20rem"
                    defaultChecked={selectedillnesses}
                  />
                </FormGroup>
                <Button id="Edit-btn" type="submit" onClick={handleClick}>
                  ویرایش اطلاعات
                </Button>
              </Form>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default EditProfile;
