import React, { useState, useEffect } from "react";
import "../style/CaseInput.css";
import { RxCross2 } from "react-icons/rx";
import AudioRecorderr from "./AudioRecorderr";
function CaseInput({ closing }) {
  const [historyText, setHistoryText] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 0); // Update the date and time every second

    return () => clearInterval(interval);
  }, []);


  return (
    <div dir="rtl">
      <div>
        <form className="form-history">
          <RxCross2 id="cross-input-status" onClick={closing}></RxCross2>
          <input
            id="date-caseInput"
            disabled={true}
            placeholder={dateTime}
          ></input>
          <input
            id="subject-caseInput"
            type="text"
            placeholder="موضوع جلسه"
          ></input>
          <textarea
            id="description-caseInput"
            placeholder="توضیحات.."
          ></textarea>
          <br></br>
          <AudioRecorderr></AudioRecorderr>
          <button id="submit-btn-caseInput"  onClick={(event) =>
        {
          event.preventDefault();
          console.log("sub")} 
          }>ثبت اطلاعات</button>
        </form>
      </div>
    </div>
  );
}

export default CaseInput;
