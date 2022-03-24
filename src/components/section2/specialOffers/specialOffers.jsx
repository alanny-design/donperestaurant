import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './specialOffers.css'
import Img1 from './img/img1.png';
import Img2 from './img/img2.png';
import Img3 from './img/img3.png';
import Img4 from './img/img4.png';


export default function SpecialOffers() {
    const { t } = useTranslation()

  return (
    <>
    <Container fluid className='bgOffers mt-5 mb-5'>
        <Row>
            <Col>
            
            <p className="h-title textcolor mb-0 mt-5" >{t('Offers.title')}</p>
            <div id="indicator2"></div>
            
            </Col>
        </Row>

        <Row className="m-5">
            <Col xs={6} sm={4} className='cardOffers m-2 mb-5'>
            <Col  xs={{ span: 3, offset: 8 }} sm={{ span: 3, offset: 8 }} > 
            <p className="h-subtitle bold textcolor ml-1 retangle" >{t('price.price1')}</p>
            </Col>
            <img className="imagOffers" src= {Img1} alt="Dish of the day"/>
            <p className="h-subtitle bold mt-2" >{t('Offers.dish1')}</p>
            <p className="p-subtitle mb-2" >{t('Offers.ingredient1')}</p>

            </Col>
            <Col xs={6} sm={4} className='cardOffers m-2 mb-5'>
            <Col  xs={{ span: 3, offset: 8 }} sm={{ span: 3, offset: 8 }} > 
            <p className="h-subtitle bold textcolor ml-1 retangle" >{t('price.price2')}</p>
            </Col>
            <img className="imagOffers" src= {Img2} alt="Dish of the day"/>
            <p className="h-subtitle bold mt-2" >{t('Offers.dish2')}</p>
            <p className="p-subtitle mb-2" >{t('Offers.ingredient2')}</p>

            </Col>
            
            <Col xs={6} sm={4} className='cardOffers m-2 mb-5'>
            <Col  xs={{ span: 3, offset: 8 }} sm={{ span: 3, offset: 8 }} > 
            <p className="h-subtitle bold textcolor ml-1 retangle" >{t('price.price3')}</p>
            </Col>
            <img className="imagOffers" src= {Img3} alt="Dish of the day"/>
            <p className="h-subtitle bold mt-2" >{t('Offers.dish3')}</p>
            <p className="p-subtitle mb-2" >{t('Offers.ingredient3')}</p>

            </Col>
            
            <Col xs={6} sm={4} className='cardOffers m-2 mb-5'>
            <Col  xs={{ span: 3, offset: 8 }} sm={{ span: 3, offset: 8 }} > 
            <p className="h-subtitle bold textcolor ml-1 retangle" >{t('price.price4')}</p>
            </Col>
            <img className="imagOffers" src= {Img4} alt="Dish of the day"/>
            <p className="h-subtitle bold mt-2" >{t('Offers.dish4')}</p>
            <p className="p-subtitle mb-2" >{t('Offers.ingredient4')}</p>

            </Col>
        </Row>
        </Container>
    </>
  )
}
