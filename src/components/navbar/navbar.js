import React from "react";
import logo from "../../logo_principal.png";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Button

} from "react-bootstrap";
import { Link } from 'react-scroll'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand to="/" exact>
            <Image src={logo} style={{width: '70px', height:'70px'}} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="Menu" />
          <Navbar.Collapse id="Menu">
            <Nav className="me-auto" style={{ alignItems: "center" }}>
              <Nav.Link > <Link duration={500} to="Inicio" offset={-130}>Inicio</Link></Nav.Link>
              <Nav.Link ><Link duration={500} to="Nosotros" offset={-130}> Nosotros</Link> </Nav.Link>
              <Nav.Link><Link  duration={500} to="NuestroProyecto" offset={130}>Nuestro Proyecto</Link></Nav.Link>
            </Nav>
            <Button href="/login" variant="outline-light">Iniciar Sesión</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
