import './App.css'
import Button from 'react-bootstrap/Button';
import { Container, Navbar, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap';

function App() {

  return (
<Container className="text-center" style={{backgroundColor: 'cadetblue', width: '100%'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">GTA V</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" active>Inicio</Nav.Link>
              <Nav.Link href="#">¿Por qué jugar GTA V Roleplay?</Nav.Link>
              <NavDropdown title="Tipos de Servers en GTA V FIVEM" id="server-dropdown">
                <NavDropdown.Item href="#">Server 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Server 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="mt-4 justify-content-center">
        <Col md={4}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="GTA.png" alt="GTA" />
            <Card.Body>
              <Card.Title>¿Qué es GTA V?</Card.Title>
              <Card.Text>
                Grand Theft Auto V, más conocido como GTA, es un juego multijugador de acción-aventura donde experimentarás diferentes misiones a lo largo del juego.
              </Card.Text>
              <Card.Link href="https://www.rockstargames.com/es/gta-v">Juego aquí</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="gtaro.png" alt="GTA" />
            <Card.Body>
              <Card.Title>¿Qué es GTA V ROLPLAY?</Card.Title>
              <Card.Text>
                GTA ROLPLAY, es un mundo multijugador donde puedes crear a tu personaje, personificarlo a tu gusto y hacerte una vida dentro del juego, en este se usa la aplicación FIVEM.
              </Card.Text>
              <Card.Link href="https://fivem.net/">FIVEM</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
