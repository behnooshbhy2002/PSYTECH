import React, { useState } from "react";
import "../style/Dieases.css";
import { useLocation, useNavigate } from "react-router-dom";
function Dieases() {
  const [disItem, setDisItem] = useState(null);
  const sick = [
    {
      name: "اختلال شخصیت خودشیف",
      id: 1,
    },
    {
      name: "وسواس",
      id: 2,
    },
    {
      name: "اختلال کابوس شبانه",
      id: 3,
    },
    {
      name: "اختلال هویت جنسیتی",
      id: 4,
    },
    {
      name: "هیستری",
      id: 6,
    },
    {
      name: "پرخوابی ایدیوپاتیک",
      id: 8,
    },
    {
      name: "بی‌خوابی",
      id: 9,
    },
    {
      name: "اختلال نافرمانی مقابله جویانه",
      id: 10,
    },
    {
      name: "اختلال خلقی فصلی",
      id: 13,
    },
    {
      name: "اسکیزوفرنی",
      id: 14,
    },

    {
      name: "نشخوار فکری",
      id: 16,
    },

    {
      name: "اختلال شخصیت اسکیزوتایپال",
      id: 18,
    },

    {
      name: "فوبیای اجتماعی",
      id: 20,
    },
    {
      name: "بی اختیاری عاطفی",
      id: 21,
    },
    {
      name: "اختلال شخصیت پارانوئید",
      id: 22,
    },
    {
      name: "اختلال هراس",
      id: 23,
    },
    {
      name: "روان‌پریشی",
      id: 24,
    },
    {
      name: "اختلال اضطراب پس از سانحه",
      id: 25,
    },
    {
      name: "اختلال پرخوری",
      id: 26,
    },
    {
      name: "اختلال دوقطبی",
      id: 27,
    },
    {
      name: "اختلال شخصیت مرزی",
      id: 28,
    },
  ];

  const location = useLocation();
  const history = useNavigate();
  const addQuery = (key, value) => {
    let pathname = location.pathname;
    // returns path: '/app/books'
    let searchParams = new URLSearchParams(location.search);
    // returns the existing query string: '?type=fiction&author=fahid'
    searchParams.set(key, value);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  // const removeQuery = (key) => {
  //   let pathname = props.location.pathname;
  //   // returns path: '/app/books'
  //   let searchParams = new URLSearchParams(props.location.search);
  //   // returns the existing query string: '?type=fiction&author=fahid'
  //   searchParams.delete(key);
  //   this.props.history.push({
  //     pathname: pathname,
  //     search: searchParams.toString(),
  //   });
  // };

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const numberOfItems = isShowMore ? sick.length : 10;
  return (
    <div>
      {sick.slice(0, numberOfItems).map((item) => {
        return (
          <button
            data-href={item.id}
            onClick={() => {
              setDisItem(item.id);
              addQuery("disease", item.id);
            }}
            className={`diseases_filters_item ${
              disItem === item.id && "active"
            }`}
          >
            {item.name}
          </button>
        );
      })}
      <div>
        <button onClick={toggleReadMoreLess} className="showAllDiseasesBtn">
          <span id="showAllDiseasesBtn__show_all_text">
            {isShowMore ? "کمتر" : "بیشتر"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Dieases;
