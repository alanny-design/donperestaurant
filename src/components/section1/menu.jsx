import React from 'react';
import { useTranslation } from 'react-i18next';
import {Container,Row,Col} from 'react-bootstrap';
//import logo
import Logo from './img/logo.png'

import '../../App.css'
import './section1.css'

function Menu() {
    const { t } = useTranslation()
  return (
    <>
    <Container fluid className="centralized">
        <Row >
            <Col>
              <img className="logosize" src= {Logo} alt="Don Pé Logo"/>
                <h1 className="h-title textcolor mt-3">{t('services.title')}</h1>
                <p className="h-subtitle textcolor containersize">{t('services.text')}</p>
                
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Menu