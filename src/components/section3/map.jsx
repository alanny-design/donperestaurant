import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AddressMap = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="google-map-code">
        <iframe title="LocalizacaoDonPe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.35256654243446!2d-4.621751804778947!3d36.538652959415366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e26ba9b45fd9%3A0x163f569058827fad!2sRestaurante%20Don%20P%C3%A9!5e0!3m2!1ses!2sbr!4v1647536373771!5m2!1ses!2sbr" width="100%" height="600"></iframe>
        </Col>
        
      </Row>
    </Container>
  );
};
export { AddressMap };
