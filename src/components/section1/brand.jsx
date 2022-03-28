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
    <Container fluid className="centralized section1">
        <Row >
            <Col>
              <img className="logosize" src= {Logo} alt="Don Pé Logo"/>
                <h1 className="h-title bold textcolor mt-3">{t('brand.title')}</h1>
                <p className="h-subtitle textcolor">{t('brand.subtitle1')}<br></br>{t('brand.subtitle2')}</p>
                
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default Brand;

