import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./style.css";

export function Reviews1() {
  const { t } = useTranslation();
  return (
    <Container className="centralized boxshadow mt-5 mb-5">
      <Row>
        <Col className="column">
          <img
            className="avatarsize"
            src="https://media-cdn.tripadvisor.com/media/photo-l/0c/46/86/58/pacoeli.jpg"
            alt="Don Pé reviews"
          />
          <p className="p-subtitle">Pacoeli</p>
        </Col>
        <Row className="mt-2">
          <Col>
            <p className="p-ingredients">
              Una cena maravillosa. La ensalada de frutas exquisita. Las carnes
              muy buenas, la calidad\ Precio , muy buena. El personal súper
              atentos y muy profesionales, un lugar muy acogedor. Sirven medias
              botellas de vino y esto , le da un punto de calidad. Restaurante
              recomendado.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export function Reviews2() {
  const { t } = useTranslation();
  return (
    <Container className="centralized boxshadow mt-5 mb-5">
      <Row>
        <Col className="column">
          <img
            className="avatarsize"
            src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ea/b2/default-avatar-2020-69.jpg"
            alt="Don Pé reviews"
          />
          <p className="p-subtitle">Cogerlopalcirco</p>
        </Col>
        <Row className="mt-2">
          <Col>
            <p className="p-ingredients">
              Buenas, entramos al restaurante de casualidad y que alegría de
              haberlo hecho. Espectacular el servicio, nos trataron muy muy
              bien, nos aconsejaron....sitio al que repetiremos sin lugar a
              dudas, local con una decoración especial. La comida nos encantó,
              todo en su justa medida. Si vais a Fuengirola no dudeis en acudir
              a este establecimiento.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export function Reviews3() {
  const { t } = useTranslation();
  return (
    <Container className="centralized boxshadow mt-5 mb-5">
      <Row>
        <Col className="column">
          <img
            className="avatarsize"
            src="	https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e2/11/default-avatar-2020-41.jpg"
            alt="Don Pé reviews"
          />
          <p className="p-subtitle">SurfWave M</p>
        </Col>
        <Row className="mt-2">
          <Col>
            <p className="p-ingredients">
              para nosotros, el mejor restaurante de Fuengirola, la comida
              estuvo espectacular, el trato inmejorable, es un local con
              muchisimo encanto, se lo recomendamos a todas las familias,
              deseando de volver. Un saludo
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export function Reviews4() {
  const { t } = useTranslation();
  return (
    <Container className="centralized boxshadow mt-5 mb-5">
      <Row>
        <Col className="column">
          <img
            className="avatarsize"
            src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/ca/default-avatar-2020-51.jpg"
            alt="Don Pé reviews"
          />
          <p className="p-subtitle">Javierd817</p>
        </Col>
        <Row className="mt-2">
          <Col>
            <p className="p-ingredients">
              Cenamos en nochevieja. El personal hizo muy agradable la cena,
              especialmente para las uvas. Todo muy bueno, servido con atención
              y esmero. A pesar de estar en zona de playa los extranjeros que
              había eran habituales y no los "guiris" que te sueles encontrar en
              ciertas zonas. Todo perfecto.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export function Reviews5() {
  const { t } = useTranslation();
  return (
    <Container className="centralized boxshadow mt-5 mb-5">
      <Row>
        <Col className="column">
          <img
            className="avatarsize"
            src="https://media-cdn.tripadvisor.com/media/photo-l/0e/43/29/11/raquel-a.jpg"
            alt="Don Pé reviews"
          />
          <p className="p-subtitle">RAQUEL A</p>
        </Col>
        <Row className="mt-2">
          <Col>
            <p className="p-ingredients">
              Restaurante con mucho encanto, acogedor y tranquilo en el patio
              situado al final del restaurante. Buen servicio (a pesar de que
              estaba muy lleno) y buena calidad-precio.Volvería seguro.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}



