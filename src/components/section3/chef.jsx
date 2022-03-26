import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Img1 from './img/chefe.png'

import './style.css'

function Chef() {
    const { t } = useTranslation()
<<<<<<< HEAD
  return (
    <>
    <Container className="bannerchef">
        <Row>
            <Col xs={12} sm={12} md={12} lg={6} className="imgcontainer mb-2"><img src= {Img1} alt="Don Pé Chef"/></Col>
            <Col xs={12} sm={12} md={12} lg={6} className="marginmobile alignleft">
            <p className="p-title bold mb-0 mt-3"> {t('chefhistory.title')}</p>
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
=======
    return (
        <>
            <Container className="bannerchef">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className="imgcontainer mb-2"><img src={Img1} alt="Don Pé Chef" /></Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="marginmobile alignleft">
                        <p className="p-title bold mb-0"> {t('chefhistory.title')}</p>
                        <div id="indicator"></div>
                        <p className="p-subtitle sizebox mb-0">
                            {t('chefhistory.text1')}
                        </p>
                        <p className="p-subtitle sizebox mb-0">
                            {t('chefhistory.text2')}
                        </p>
                        <p className="assignature mb-0">
                            {t('assignature.Cristobal')}
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
>>>>>>> 25deb72c1e2e977c6ad402a198372176d3c493c1
}

export default Chef