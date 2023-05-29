import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../images/logo.png";
import "../style/footerStyle.css";
export default function Footer() {
  return (
    <div className="Footer-style">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        id="footerstyle"
        dir="rtl"
      >
        <section className="footer-section">
          <MDBContainer className="text-center  mt-4 text-start">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="2" className="mx-auto mb-2">
                <img src={logo} alt="" id="footer-logo" />
                <br />
                <p>
                  سایت مشاوره و خدمات روانشناسی <br />
                  psytech
                </p>
                <ul>
                  <li className="icone-under-logo">
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                  </li>
                  <li className="icone-under-logo">
                    <span>
                      <i className="fa-brands fa-telegram" />
                    </span>
                  </li>
                  <li className="icone-under-logo">
                    <span>
                      {" "}
                      <i className="fa-solid fa-envelope" />
                    </span>{" "}
                  </li>
                  <li className="icone-under-logo">
                    {" "}
                    <span>
                      <i className="fa-brands fa-instagram" />
                    </span>
                  </li>
                </ul>
                <br />
              </MDBCol>
              <MDBCol
                md="4"
                lg="3"
                xl="3"
                className="mx-auto  mb-md-0 mb-4"
                dir="rtl"
              >
                <br />

                <h6 className="text-uppercase fw-bold mb-3" dir="rtl">
                  پشتیبانی
                </h6>
                <div className="contact-div">
                  <p dir="rtl">
                    <MDBIcon color="secondary" icon="home" className="me-1" />
                    <span> اصفهان، دانشگاه اصفهان </span>
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="envelope"
                      className="me-2"
                    />
                    <span> psytech@gmail.com </span>
                  </p>
                  <p dir="rtl">
                    <MDBIcon
                      color="secondary"
                      icon="phone"
                      className="me-3"
                      dir="rtl"
                    />
                    <span dir="rtl"> ۰۹۳۶-۶۶۶-۶۶۶۶ </span>
                  </p>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-2">
                <br />
                <h6 className="text-uppercase fw-bold mb-3">خدمات سایت </h6>
                <div className="a-tags">
                  <p>
                    <a href="#!" className="text-reset a-non-decoration">
                      مشاوره خانواده
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset a-non-decoration">
                      {" "}
                      مشاوره فردی{" "}
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset a-non-decoration">
                      مشاوره تحصیلی
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset a-non-decoration">
                      مشاوره ازدواج
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset a-non-decoration">
                      مشاوره کودک
                    </a>
                  </p>
                </div>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-2">
                <br />
                <div className="a-tags">
                  <p>
                    <a
                      href="#!"
                      className="text-reset fw-bold a-non-decoration "
                    >
                      درباره ما
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset fw-bold a-non-decoration"
                    >
                      قوانین
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset fw-bold a-non-decoration"
                    >
                      گزارش تخلف
                    </a>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    </div>
  );
}
