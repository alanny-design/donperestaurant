import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Img1 from './img/testimonials.png';
import './style.css'

function Testimonials() {
    const { t } = useTranslation()
  return (
    <>
    <Container fluid className='mt-5 mb-5'>
        <Row > 
        <Col className="mt-5"> 
            <p className="h-title bold mb-0" >{t('testimonials.title')}</p>
            <div id="indicator3"></div>   
            </Col>
            <Col sm={12}>
            <img className="testimonials mt-5 mb-5" src= {Img1} alt="Dish of the day"/>
            </Col>

        </Row>
    </Container>
    </>
  )
}

export default Testimonials