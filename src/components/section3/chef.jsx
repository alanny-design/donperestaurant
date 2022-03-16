import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Img1 from './img/chefe.png'

import './style.css'

function Chef() {
    const { t } = useTranslation()
  return (
    <>
    <Container className="bannerchef">
        <Row>
            <Col xs={6} sm={6} md={6}><img className="sizeimg m-2" src= {Img1} alt="Don Pé Logo"/></Col>
            <Col xs={12} sm={12} md={6} className="mt-2 alignleft">
            <p className="p-title bold mb-0"> {t('chefhistory.title')}</p>
            <div id="indicator"></div>
            <p className="p-subtitle sizebox mb-0"> 
                    {t('chefhistory.text')}
                </p>
            <p className="assignature mb-0"> 
                    {t('assignature.Cristobal')}
                </p>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Chef