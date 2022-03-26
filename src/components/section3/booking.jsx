import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Giftcard from '../gitcard/giftcard';

import './style.css'

export function Booking() {
   const { t } = useTranslation()
  return (
    <>
    <Container>
      <Row>

      <Col className="mt-5"> 
            <p className="h-title textcolor mb-0" >{t('services.title')}</p>
            <div id="indicator2"></div>   
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
            <p className="p-title textcolor mb-0 mb-3">{t('services.text')} </p>
            <button className="bnt-secundary mb-5">{t('services.btn')}</button>
            </Col>
        </Row>
        </Container>
    </>
  )
}





function BookingGiftcard() {
  return (
    <>
    <Container fluid className='bgBooking mt-5 mb-5'>
      <Row>
        <Col>
        <Booking/>
        </Col>
        <Col>
        <Giftcard/>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default BookingGiftcard