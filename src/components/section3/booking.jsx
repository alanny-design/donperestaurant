import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Booking() {
   const { t } = useTranslation()
  return (
    <>
    <Container fluid className='bgBooking mt-5 mb-5'>
        <Row>
            <Col>
            <p className="h-title textcolor mb-0 mt-5" >{t('services.title')}</p>
            <p className="p-title textcolor mb-0 mb-3">{t('services.text')} </p>
            <button className="bnt-secundary mb-5">{t('services.btn')}</button>
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default Booking