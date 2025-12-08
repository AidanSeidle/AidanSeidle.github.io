import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import FloatingBackground from "./FloatingBackground";
import CafBar from "./CafBar";


function Layout({ children }) {
  const location = useLocation();

  return (
    <div style={{
        backgroundColor: '#1B1B1B',
      }}>
      {/* Row containing NavBar links */}
      <Row style={{backgroundColor:'#355E3B'}}>
        <Col style={{display:'grid', justifyContent:'center'}}>
          <Navbar>
            <Navbar.Brand as={Link} to="/">
              <h1 style={{
                  textAlign:'center',
                  color: 'white',
                  textShadow: '0px 2px 10px palegoldenrod',
                }}>
                  Aidan Seidle
              </h1>
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>

      {/* Row containing body content */}
      <Row style={{
          padding: '0',
          margin: '0',
          width: '100%',
          minHeight: '70vh',
          backgroundColor:'#EFE7DA',
          padding: '1.5% 3% 1.5% 3%',
        }}>
        {children}
      </Row>
    </div>
  );
}

export default Layout;
