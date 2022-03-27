import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Img1 from './img/card1-foto1.png';
import Img2 from './img/card1-foto2.png';
import './section1.css'

function GridHistory() {
    const { t } = useTranslation()
    return (
        <>
            <Container className="bannerhistory mt-5">
                <Row className="mobileimg">
                    <Col xs={3} sm={6} md={12} lg={5} className="imgsize">
                        <img className="imagems" src={Img2} alt="Don Pé" />
                        <img className="imagems "src={Img1} alt="Don Pé" />
                    </Col>
                    {/* <Col xs={3} sm={3} md={4} lg={4} className="imgsize"><img src={Img1} alt="Don Pé" />
                    </Col> */}

                    <Col xs={12} sm={12} md={12} lg={6} className="mt-2 alignleft">
                        <p className="p-title bold mt-3 mb-0"> {t('history.title')}</p>
                        <div id="indicator"></div>
                        <span className="p-subtitle sizebox">
                            {t('history.text1')} {t('history.text2')} {t('history.text3')}
                        </span> <br></br>
                        <span className="assignature">
                            {t('assignature.Israel')}
                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GridHistory