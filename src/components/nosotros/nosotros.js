import React, { Component } from "react";
import { Col, Row, Carousel, Card } from "react-bootstrap";
import image1 from "../../images/MCT2022.jpg";
import image2 from "../../images/utp.jpg";

class Nosotros extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col >
            <Card border="dark">
              <Card.Body>
                <Card.Title id="Nosotros">Nosotros</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  Somos parte del grupo 35 de Desarrollo de Aplicaciones Web - ciclo 4, donde se ha realizado la profundización en Frameworks y arquitecturas de software que nos permiten realizar software de mejor calidad.
                  <br/>
                  <br/>
                  Nuestro equipo:

                  <br/>
                  <li>Yoan Steiner Huaca Valdes</li>
                  <li>Miguel Ángel Barragán Sarmiento</li>
                  <li>Oswaldo Quiñonez Muñoz</li>
                  <li>Jhon Jairo Orozco Vidal</li>
                  <li>Gerardo Salcedo Pereira</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card border="dark">
            <Carousel border="dark">
              <Carousel.Item>
                <img className="d-block w-100" style={{width:'634px',height:'304px'}} src={image1} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" style={{width:'634px',height:'304px'}} src={image2} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Nosotros;
