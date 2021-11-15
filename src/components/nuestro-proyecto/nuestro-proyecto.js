import React from "react";
//import image from '../../images/images.jfif';
import { Row, Col, Card } from "react-bootstrap";

export default class NuestroProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title id="NuestroProyecto">Nuestro Proyecto</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="secondary" text="white">
              <Card.Body style={{ height: "384px" }}>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Necesidad o Problema:</p>
                  <br />
                  La institución educativa Colegio Latino no cuenta con un
                  sistema de información para la gestión del inventario
                  tecnológico, la herramienta con la que llevan el registro de
                  los elementos es con hojas de excel y con los libros contables
                  de la institución.
                  <br />
                  <br />
                  La institución hace préstamos de algunos de estos equipos a
                  profesores dada la coyuntura de la no presencialidad de
                  estudiantes para que estos puedan realizar las clases de
                  manera remota y el registro no se realiza a satisfacción.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="primary" text="white">
              <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Solución y Objetivo:</p>
                  <br />
                  Diseñar e implementar una herramienta de software para la
                  Institución educativa Colegio Latino que les permita tener el
                  control de inventarios de los equipos tecnológicos.
                  <br /> Por medio de este diseño web administrador podrá tener
                  un control del inventario de sus equipos tecnológicos y de las
                  personas que acceden a este.
                  <br />
                  <br />
                  Los usuarios que tengan los permisos para acceder al
                  inventario podrán actualizar la base de datos (ingresar nuevos
                  equipos, eliminar algún registro, modificarlo) o realizar una
                  consulta sobre los equipos existentes.
                  <br />
                  Además, la plataforma también debe permitir la reserva de los
                  equipos para estudiantes y docentes, donde podrán consultar la
                  cantidad y disponibilidad de equipos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title id="NuestroProyecto">Requerimientos</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body >
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Requerimientos funcionales:</p>
                  <br />
                  <li>Administración de acceso de usuarios</li>

                  <li>Administrar entradas de inventario</li>

                  <li>Administrar salidas de inventario</li>

                  <li>
                    Presentación de la información referente a las existencias
                    del inventario
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card bg="light">
              <Card.Body style={{ height: "192px" }}>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p>Requerimientos no funcionales:</p>
                  <br />
                  <li>Acceso web</li>

                  <li>Seguridad de acceso</li>

                  <li>Acceso solo por la aplicación</li>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}
