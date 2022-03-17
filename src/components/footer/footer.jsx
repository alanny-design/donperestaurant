import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./footer.css";
import Logo from "../section1/img/logo.png";
import MapIcon from "./img/map-pin.svg";
import PhoneIcon from "./img/phone.svg";
import Facebook from "./img/facebook.svg";
import Email from "./img/mail.svg";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="bg mt-5 mb-0">
        <Row>
          <Col xs={6} sm={4}>
            <img className="logosizefooter" src={Logo} alt="Don Pé Logo" />
          </Col>
          <Col xs={6} sm={3} className="alignleft">
            <a href="#home" className="ml-3 p-subtitle">
              {t("nav_bar_Home")}{" "}
            </a>
            <br></br>
            <a href="#Services" className="ml-3 p-subtitle">
              {t("nav_bar_Services")}{" "}
            </a>
            <br></br>
            <a href="#Bookings" className="ml-3 p-subtitle">
              {t("nav_bar_Bookings")}{" "}
            </a>
          </Col>

          <Col xs={12} sm={3}>
            <Col className="d-flex justify-content-center mt-3">
            <a className="iconsize" href="https://www.google.com/maps/place/C.+de+la+Cruz,+17,+15,+29640+Fuengirola,+M%C3%A1laga,+Espa%C3%B1a/@36.5386973,-4.623871,17z/data=!3m1!4b1!4m5!3m4!1s0xd72e26baa3b4569:0x69a38a1c66491bca!8m2!3d36.5386973!4d-4.6216823">
                <img src={MapIcon} alt="Don Pé location" />
              </a>
                <p className="p-subtitle textcolor m-0 d-flex justify-content-center">
                  {t("location.local")}
                </p>
            </Col>

            <Col>
              <div className="d-flex justify-content-center">
                <img
                  className="iconsize"
                  src={PhoneIcon}
                  alt="Don Pé location"
                />
                <p className="p-subtitle textcolor m-0 d-flex justify-content-center">
                  {t("location.phone")}
                </p>
              </div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={6}>
            <p className="p-subtitle textcolor alignleft m-0">
              {t("copyright.2022")}
            </p>
          </Col>
          <Col xs={4} sm={6}>

          <a className="imgcontact" href="https://www.facebook.com/restaurantedonpe">
                <img src={Facebook} alt="Facebook Account" />
              </a>
              <a
                className="imgcontact"
                href="mailto: restaurantedonpe@hotmail.com"
              >
                <img src={Email} alt="Email Adress" />
              </a>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
