import React, { useState, useEffect } from "react";
import "../style/CaseInput.css";
import { RxCross2 } from "react-icons/rx";
import AudioRecorderr from "./AudioRecorderr";
import { file } from "@babel/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CaseInput(props) {
  const [id, setId] = useState();
  const closing = props?.closing;
  const fileId = props?.fileId;
  const FileList = props?.FileList;
  const id_me = props?.medical_recorde;

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [audioFile, setAudioFile] = useState({});

  let contentM = "";
  let titleM = "";
  let dateTimeM = new Date();
  let sessionID = "";
  let audio;
  const navigate = useNavigate();
  //console.log(FileList);

  FileList?.map((item) => {
    if (item?.id == fileId) {
      contentM = item?.content;
      titleM = item?.title;
      dateTimeM = item?.date;
      sessionID = item?.sessionID;
      audio = item?.audio;
    } else if (fileId == -1) {
      contentM = "";
      titleM = "";
    }
  });

  const [historyText, setHistoryText] = useState("");

  // const fetchInfo = () => {

  // };

  const handleSubmitFile = () => {
    const { data } = axios
      .post(`http://127.0.0.1:8000/appointments/request_list/`, {
        medical_recorde: id_me,
        content: content,
        title: title,
        audio: { ...audioFile },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const id = userInfo?.id;
  //const par = `?fileId=${fileId}`;
  //let fileItem;
  // const [fileItem, setFileItem] = useState();
  // useEffect(() => {
  //   FileList?.map((item) => {
  //     if (item.id == fileId) {
  //       console.log("hiiiii");
  //       setContent(item.content);
  //       setTitle(item.title);
  //       setDateTime(item.date);
  //     }
  //   });
  //   if (fileId == -1) {
  //     setContent("");
  //     setTitle("");
  //     setDateTime(new Date());
  //   }
  //   console.log();
  // }, []);

  // if (fileId == -1) {
  //   const interval = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 0); // Update the date and time every second

  //   return () => clearInterval(interval);
  // }

  const handleDataReceived = (audio) => {
    console.log(audio);
    setAudioFile(audio);
  };
  //const formData = new FormData();
  return (
    <div dir="rtl">
      <div key={fileId}>
        <form className="form-history">
          <RxCross2 id="cross-input-status" onClick={closing}></RxCross2>
          <input
            id="date-caseInput"
            disabled={true}
            placeholder={fileId == -1 ? dateTime : dateTimeM}
          ></input>
          <input
            id="subject-caseInput"
            type="text"
            placeholder="موضوع جلسه"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={fileId != -1 ? titleM : title}
          ></input>
          <textarea
            id="description-caseInput"
            placeholder="توضیحات.."
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={fileId != -1 ? contentM : content}
          ></textarea>
          <br></br>
          {fileId == -1 ? (
            <AudioRecorderr
              onDataReceived={handleDataReceived}
            ></AudioRecorderr>
          ) : (
            ""
          )}
          {fileId == -1 ? (
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
