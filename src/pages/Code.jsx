import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Code() {
  return (
    <div>
      <Row style={{
          textAlign:"Left"
        }}>
        <h2 style={{fontSize:'1.4em'}}>Projects</h2>
          <Col xs={5}>
            <Nav.Link
                as={Link}
                to={'/CodingProject_CaffeineCoachlla'}
                key={'/CodingProject_CaffeineCoachlla'}
                className={`pixel-internal-link`}
              >
              {'/CodingProject_CaffeineCoachlla' === '/CodingProject_CaffeineCoachlla' ? 'Caffeine Over Coachella' : '/CodingProject_CaffeineCoachlla'.replace('/', '').charAt(0).toUpperCase() + '/CodingProject_CaffeineCoachlla'.slice(2)}
            </Nav.Link>
          </Col>
          <p>You can also check out my <a href='https://github.com/AidanSeidle'>GitHub</a>.</p>
      </Row>
      <Row>
        <Col md='auto' style={{textAlign:'center'}}>
          <p>Pretty Good At These</p>
          <Row className="justify-content-md-center">
            <img class="icon" src="../assets/media/icons/python.png"/>
            <img class="icon" src="../assets/media/icons/matlab.png"/>
            <img class="icon" src="../assets/media/icons/tensorflow.png"/>
            <img class="icon" src="../assets/media/icons/github.png"/>
          </Row>
          <Row className="justify-content-md-center">
            <p>Decent At These</p>
            <img class="icon" src="../assets/media/icons/cpp.png"/>
            <img class="icon" src="../assets/media/icons/html.png"/>
            <img class="icon" src="../assets/media/icons/css.png"/>
            <img class="icon" src="../assets/media/icons/js.png"/>
          </Row>
          <Row className="justify-content-md-center">
            <p>Could Get It Done With These</p>
            <img class="icon" src="../assets/media/icons/php.png"/>
          </Row>
        </Col>
      </Row>
      

      
        
        
        
    </div>      
  );
}

export default Code;
