import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import FloatingBackground from "./FloatingBackground";
import CafBar from "./CafBar";


function Layout({ children }) {
  const location = useLocation();

  return (
    <div
      style={{ position: 'relative', width: '100%', minHeight: '100vh', padding: '0%', margin: '0%', overflow: 'hidden'}}
    >
      {/* Background behind everything */}
      {/*<FloatingBackground />*/}
      {/* Foreground layout content */}
      <div style={{ display: 'flex', position: 'relative', minWidth: '100vw', padding: '0%', margin: '0%', zIndex: 1 }}>
        {/* Left Spacer */}
        <Container style={{ minWidth: '20%', width: '20%', padding: 0, margin: 0 }}></Container>

        {/* Main Content */}
        <Container style={{ padding: '2% 0 0 0', margin: 0, minWidth: '60%', width: '60%'}}> 
          <Col>
            {/* Header */}
            <Row style={{ margin: 0, height: '10%' }}>
              <Row style={{ textAlign: 'center', margin: 0 }}>
                <div style={{ width: '50%', margin: 'auto' }}>
                  <h1 style={{
                    margin: 0,
                    padding: 0,
                    color: 'white',
                    textShadow: '0px 2px 10px palegoldenrod',
                    border: '5px solid black',
                    borderRadius: '10px',
                    backgroundColor: 'rgb(22, 21, 34)'
                  }}>
                    Aidan Seidle
                  </h1>
                </div>
              </Row>
              {/* Decorative Bars */}
              <Row>
                <div style={{ margin: 0, padding: 0, height: '5px', width: '35%' }}></div>
                <div style={{ backgroundColor: 'grey', height: '5px', width: '2%' }}></div>
                <div style={{ margin: 0, padding: 0, height: '5px', width: '28%' }}></div>
                <div style={{ backgroundColor: 'grey', height: '5px', width: '2%' }}></div>
              </Row>
            </Row>

            {/* Dynamic Content */}
            <Row style={{
              background: 'rgb(22, 21, 34)',
              border: '5px solid black',
              margin: '0',
              minHeight: '100vh'
              }}>
              {children}
            </Row>
          </Col>
        </Container>

        {/* Right Side Nav */}
        <Container style={{
              padding: '12% 0 0 0',
              margin: '0',
              minWidth: '10%',
              width: '10%',
              }}>
              <Row style={{
                  minWidth: '85%',
                  padding: '0',
                  margin: '0'
                  }}>
                  <Col style={{
                      padding: '0',
                      margin: '0',
                      maxWidth: '7%',
                      width: '7%',
                      }}>
                      <div style={{
                          backgroundColor: 'grey',
                          margin: '0',
                          padding: '0',
                          height: '5px',
                          }}>
                          <p> </p>
                      </div>   
                      <div style={{
                          margin: '0',
                          padding: '0',
                          height: '50%',
                          }}>
                          <p> </p>
                      </div> 
                      <div style={{
                          backgroundColor: 'grey',
                          margin: '0',
                          padding: '0',
                          height: '5px',
                          }}>
                          <p> </p>
                      </div>          
                  </Col>
                  <Col style={{
                      background: 'rgb(22, 21, 34)',
                      border: '5px solid black',
                      padding: '0',
                      margin: '0',
                      }}>
                      <Navbar expand="lg" className="flex-column align-items-start">
                          <Navbar.Toggle aria-controls="navbarScroll" />
                          <Navbar.Collapse id="navbarScroll" className="w-100">
                            <Nav className="flex-column w-100" defaultActiveKey="/">
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
              </Row>
              <Row style={{
                  minWidth: '85%',
                  padding: '20px 0 0 0',
                  margin: '0'
                  }}>
                  <Col style={{
                      padding: '0',
                      margin: '0',
                      maxWidth: '7%',
                      width: '7%',
                      }}>
                      <div style={{
                          backgroundColor: 'grey',
                          margin: '0',
                          padding: '0',
                          height: '5px',
                          }}>
                          <p> </p>
                      </div>   
                      <div style={{
                          margin: '0',
                          padding: '0',
                          height: '30%',
                          }}>
                          <p> </p>
                      </div> 
                      <div style={{
                          backgroundColor: 'grey',
                          margin: '0',
                          padding: '0',
                          height: '5px',
                          }}>
                          <p> </p>
                      </div>          
                  </Col>
                  <Col style={{
                      background: 'rgb(22, 21, 34)',
                      border: '5px solid black',
                      padding: '5px',
                      margin: '0',
                      minWidth: '85%',
                      minHeight: '100px',
                      }}>
                    <CafBar />
                  </Col>
              </Row>
          </Container> 
      </div>
    </div>
  );
}

export default Layout;
