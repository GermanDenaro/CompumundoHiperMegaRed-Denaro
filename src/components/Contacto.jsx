import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Button } from 'react-bootstrap';
import mapa from '../Images/mapa.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Contacto = () => {
  return (
    <div className="container mt-4">
      <Row>
        <Col md={7}>
          <Image src={mapa} fluid width={600} />
        </Col>
        <Col md={5}>
          <p>
            Nos encontramos en Estados Undidos, Nueva York, Springfield, sobre
            la calle Evergreen Ave <strong>1524</strong>
          </p>
          <br />
          <p>Nuestras redes sociales:</p>
          <div className="container">
            <Row>
              <Col md={1}>
                <a href="http://www.facebook.com" target="_blank">
                  <FacebookIcon fontSize="large" className="facebook-icon" />
                </a>
              </Col>
              <Col md={11}>
                <p className="ml-3 mt-1 font-weight-bold">Facebook</p>
              </Col>
              <Col md={1}>
                <a href="http://www.twitter.com" target="_blank">
                  <TwitterIcon fontSize="large" className="twitter-icon" />
                </a>
              </Col>
              <Col md={11}>
                <p className="ml-3 mt-1 font-weight-bold">Twitter</p>
              </Col>
              <Col md={1}>
                <a href="http://www.instagram.com" target="_blank">
                  <InstagramIcon fontSize="large" className="instagram-icon" />
                </a>
              </Col>
              <Col md={11}>
                <p className="ml-3 mt-1 font-weight-bold">Instagram</p>
              </Col>
            </Row>
          </div>
          <p className="mt-3">Nuestro correo:</p>
          <div className="container">
            <Row>
              <Col md={1}>
                <AlternateEmailIcon
                  fontSize="large"
                  className="facebook-icon"
                />
              </Col>
              <Col md={11}>
                <p className="ml-3 mt-1 font-weight-bold">
                  compumundo@hipermegared.com
                </p>
              </Col>
            </Row>
          </div>
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

export default Contacto;
