import React from 'react'
import { useTranslation } from 'react-i18next';
import {Container,Row,Col} from 'react-bootstrap';
//import logo
import Logo from './img/logo.png'

import '../../App.css'
import './section1.css'


function Brand() {
    const { t } = useTranslation()

  return (
    <>
    <Container fluid className="centralized">
        <Row>
        <Col><img className="logosize m-2" src= {Logo} alt="Don Pé Logo"/></Col>
        </Row>
        <Row >
            <Col>
                <h1 className="h-title textcolor mt-5">{t('brand.title')}</h1>
                <p className="h-subtitle textcolor mt-2">{t('brand.subtitle1')}<br></br>{t('brand.subtitle2')}</p>
                
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default Brand;

