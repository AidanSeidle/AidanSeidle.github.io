import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import CafBar from "./CafBar";

function Header() {
  return (
    <header>
      <Navbar sticky="top" expand="lg" className="custom-bg custom-navbar p-3">
        <Container fluid>
          // Row containing visuals and CafBar
          <Row> 
            <Col>
              <Navbar.Brand as={Link} to="/">Aidan Seidle</Navbar.Brand>
            </Col>
            <Col>
              <img src={'NoBkgEEG.png'}></img>
            </Col>
            <Col>
              <CafBar />
            </Col>
          </Row>
          // Row containing nav links
          <Row>
            <Col>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav
                  defaultActiveKey="/" 
                >
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/code">Code</Nav.Link>
                  <Nav.Link as={Link} to="/music">Music</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
