import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css'

import CarouNuka from './carousel-opiniones.jsx';

function Testimonials() {
  const { t } = useTranslation()
  return (
    <Container className='mt-5 mb-5'>
      <Row >
        <Col className="mt-5">
          <p className="h-title bold mb-0" >{t('testimonials.title')}</p>
          <div id="indicator3"></div>
        </Col>
        <Col sm={12} className="mt-5">
          <CarouNuka />
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials