import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './style.css'

export function Reviews() {
    const { t } = useTranslation()
    return (
        <Container>
            <Row>
                <Col className="mt-5 ">
                    
                </Col>
                <Col className="mt-5 ">
                    
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <p className="p-title textcolor mb-0 mb-3">{t('services.text')} </p>
                </Col>
            </Row>
        </Container>
    )
}