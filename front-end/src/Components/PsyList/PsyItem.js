import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../../actions/doctorActions";
import Loader from "../Error&Loading/Loader";
import Message from "../Error&Loading/Message";
import "../style/PsyItem.css";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PsyItem = () => {
  const dispatch = useDispatch();
  // const dr = useSelector((state) => state.drList);
  // const { error, loading, drList } = dr;

  // console.log(error, loading, drList);

  const [searchParams] = useSearchParams();
  // const params = Object.fromEntries([...searchParams]);
  console.log(searchParams);

  useEffect(() => {
    dispatch(listDoctors(searchParams));
  }, [dispatch, searchParams]);
  const dr = useSelector((state) => state.doctorList);
  const { error, loading, doctors } = dr;
  // console.log(doctors);

  // const [drList, setDrList] = useState([]);
  // const [url, setUrl] = useState("http://localhost:3001/list");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setDrList(json));
  // }, [url]);

  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  let numberOfItems;
  if (doctors) {
    const DrArr_lenght = doctors.length;
    numberOfItems = !isShowMore ? DrArr_lenght : 10;
    numberOfItems < 10 && setIsShowMore(!isShowMore);
  }

  // const numberOfItems = !isShowMore ? props.DrArr.length : 10;
  // numberOfItems < 10 && setIsShowMore(!isShowMore);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {doctors.slice(0, numberOfItems).map((item) => {
            return (
              <li key={item.medicalNum} className="drShowCard">
                <div className="list-grid-item mt-4">
                  <a href="/#" className="grid-item-content p-2">
                    <div className="doctor-card-right-side">
                      <div className="doctor-card-personal-info-container">
                        <div className="doctor-card-personal-image">
                          <img
                            src={item.picture}
                            alt=""
                            className="img-fluid mx-auto d-block rounded-circle"
                          />
                        </div>
                        <div className="doctor-card-personal-info">
                          <span className="doctor-card-personal-info-name">
                            {item.name}
                          </span>
                          <span className="doctor-card-personal-info-specialty">
                            {item.spaciality}
                          </span>
                          <div className="doctor-card-platform-info-container">
                            <span className="doctor-card-rating">
                              <i className="mdi mdi-star f-19"></i>
                              {item.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="left2">
                      <div className="doctor-card-left-side">
                        <div className="doctor-card-business-info">
                          <div className="doctor-card-business-info-row">
                            <span className="doctor-card-business-info-title">
                              شماره نظام پزشکی :
                            </span>
                            <span className="doctor-card-business-info-value">
                              {item.medicalNum}
                            </span>
                          </div>
                          <div className="doctor-card-business-info-row">
                            <span className="doctor-card-business-info-title">
                              تجربه :
                            </span>
                            <span className="doctor-card-business-info-value">
                              {item.experience} سال
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="detail">
                        <div className="doctor-card-detail-container">
                          <button className="doctor-card-detail-view">
                            <div className="doctor-card-detail-view-centent">
                              <svg
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 1024 1024"
                                className="arrow"
                              >
                                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                              </svg>
                              <span className="details">مشاهده جزییات</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            );
          })}

          <div>
            {isShowMore && (
              <button onClick={toggleReadMoreLess} className="showAllDrBtn">
                <span className="showAllDrBtn__show_all_text">
                  {isShowMore && "بیشتر"}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default PsyItem;
