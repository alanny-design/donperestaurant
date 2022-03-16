import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';
import './footer.css'
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
          <Col xs={4} sm={4}>
            <img className="logosizefooter" src={Logo} alt="Don Pé Logo" />
            <p className="p-subtitle textcolor mb-0 mt-5">
              {t("copyright.2022")}
            </p>
          </Col>
          <Col xs={3} sm={3} className="mt-5 alignleft">
            <Link className="m-3" to="/">{t("nav_bar_Home")} </Link><br></br>
            <Link className="m-3" to="/">{t("nav_bar_Services")} </Link><br></br>
            <Link className="m-3" to="/">{t("nav_bar_Galery")} </Link><br></br>
            <Link className="m-3" to="/">{t("nav_bar_Bookings")} </Link><br></br>
            <Link className="m-3" to="/">{t("nav_bar_Maps")} </Link>
          </Col>

          <Col>
            <Col className="mt-5">
            <div className="d-flex justify-content-center">
              <img className="iconsize" src={MapIcon} alt="Don Pé location" />
              <p className="p-subtitle textcolor m-0 d-flex justify-content-center">
                {t("location.local")}
              </p>
            </div>
            </Col>

            <Col className="mt-5">
            <div className="d-flex justify-content-center">
              <img className="iconsize" src={PhoneIcon} alt="Don Pé location" />
              <p className="p-subtitle textcolor m-0 d-flex justify-content-center">
                {t("location.phone")}
              </p>
            </div>
            </Col>

            <Col xs={12} sm={12} className="d-flex justify-content-center mt-5" > 
            <a href="#1">
              <img
                className="imgcontact m-2"
                src={Facebook}
                alt="Facebook Account"
              />
              </a>
            <a href="mailto: donperestaurant@gmail.com">
              <img
                className="imgcontact m-2"
                src={Email}
                alt="Email Adress"
              />
            </a>
            </Col>
            
          </Col>        
        </Row>
      </Container>
    </>
  );
}

export default Footer;
