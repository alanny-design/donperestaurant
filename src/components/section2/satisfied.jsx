import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


import Satisfiedimg from './icons/satisfied.svg';
import Lunches from './icons/lunches.svg';
import Tables from './icons/tables.svg';
import Team from './icons/team.svg';

function Satisfied() {
    const { t } = useTranslation()
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    {/* <Col>
                        <p className="h-subtitle">
                            {t('Satisfied.title')}
                        </p>
                    </Col> */}

                </Row>
                <Row className='boxsize'>
                    <Col>
                        <img className="icones" src={Satisfiedimg} alt="Satisfied guests in our restaurant" />
                        <p className="p-title bold m-0">
                            {t('Satisfied.num1')}
                        </p>
                        <p className="p-subtitle m-0">
                            {t('Satisfied.subtitle1')}
                        </p>

                    </Col>
                    <Col>
                        <img className="icones" src={Lunches} alt="Satisfied guests in our restaurant" />
                        <p className="p-title bold m-0">
                            {t('Satisfied.num2')}
                        </p>
                        <p className="p-subtitle m-0">
                            {t('Satisfied.subtitle2')}
                        </p>
                    </Col>

                    <Col>
                        <img className="icones" src={Tables} alt="Satisfied guests in our restaurant" />
                        <p className="p-title bold m-0">
                            {t('Satisfied.num3')}
                        </p>
                        <p className="p-subtitle m-0">
                            {t('Satisfied.subtitle3')}
                        </p>

                    </Col>

                    <Col>
                        <img className="icones" src={Team} alt="Satisfied guests in our restaurant" />
                        <p className="p-title bold m-0">
                            {t('Satisfied.num4')}
                        </p>
                        <p className="p-subtitle m-0">
                            {t('Satisfied.subtitle4')}
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Satisfied