import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../../actions/doctorActions";
import Loader from "../Error&Loading/Loader";
import Message from "../Error&Loading/Message";
import "../style/PsyItem.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PsyItem = () => {
  const [itemID, setItemID] = useState();
  const nav = useNavigate();

  const handleDetailButton = (id) => {
    console.log(id);
    //history(`/PsycologistProfile`);
    addQuery("id", id, history);
  };

  const history = useNavigate();

  const addQuery = (key, value, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.set(key, value);
    url({
      pathname: "/PsycologistProfile",
      search: searchParams.toString(),
    });
  };

  const removeQuery = (key, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.delete(key);
    url({
      pathname: "/PsycologistProfile",
      search: searchParams.toString(),
    });
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {

  //   }
  // };
  const dispatch = useDispatch();
  const loc = useLocation();
  const par = loc.search;

  //console.log(par);
  useEffect(() => {
    dispatch(listDoctors(par));
  }, [dispatch, par]);

  const dr = useSelector((state) => state.doctorList);
  const { error, loading, doctors } = dr;
  console.log(doctors);

  // const [drList, setDrList] = useState([]);
  // const [url, setUrl] = useState("http://localhost:3001/list");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setDrList(json));
  // }, [url]);

  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMoreLess = () => {
    setIsShowMore(false);
  };

  let numberOfItems;
  if (doctors) {
    const DrArr_lenght = doctors.length;
    numberOfItems = !isShowMore ? DrArr_lenght : 10;
  }
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <div>
          <Message variant="danger">{error}</Message>
          {/* <button
            onClick={() => {
              setItemID(1);
              handleDetailButton(1);
            }}
          >
            Hiii
          </button> */}
        </div>
      ) : doctors?.length != 0 ? (
        <Message variant="info">
          {"روانشناس با اطلاعات خواسته‌شده یافت نشد"}
        </Message>
      ) : (
        <div>
          {doctors.slice(0, numberOfItems).map((item) => {
            return (
              <li key={item.medical_number} className="drShowCard">
                <div className="list-grid-item mt-4">
                  <a
                    className="grid-item-content p-2"
                    onClick={() => {
                      console.log(item.id);
                      setItemID(item.id);
                      handleDetailButton(item.id);
                    }}
                  >
                    <div className="doctor-card-right-side">
                      <div className="doctor-card-personal-info-container">
                        <div className="doctor-card-personal-image">
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid mx-auto d-block rounded-circle"
                          />
                        </div>
                        <div className="doctor-card-personal-info">
                          <span className="doctor-card-personal-info-name">
                            {item.full_name}
                          </span>
                          <span className="doctor-card-personal-info-specialty">
                            {item.specialist}
                          </span>
                          <div className="doctor-card-platform-info-container">
                            <span className="doctor-card-rating">
                              <i className="mdi mdi-star f-19"></i>
                              {item.rate}
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
                              {item.medical_number}
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
                          <button
                            className="doctor-card-detail-view"
                            onClick={() => {
                              setItemID(item.id);
                              handleDetailButton(item.id);
                            }}
                          >
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
                              <span className="show-details">
                                مشاهده جزییات
                              </span>
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
            {isShowMore && doctors.length > 10 && (
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
