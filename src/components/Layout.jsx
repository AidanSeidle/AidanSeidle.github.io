import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import FloatingBackground from "./FloatingBackground";
import CafBar from "./CafBar";


function Layout({ children }) {
  const location = useLocation();

  return (
    <div style={{
        margin: '0',
        padding: '2.5% 17%',
        backgroundColor: 'rgb(22, 21, 34)'
      }}>
      <Row>
        <Col>
          <Navbar>
            <Navbar.Brand>
              <h1 style={{
                color: 'white',
                textShadow: '0px 2px 10px palegoldenrod',
              }}>
                Aidan Seidle
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbarScroll" className="w-100">
              <Nav className="flex-row w-100" defaultActiveKey="/">
                {['/', '/code', '/music'].map((path) => (
                  <Nav.Link
                    as={Link}
                    to={path}
                    key={path}
                    className={`pixel-nav-link${location.pathname === path ? ' active' : ''}`}
                  >
                    {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col style={{alignContent:'center'}}>
          <CafBar />
        </Col>
      </Row>
      <Row style={{
              minHeight: '70vh'
              }}>
        {children}
      </Row>
      
    </div>
  );
}

export default Layout;
