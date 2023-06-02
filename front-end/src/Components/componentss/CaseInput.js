import React, { useState, useEffect } from "react";
import "../style/CaseInput.css";
import { RxCross2 } from "react-icons/rx";
import AudioRecorderr from "./AudioRecorderr";
import { file } from "@babel/types";
import axios from "axios";
function CaseInput(props) {
  const [id, setId] = useState();
  const closing = props?.closing;
  const fileId = props?.fileId;
  const FileList = props?.FileList;

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  let contentM = "";
  let titleM = "";
  let dateTimeM = new Date();
  //console.log(FileList);

  FileList?.map((item) => {
    if (item?.id == fileId) {
      contentM = item?.content;
      titleM = item?.title;
      dateTimeM = item?.date;
    } else if (fileId == -1) {
      contentM = "";
      titleM = "";
    }
  });

  const [historyText, setHistoryText] = useState("");

  // const fetchInfo = () => {

  // };

  const handleSubmitFile = () => {
    console.log(title);
    console.log(content);
  };
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const id = userInfo?.id;
  //const par = `?fileId=${fileId}`;
  //let fileItem;
  const [fileItem, setFileItem] = useState();
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
          <AudioRecorderr fileId></AudioRecorderr>
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
