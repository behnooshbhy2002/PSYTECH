import React, { useState, useEffect } from "react";
import "../style/CaseInput.css";
import { RxCross2 } from "react-icons/rx";
import AudioRecorderr from "./AudioRecorderr";
import { file } from "@babel/types";
import axios from "axios";
function CaseInput(props) {
  const closing = props?.closing;
  const fileId = props?.fileId;
  //console.log(fileId);
  const [historyText, setHistoryText] = useState("");

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const fetchInfo = (par) => {
    return axios
      .get(`http://127.0.0.1:8000/appointments/patient_list/${par}`)
      .then((response) => {
        console.log(response);
        //doctor = response.data;
        setFileItem(response.data);
        console.log(fileItem);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitFile = () => {
    console.log(title);
    console.log(content);
  };
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const id = userInfo?.id;
  const par = `?fileId=${fileId}`;
  //let fileItem;
  const [fileItem, setFileItem] = useState();
  useEffect(() => {
    setFileItem(fetchInfo(par));
    // setFileItem({
    //   id: 2,
    //   content: "jjjjjjjj",
    //   title: "[gsi h,g",
    //   date: "2020/01/01",
    // });
    console.log(fileId);
  }, [par]);

  // if (fileId == -1) {
  //   const interval = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 0); // Update the date and time every second

  //   return () => clearInterval(interval);
  // }

  return (
    <div dir="rtl">
      <div key={fileId}>
        <form className="form-history">
          <RxCross2 id="cross-input-status" onClick={closing}></RxCross2>
          <input
            id="date-caseInput"
            disabled={true}
            placeholder={fileId === -1 ? dateTime : fileItem?.date}
          ></input>
          <input
            id="subject-caseInput"
            type="text"
            placeholder="موضوع جلسه"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={fileId !== -1 ? fileItem?.title : title}
          ></input>
          <textarea
            id="description-caseInput"
            placeholder="توضیحات.."
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={fileId !== -1 ? fileItem?.content : content}
          ></textarea>
          <br></br>
          <AudioRecorderr></AudioRecorderr>
          {fileId != -1 ? (
            <button
              id="submit-btn-caseInput"
              onClick={(event) => {
                event.preventDefault();
                handleSubmitFile();
                console.log("sub");
              }}
            >
              ثبت اطلاعات
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default CaseInput;
