import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Card from "react-animated-3d-card";

import './giftcard.css'
import Bg1 from "./img/bg1.png";
import Bg2 from "./img/bg2.png";
import Bg3 from "./img/bg3.png";

export default function Giftcard() {
    const { t } = useTranslation()
  return (
    <>
      <Container className="mt-2 mb-5">
        <Row>
        <Col> 
            <p className="h-title textcolor mb-0 mt-5" >{t('services.giftcard')}</p>
            <div id="indicator2"></div>   
            </Col>
        </Row>
        
        <Row className="mt-5">
          <Col>
          <a href="https://giftcards.thefork.com/es">
            <Card
              style={{
                backgroundColor: "transparent",
                width: "170px",
                height: "256px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
              onClick={() => console.log("Card clicked")}
            >
              <div className="mr-4" href="https://giftcards.thefork.com/es">
                <img className="atvImg-layer" src={Bg1} alt="Buy a gold gift card"/>
              </div>
            </Card>
            </a>
          </Col>

          <Col>
          <a href="https://giftcards.thefork.com/es">
            <Card
              style={{
                backgroundColor: "transparent",
                width: "170px",
                height: "256px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
              onClick={() => console.log("Card clicked")}
            >
              <div className="mr-4" href="https://giftcards.thefork.com/es">
                <img className="atvImg-layer" src={Bg2} alt="Buy a gold gift card"/>
              </div>
            </Card>
            </a>
          </Col>

          <Col>
          <a href="https://giftcards.thefork.com/es">
            <Card
              style={{
                backgroundColor: "transparent",
                width: "170px",
                height: "256px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
              onClick={() => console.log("Card clicked")}
            >
            <div className="mr-4">
                <img className="atvImg-layer" src={Bg3} alt="Buy a gold gift card"/>
              </div>
              
            </Card>
            </a>
          </Col>

          
        </Row>
      </Container>

    </>
  );
}
