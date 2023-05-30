import React from "react";
import { useState } from "react";
import "../Components/style/DrEditProfile.css";
import profilepic from "../images/139801051817237f53d.jpg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
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

import { FileUpload } from "primereact";

import { MultiSelect } from "primereact/multiselect";

function EditProfile() {
  const [selectedillnesses, setSelectedillnesses] = useState(null);
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

 const [user,setUser]=useState({
    name:"",
    email:"",
    
 })
  const [name,setName]=useState("");
  const [education, setEducation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sickness, setSickness] = useState([]);
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
 


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (education === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

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

  return (
    <div className="Editprofile-div" dir="rtl">
      <img id="edit-pic" src={profilepic} alt=""></img>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>تحصیلات: </Form.Label>
          </Col>
          <Col>
            <input className="input-edit" type="text" placeholder="تحصیلات" />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <Form.Label htmlFor="inputPassword5">رمز عبور جدید:</Form.Label>
          </Col>
          <Col>
            <input
              className="input-edit"
              type="password"
              placeholder="رمز عبور"
            />
          </Col>
        </Row>

        <Row>
          <Form.Text id="passwordHelpBlock" muted>
            پسورد شما باید بیشتر از 8 حرف شامل اعدادوحروف کوچک و بزرگ انگلیسی
            باشد.
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
          />
        </FormGroup>
        <br></br>
        <hr></hr>
        <Row>
          <Col>
            <Form.Label>شماره تلفن جدید:</Form.Label>
          </Col>
          <Col>
            <input className="input-edit" type="text" placeholder="03122222" />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <Form.Label>تجربه:</Form.Label>
          </Col>
          <Col>
            <input className="input-edit" type="text" placeholder="10 سال" />
          </Col>
        </Row>
        <hr></hr>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>عکس پروفایل جدید خود را انتخاب کنید:</Form.Label>
          <Form.Control type="file" size="sm" />
          <FileUpload
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            customUpload
            // uploadHandler={customBase64Uploader}
          />
        </Form.Group>
        <hr></hr>
        <FormGroup key="inline" dir="rtl">
          <Form.Label>لیست بیماری ها : </Form.Label>
          <br></br>

          <MultiSelect
            value={selectedillnesses}
            onChange={(e) => setSelectedillnesses(e.value)}
            options={illness}
            optionLabel="name"
            placeholder="انتخاب کنید.."
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
          />

          <Col>
            <Form.Check type="checkbox" label="اختلال شخصیت خودشیفته" />
            <Form.Check type="checkbox" label="وسواس" />
            <Form.Check type="checkbox" label="اختلال کابوس شبانه" />
            <Form.Check type="checkbox" label="اختلال هویت جنسیتی" />
            <Form.Check type="checkbox" label="هیستری" />
            <Form.Check type="checkbox" label="پرخوابی ایدیوپاتیک" />
            <Form.Check type="checkbox" label="بی‌خوابی" />
            <Form.Check type="checkbox" label="اختلال نافرمانی مقابله جویانه" />
            <Form.Check type="checkbox" label="اختلال خلقی فصلی" />
            <Form.Check type="checkbox" label="اسکیزوفرنی" />
            <Form.Check type="checkbox" label="نشخوار فکری" />
            <Form.Check type="checkbox" label="اختلال شخصیت اسکیزوتایپال" />
            <Form.Check type="checkbox" label="فوبیای اجتماعی" />
            <Form.Check type="checkbox" label="بی اختیاری عاطفی" />
            <Form.Check type="checkbox" label="اختلال شخصیت پارانوئید" />
            <Form.Check type="checkbox" label="اختلال هراس" />
            <Form.Check type="checkbox" label="اختلال اضطراب پس از سانحه" />
            <Form.Check type="checkbox" label="اختلال پرخوری" />
            <Form.Check type="checkbox" label="اختلال دوقطبی" />
            <Form.Check type="checkbox" label="اختلال شخصیت مرزی" />
          </Col>
        </FormGroup>
        <Button id="Edit-btn" type="submit">
          ویرایش اطلاعات
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
