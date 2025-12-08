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
      {/* Row containing visuals and CafBar */}
      <Row>
        <Row style={{backgroundColor:'#1B1B1B', minHeight:'80%'}}>
          {/* Col containing name plate */}
          <Col sm={6} style={{
              display:'grid',
              textAlign:'center',      
              alignItems:'center'
            }}>
            <Navbar.Brand as={Link} to="/">
              <h1 style={{
                  color: 'white',
                  textShadow: '0px 2px 10px palegoldenrod',
                }}>
                  Aidan <br></br>Seidle
              </h1>
            </Navbar.Brand>
          </Col>
          {/* Col containing header image */}
          <Col sm={'auto'}>
            <img src={'../assets/media/NoBkgEEG.png'} 
              style={{
                width:'auto',
                minWidth:'100px',
                maxWidth: '200px',
              }}>
            </img>
          </Col>
          {/* Col containing CafBar */}
          <Col sm={true}
            style={{
              display:'grid',
              alignContent:'flex-end'
            }}>
            <CafBar />
          </Col>
        </Row>
        {/* Row containing NavBar links */}
        <Row style={{backgroundColor:'#355E3B'}}>
          <Col>
            <Navbar>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="navbarScroll" className="w-100">
                <Nav style={{padding:'0 0 0 3%'}} className="flex-row w-100" defaultActiveKey="/">
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
