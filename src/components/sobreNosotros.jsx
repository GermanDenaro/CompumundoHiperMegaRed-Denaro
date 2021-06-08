import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sobreNosotros = () => {
  return (
    <div className="container">
      <Row>
        <Col md={6} className="ml-4 mt-5">
          <img
            width={550}
            src="https://i.ytimg.com/vi/bag_2P-yKC8/hqdefault.jpg"
            alt=""
          />
        </Col>
        <Col md={5} className="mt-5 ml-2">
          <p>
            CumpumundoHyperMegaRed es un E-commerce creado por Homero Jay
            Simpson, vice presidente junior, el 15 de febrero de 1998 en una
            humilde casa en Springfield. El negocio fue creciendo poco a poco,
            hasta ser conocido por todo el mundo, a tal punto que hasta el
            mismisimo Bill Gates intento sabotearlo, con la excusa de que "no se
            hizo famoso firmando checkes". Afortunadamente pudo seguir con su
            negocio, y ahora estamos desparramados por todo el mundo.
          </p>
          <br />
          <p>
            {' '}
            Nuestras principales oficinas se encuentran en Nueva York, pero
            tambien estamos en la mayor parte de Argentina, Chile, Uruguay,
            Ecuador y México y con futuros planes de expandirnos hacia Europa y
            Asia, para agrandar el abanico de posibilidades al resto del mundo.
          </p>
          <Link to="/">
            <Button variant="info" className="float-right">
              Volver
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default sobreNosotros;
