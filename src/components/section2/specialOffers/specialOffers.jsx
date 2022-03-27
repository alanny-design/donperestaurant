import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './specialOffers.css'
import CarouselOffers from './carousel/carouselOffers';


export default function SpecialOffers() {
    const { t } = useTranslation()

  return (
    <>
    <Container fluid className='bgOffers mt-5 mb-5'>
        <Row>
            <Col>
            
            <p className="h-title textcolor bold mb-0 mt-5" >{t('Offers.title')}</p>
            <div id="indicator4"></div>
            
            </Col>
        </Row>

        <Row >
            <Col className="mt-5">
            <CarouselOffers/>
            </Col>

        </Row>
        </Container>
    </>
  )
}
