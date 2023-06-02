import React from "react";
import { useState } from "react";
import {USER_EDIT_PROFILE_DR_RESET} from "../Components/style/DrEditProfile.css";
import profilepic from "../images/ali-hemati.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SideBarr from "../Components/SideBarr/SideBarr";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import SideBarr from "../Components/SideBarr/SideBarr";
import Loader from "../Components/Error&Loading/Loader";
import Message from "../Components/Error&Loading/Message";
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
import {getDrProfile, DrEditProfilee } from "../reducers/drListReducers";
import { FileUpload } from "primereact";
import '../constants/doctorConstants';
import { MultiSelect } from "primereact/multiselect";
import { Alert } from "bootstrap";

function EditProfile() {
  const [selectedillnesses, setSelectedillnesses] = useState(null);
  const [uploading,setUploading]=useState("");
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

  const  specialist =[
    {name:"کودک",id:"1"},
    {name:"ازدواج",id:"2"},
    {name:"تحصیلی",id:"3"},
    {name:"فردی",id:"4"},
    {name:"خانواده",id:"5"},
  ]

  const handleClick = (e) => {
    e.preventDefault();
    if(password != confirmPassword){
      setIsValid(false)
    }
    else{
      dispatch(DrEditProfilee({
        'id':user.id,
        'name':user.full_name,
        'email':email,
        'phone':phone,
        'address':address,
        'password':password,
        'specialist':specialist,
        'experiment':experiment,
        'score':user.score,
        
    }));
    }
  };


  const handleUploadImg=async(e)=>{
    console.log("File is Uploading....");
   const file=e.target.files[0];
   const formData=new FormData();
   
   formData.append('image',file);
    formData.append('id',user.id);
   setUploading(true);

   try{

   const {data}=await axios.post('./api/images',formData);
   setImage(data);
   setUploading(false);

   }catch(error){
     setUploading(false);
   }
  }

  
  const [isValid,setIsValid]=useState(true);
  const [image,setImage]=useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sickness, setSickness] = useState([]);
  const [experiment,setExperiment]=useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  //const [error, setError] = useState(false);

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

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    

  const drEdit = useSelector((state) => state.drEdit);
  const { success } = drEdit;

  useEffect(() => {
    if (!userInfo) {
      navigate("./Login");
      //history.push("/login");
    } else {
      if (!user || !user.full_name || success) {
        const id = userInfo?.id;
        const par = `?id=${id}`;
        
        dispatch({type:USER_EDIT_PROFILE_DR_RESET})
        dispatch(getDrProfile(par, userInfo));
      } else {
        setImage(user.image);
        setName(user.full_name);
        setPhone(user.phone_number);
        setEmail(user.email);
        setEducation(user.specialist);
        setScore(user.rate);
        setCode(user.medical_number);
        setAddress(user.address);
        setExperiment(user.experience);
        //selectedillnesses(user.disease);
      }
    }
  }, [dispatch, userInfo, user,success]);

  return (
    <>
    {isValid 
      ? <Alert variant="success">Hurray! You're a genius.</Alert>
      : <Alert variant="danger">Oops! Try again</Alert>
}
      <div className="Kharrr">
        <SideBarr></SideBarr>
        <div className="Kharrrchild">
          <div className="Editprofile-div" dir="rtl">
            <img id="edit-pic" src={!image ? image : profilepic} alt=""></img>
            <FileUpload
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              customUpload
              onChange={handleUploadImg}
              // uploadHandler={customBase64Uploader}
            >
              change
            </FileUpload>
            {uploading && <Loader></Loader>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Label>تخصص: </Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="text"
                    placeholder="تخصص"
                    onChange={(e)=>{setEducation(e.target.value)}}
                  />
                </Col>
              </Row>
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
                    value={password}
                     onChange={(e) => setPassword(e.value)}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="inputPassword5">رمز جدید تکرار:</Form.Label>
                </Col>
                <Col>
                  <input
                    className="input-edit"
                    type="password"
                    placeholder="رمز عبور تکرار"
                     onChange={(e) => setConfirmPassword(e.value)}
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
                  value={address}
                   onChange={(e) => setAddress(e.value)}
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
                    value={phone}
                     onChange={(e) => setPhone(e.value)}
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
                    value={experiment}
                     onChange={(e) => setExperiment(e.value)}
                  />
                </Col>
              </Row>
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
                  maxSelectedLabels={10}
                  className="w-full md:w-20rem"
                  
                />
              </FormGroup>
              <Button id="Edit-btn" type="submit" onClick={handleClick}>
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
