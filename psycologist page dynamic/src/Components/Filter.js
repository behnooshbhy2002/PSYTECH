import "./Filter.css";
const Filter = (props) => {
  return (
    <>
      <div classNameName="boxConsultant-filter col-md-3 float-right">
        <div className="boxConsultant-filter col-md-3 float-right">
          <div className="consultation-filter-header">
            <span className="consultation-filter-header-caption">فیلترها</span>
          </div>
          <div className="consultation-filter-body">
            <div className="filtered_now_list_container filtered_now_list_container__m">
              <ul className="consultation-filter-lists">
                <li className="consultation-filter-item-caption">
                  <label htmlFor="" className="consultation-filter-item-text">
                    جنسیت روانشناسان
                  </label>
                </li>
                <div className="consultation-filter-item___container_box">
                  <li className="consultation-filter-item__flex__filter">
                    <input
                      autoComplete="off"
                      id="justFemaleR"
                      className="consultation-filter-input consultation-filter-input-radio genderRadio"
                      type="checkbox"
                      value="false"
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
                      value="false"
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
                    بیماری ها
                  </label>
                  <div>
                    <input
                      autoComplete="off"
                      id="filters_diseases_input"
                      placeholder="جستجو بیماری"
                      className="consultation-filter-item-diseases_input"
                    />
                  </div>
                  <div className="diseases_filters_container">
                    <div className="diseases_filters_container">
                      <button
                        data-href="1132"
                        className="diseases_filters_item"
                      >
                        {" "}
                        کاهش میل جنسی{" "}
                      </button>
                      <button
                        data-href="1200"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت خودشیفته{" "}
                      </button>
                      <button
                        data-href="1211"
                        className="diseases_filters_item"
                      >
                        {" "}
                        وسواس{" "}
                      </button>
                      <button
                        data-href="1218"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال کابوس شبانه{" "}
                      </button>
                      <button
                        data-href="1267"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال هویت جنسیتی{" "}
                      </button>
                      <button
                        data-href="1268"
                        className="diseases_filters_item"
                      >
                        {" "}
                        تبخال تناسلی{" "}
                      </button>
                      <button
                        data-href="1282"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال موکنی{" "}
                      </button>
                      <button
                        data-href="1292"
                        className="diseases_filters_item"
                      >
                        {" "}
                        سوزاک{" "}
                      </button>
                      <button
                        data-href="1318"
                        className="diseases_filters_item"
                      >
                        {" "}
                        هیستری{" "}
                      </button>
                      <button
                        data-href="1320"
                        className="diseases_filters_item"
                      >
                        {" "}
                        گریز گسسته{" "}
                      </button>
                      <button
                        data-href="1340"
                        className="diseases_filters_item"
                      >
                        {" "}
                        پرخوابی ایدیوپاتیک{" "}
                      </button>
                      <button
                        data-href="1357"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بی‌خوابی{" "}
                      </button>
                      <button
                        data-href="1402"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال نافرمانی مقابله جویانه{" "}
                      </button>
                      <button
                        data-href="1427"
                        className="diseases_filters_item"
                      >
                        {" "}
                        تریکومونیازیس{" "}
                      </button>
                      <button
                        data-href="1449"
                        className="diseases_filters_item"
                      >
                        {" "}
                        سندرم نشخوار{" "}
                      </button>
                      <button
                        data-href="1454"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال خلقی فصلی{" "}
                      </button>
                      <button
                        data-href="1460"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اسکیزوفرنی{" "}
                      </button>
                      <button
                        data-href="1462"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت اسکیزوافکتیو{" "}
                      </button>
                      <button
                        data-href="1502"
                        className="diseases_filters_item"
                      >
                        {" "}
                        نشخوار فکری{" "}
                      </button>
                      <button
                        data-href="1556"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت اسکیزوئید{" "}
                      </button>
                      <button
                        data-href="1557"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت اسکیزوتایپال{" "}
                      </button>
                      <button
                        data-href="1568"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بیماری پیک{" "}
                      </button>
                      <button
                        data-href="1569"
                        className="diseases_filters_item"
                      >
                        {" "}
                        فوبیای اجتماعی{" "}
                      </button>
                      <button
                        data-href="1595"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بی‌اختیاری عاطفی{" "}
                      </button>
                      <button
                        data-href="1603"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت پارانوئید{" "}
                      </button>
                      <button
                        data-href="1606"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال هراس{" "}
                      </button>
                      <button
                        data-href="1620"
                        className="diseases_filters_item"
                      >
                        {" "}
                        روان‌پریشی{" "}
                      </button>
                      <button
                        data-href="1670"
                        className="diseases_filters_item"
                      >
                        {" "}
                        زودانزالی{" "}
                      </button>
                      <button
                        data-href="1672"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال اضطراب پس از سانحه{" "}
                      </button>
                      <button
                        data-href="1683"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال جنسی زنان{" "}
                      </button>
                      <button
                        data-href="1691"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال پرخوری{" "}
                      </button>
                      <button
                        data-href="1692"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال دو قطبی{" "}
                      </button>
                      <button
                        data-href="1701"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت مرزی{" "}
                      </button>
                      <button
                        data-href="1728"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال دلبستگی{" "}
                      </button>
                      <button
                        data-href="1729"
                        className="diseases_filters_item"
                      >
                        {" "}
                        افسردگی غیرمعمول{" "}
                      </button>
                      <button
                        data-href="1731"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اوتیسم{" "}
                      </button>
                      <button
                        data-href="1739"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال خودزشت‌پنداری{" "}
                      </button>
                      <button
                        data-href="1809"
                        className="diseases_filters_item"
                      >
                        {" "}
                        پرخوری عصبی{" "}
                      </button>
                      <button
                        data-href="1831"
                        className="diseases_filters_item"
                      >
                        {" "}
                        ترس از شلوغی{" "}
                      </button>
                      <button
                        data-href="1845"
                        className="diseases_filters_item"
                      >
                        {" "}
                        ابهام جنسی{" "}
                      </button>
                      <button
                        data-href="1847"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلالات سازگاری{" "}
                      </button>
                      <button
                        data-href="1871"
                        className="diseases_filters_item"
                      >
                        {" "}
                        ایدز{" "}
                      </button>
                      <button
                        data-href="1882"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بیش‌فعالی{" "}
                      </button>
                      <button
                        data-href="1894"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال اضطراب اجتماعی{" "}
                      </button>
                      <button
                        data-href="1895"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال اضطراب{" "}
                      </button>
                      <button
                        data-href="1917"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال اضطراب فراگیر{" "}
                      </button>
                      <button
                        data-href="1927"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت ضداجتماعی{" "}
                      </button>
                      <button
                        data-href="1951"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بی‌اشتهایی عصبی{" "}
                      </button>
                      <button
                        data-href="1970"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال تکلم{" "}
                      </button>
                      <button
                        data-href="1978"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال چندشخصیتی{" "}
                      </button>
                      <button
                        data-href="2005"
                        className="diseases_filters_item"
                      >
                        {" "}
                        هذیان{" "}
                      </button>
                      <button
                        data-href="2012"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال شخصیت وابسته{" "}
                      </button>
                      <button
                        data-href="2013"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال زوال شخصیت{" "}
                      </button>
                      <button
                        data-href="2014"
                        className="diseases_filters_item"
                      >
                        {" "}
                        افسردگی پس از زایمان{" "}
                      </button>
                      <button
                        data-href="2061"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال ساختگی{" "}
                      </button>
                      <button
                        data-href="2070"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال افسردگی دائم{" "}
                      </button>
                      <button
                        data-href="2077"
                        className="diseases_filters_item"
                      >
                        {" "}
                        بی‌اشتهایی{" "}
                      </button>
                      <button
                        data-href="2108"
                        className="diseases_filters_item"
                      >
                        {" "}
                        کودک‌آزاری{" "}
                      </button>
                      <button
                        data-href="2110"
                        className="diseases_filters_item"
                      >
                        {" "}
                        کلامیدیا{" "}
                      </button>
                      <button
                        data-href="2124"
                        className="diseases_filters_item"
                      >
                        {" "}
                        افسردگی{" "}
                      </button>
                      <button
                        data-href="2190"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال خلق ادواری{" "}
                      </button>
                      <button
                        data-href="2210"
                        className="diseases_filters_item"
                      >
                        {" "}
                        جنون دزدی{" "}
                      </button>
                      <button
                        data-href="2211"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اعتیاد جنسی{" "}
                      </button>
                      <button
                        data-href="2212"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال احتکار اجباری{" "}
                      </button>
                      <button
                        data-href="2213"
                        className="diseases_filters_item"
                      >
                        {" "}
                        اختلال سوگ{" "}
                      </button>
                    </div>
                    <div className="showAllDiseasesBtn">
                      <span id="showAllDiseasesBtn__show_all_text">بیشتر</span>
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
