import React, { useState, useEffect } from "react";
import "../style/CaseItem.css";
import { RxCross2 } from "react-icons/rx";
function CaseItem({ clickhandler }) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update the date and time every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="caseItem-wrapper" onClick={clickhandler}>
      <div className="caseItem-icons">
        <RxCross2 id="cross-icon-caseItem" size={20} color="#a8a8a9"></RxCross2>
      </div>
      <div className="caseItem-info" dir="rtl">
        <h3>جلسه اول</h3>
        <p className="time-text-case-item">{dateTime.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CaseItem;
