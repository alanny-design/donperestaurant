import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Img1 from './img/card1-foto1.png';
import Img2 from './img/card1-foto2.png';
import './section1.css'

function GridHistory() {
    const { t } = useTranslation()
  return (
      <>
      
    <Container className="bannerhistory mt-5">
        <Row>
            <Col xs={6} sm={6} md={4}><img className="cover mt-3 mb-0" src= {Img1} alt="Don Pé Logo"/></Col>
            <Col xs={6} sm={6} md={4}><img className="cover mt-3 mb-0" src= {Img2} alt="Don Pé Logo"/></Col>
            <Col xs={12} sm={12} md={4} className="mt-2 alignleft">
            <p className="p-title bold mb-0"> {t('history.title')}</p>
            <div id="indicator"></div>
            <p className="p-subtitle sizebox mb-0"> 
                    {t('history.text1')}
                </p>
                <p className="p-subtitle sizebox mb-0"> 
                    {t('history.text2')}
                </p>
                <p className="p-subtitle sizebox mb-0"> 
                    {t('history.text3')}
                </p>
                <p className="assignature mb-0"> 
                    {t('assignature.Israel')}
                </p>
            
            
            </Col>
        </Row>
    </Container>
      </>
  )
}

export default GridHistory