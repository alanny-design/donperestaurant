import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-animated-3d-card";
import { useTranslation } from "react-i18next";
import "./giftcard.css";
import Bg1 from "./img/gif-card-2.png";
import Bg2 from "./img/gif-card-1.png";
import Bg3 from "./img/gif-card.png";





export default function Giftcard() {
  const { t } = useTranslation();
  return (
    <>
     <Container className="mb-5">
        <Row>
          <Col className="mt-5">
            <p className="h-title textcolor bold mb-0">
              {t("services.giftcard")}
            </p>
            <div id="indicator2"></div>
          </Col>
        </Row>
        <Row>
        <Grids/>
        </Row>
        </Container>
   
    </>
  )
}



export function Grids() {
  return (
    <>
      <Container className="mb-5 centralized">
        <Row className="mt-5 mobile">
          <Col>
            <a href="https://giftcards.thefork.com/es" target="_blank" rel="noopener noreferrer">
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
                  <img
                    className="atvImg-layer"
                    src={Bg1}
                    alt="Buy a gold gift card"
                  />
                </div>
              </Card>
            </a>
          </Col>

          <Col>
            <a href="https://giftcards.thefork.com/es" target="_blank" rel="noopener noreferrer">
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
                  <img
                    className="atvImg-layer"
                    src={Bg2}
                    alt="Buy a gold gift card"
                  />
                </div>
              </Card>
            </a>
          </Col>

          <Col>
            <a href="https://giftcards.thefork.com/es" target="_blank" rel="noopener noreferrer">
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
                  <img
                    className="atvImg-layer"
                    src={Bg3}
                    alt="Buy a gold gift card"
                  />
                </div>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
