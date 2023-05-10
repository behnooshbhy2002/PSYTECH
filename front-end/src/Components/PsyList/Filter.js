import "../style/Filter.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import "../style/Dieases.css";
const Filter = () => {
  const [justFemale, setJustFemale] = useState(false);
  const [justMale, setJustMale] = useState(false);

  let navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname;

  let params = [];

  const justFemaleHandler = (e) => {
    setJustFemale(e.target.checked);
    if (e.target.checked) {
      addQuery("justFemale", true);
    } else {
      removeQuery("justFemale");
    }
  };

  const justMaleHandler = (e) => {
    console.log(e.target.checked);
    setJustMale(e.target.checked);

    if (e.target.checked) {
      addQuery("justMale", true);
    } else {
      removeQuery("justMale");
    }
  };

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

  const history = useNavigate();
  const addQuery = (key, value) => {
    let pathname = location.pathname;

    let searchParams = new URLSearchParams(location.search);

    searchParams.set(key, value);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  const removeQuery = (key) => {
    let pathname = location.pathname;

    let searchParams = new URLSearchParams(location.search);

    searchParams.delete(key);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const numberOfItems = isShowMore ? sick.length : 10;
  return (
    <>
      <div className="filter-box">
        <div className="boxConsultant-filter col-md-3">
          <div className="consultation-filter-header">
            <span className="consultation-filter-header-caption">فیلترها</span>
          </div>
          <div className="consultation-filter-body">
            <div className="filtered_now_list_container filtered_now_list_container__m">
              <ul className="consultation-filter-lists">
                <li className="consultation-filter-item-caption">
                  <label htmlFor="" className="consultation-filter-item-text">
                    جنسیت روانشناس
                  </label>
                </li>
                <div className="consultation-filter-item___container_box">
                  <li className="consultation-filter-item__flex__filter">
                    <input
                      autoComplete="off"
                      id="justFemaleR"
                      className="consultation-filter-input consultation-filter-input-radio genderRadio"
                      type="checkbox"
                      checked={justFemale}
                      onChange={justFemaleHandler}
                    />
                    <label
                      htmlFor="justFemaleR"
                      className="consultation-filter-text"
                    >
                      خانم
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                      className="female-icon"
                    >
                      <path d="M 25 7 C 15.022 7 7 13.775 7 34.5 C 9.6 38.083 14.043781 40 17.175781 40 L 18.707031 40 C 20.581536 41.757066 22.807029 43 25 43 C 27.192971 43 29.418464 41.757066 31.292969 40 L 32.826172 40 C 35.957172 40 40.4 38.083 43 34.5 C 43 13.717 34.978 7 25 7 z M 25 8 C 29.902 8 33.754969 9.68425 36.542969 13.03125 C 40.131969 17.33725 41.958047 24.398922 41.998047 34.169922 C 39.554047 37.342922 35.572172 39 32.826172 39 L 32.275391 39 C 34.482316 36.548714 36 33.461874 36 31.193359 L 36 25 C 31.425 22.219 29 17 29 17 C 28.066 20.112 25.506 25.783938 14 26.085938 L 14 31.193359 C 14 33.461874 15.517684 36.548714 17.724609 39 L 17.173828 39 C 14.427828 39 10.445953 37.342922 8.0019531 34.169922 C 8.0389531 25.092922 9.61875 18.354234 12.71875 13.990234 C 15.54975 10.005234 19.649 8 25 8 z M 29.171875 19.349609 C 30.278875 21.113609 32.23 23.716828 35 25.548828 L 35 31.193359 C 35 34.973359 29.86 42 25 42 C 20.14 42 15 34.973359 15 31.193359 L 15 27.046875 C 22.244 26.661875 26.907875 24.131609 29.171875 19.349609 z"></path>
                    </svg>
                  </li>
                  <li className="consultation-filter-item__flex__filter">
                    <input
                      autoComplete="off"
                      id="justMaleR"
                      className="consultation-filter-input consultation-filter-input-radio genderRadio"
                      type="checkbox"
                      checked={justMale}
                      onClick={justMaleHandler}
                      // onChange={}
                    />
                    <label
                      htmlFor="justMaleR"
                      className="consultation-filter-text men"
                    >
                      آقا
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 7 C 16.47 7 11 12.147891 11 21.087891 L 11 26.058594 C 11 26.058594 10.175781 27.042656 10.175781 28.722656 C 10.175781 30.972656 11.908625 32.185172 13.140625 32.826172 C 14.546625 39.015172 21.294 43 25 43 C 28.706 43 35.453375 39.015172 36.859375 32.826172 C 38.091375 32.185172 39.824219 30.697266 39.824219 28.447266 C 39.824219 26.767266 39 26.058594 39 26.058594 L 39 21.087891 C 39 10.533891 32.923828 9.9375 32.923828 9.9375 C 32.923828 9.9375 29.804 7 25 7 z M 25 8 C 29.323 8 32.488281 10.892578 32.488281 10.892578 C 32.488281 10.892578 38 11.059891 38 21.087891 L 37.978516 26 L 37.1875 26 C 36.3175 22.248 34.904594 17.458672 32.183594 15.888672 C 32.183594 15.888672 27.824391 23.125141 14.400391 22.869141 L 12.910156 26 L 12 26 L 12 21.087891 C 12 12.892891 16.86 8 25 8 z M 32.367188 17.246094 C 33.848187 18.555094 35.239672 21.92 36.388672 27 L 38.460938 27 C 38.649575 27.301063 38.822266 27.755472 38.822266 28.447266 C 38.822266 30.967266 35.986328 32.152344 35.986328 32.152344 C 34.814328 38.289344 28.085 42 25 42 C 21.915 42 15.277672 38.508344 14.013672 32.152344 C 14.013672 32.152344 11.175781 31.145656 11.175781 28.722656 C 11.175781 27.962052 11.384415 27.386416 11.591797 27 L 13.542969 27 L 15.035156 23.869141 C 22.938156 23.813141 28.617188 21.643094 32.367188 17.246094 z"></path>
                    </svg>
                  </li>
                </div>
              </ul>
              <ul className="consultation-filter-lists consultation-filter-available border-0">
                <li className="consultation-filter-item-caption">
                  <label htmlFor="" className="consultation-filter-item-text">
                    بیماری‌ها
                  </label>

                  <div className="diseases_filters_container">
                    {/* <Dieases></Dieases> */}
                    <div>
                      {sick.slice(0, numberOfItems).map((item) => {
                        return (
                          <button
                            data-href={item.id}
                            onClick={() => {
                              if (item.id == disItem) {
                                setDisItem(null);
                                removeQuery("disease");
                              } else {
                                setDisItem(item.id);
                                addQuery("disease", item.id);
                              }
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
                        <button
                          onClick={toggleReadMoreLess}
                          className="showAllDiseasesBtn"
                        >
                          <span id="showAllDiseasesBtn__show_all_text">
                            {isShowMore ? "کمتر" : "بیشتر"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
