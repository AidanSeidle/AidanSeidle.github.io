import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import FloatingBackground from "./FloatingBackground";
import CafBar from "./CafBar";


function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      {/* Col containing entire page */}
      <Col>
        {/* Row containing entire header */}
        <Row style={{
          maxWidth: '100vw',
          maxHeight: '4%',
          padding:'0 0 0 5%'
        }}>
          {/* Col containing name plate and NavBar links */}
          <Col lg="10">
            {/* Row containing name plate */}
            <Row style={{
                  display:'grid',
                  textAlign:'left',      
                  alignItems:'center',
            }}>
              <Navbar.Brand as={Link} to="/">
                <h1 style={{
                    fontSize: '3rem',
                    color: 'white',
                    textShadow: '0px 2px 10px palegoldenrod',
                    padding:'5% 0 0 0'
                  }}>
                    Aidan Seidle
                </h1>
              </Navbar.Brand>
            </Row>

            {/* Row containing NavBar links and CafBar */}
            <Row style={{backgroundColor:'#111717'}}>
              {/* Col containg NavBar links */}
              <Col>
                <Navbar>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav defaultActiveKey="/">
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

              {/* Col containing CafBar */}
              <Col
                style={{
                  alignContent:'center',
                  textAlign:'right',      
                }}>
                <CafBar />
              </Col>
            </Row>
          </Col>

          {/* Col containing header image */}
          <Col lg="2" style={{
                  alignContent:'flex-end',
          }}>
            <img src={'../assets/media/NoBkgEEG.png'} 
              style={{
                maxWidth:'10vw'
              }}>
            </img>
          </Col>
        </Row>

        {/* Row containing body content */}
        <Row style={{
            maxWidth: '100vw',
            backgroundColor:'#050505',
            padding: '1.5% 3% 1.5% 3%',
          }}>
          {children}
        </Row>

      </Col>
    </div>
  );
}

export default Layout;
