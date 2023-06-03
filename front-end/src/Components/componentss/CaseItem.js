import React, { useState, useEffect } from "react";
import "../style/CaseItem.css";
import { RxCross2 } from "react-icons/rx";
function CaseItem(props) {
  let data = props?.data;
  const clickhandler = props?.clickhandler;

  //const [dateTime, setDateTime] = useState(new Date());
  const handleClick = (clicked_id) => {
    clickhandler(clicked_id);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 1000); // Update the date and time every second
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div
      className="caseItem-wrapper"
      key={data?.id}
      onClick={() => {
        handleClick(data?.id);
      }}
    >
      <div className="caseItem-icons">
        <RxCross2 id="cross-icon-caseItem" size={20} color="#a8a8a9"></RxCross2>
      </div>
      <div className="caseItem-info" dir="rtl">
        <h3>{data?.title}</h3>
        <p className="time-text-case-item">{data?.date?.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CaseItem;
