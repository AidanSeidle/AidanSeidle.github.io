import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Col>
            <Row style={{ 
                    margin: '0 0 5% 0',
                    }}>
                <div>
                    <h2 style={{fontSize:'1.4em'}}>About</h2>
                    <p>
                        I am currently working as a lab manager and research assistant in Dr. Malinda McPherson's Auditory Perception Lab at Purdue University researching auditory perception and individual differences. 
                        Previously, I worked in Dr. Barbara Knowlton's Cognitive Neuroscience Lab at UCLA where I earned my B.S. in Cognitive Science with a Specialization in Computing and a minor in Music Industry.
                    </p>
                    <p>If interested, my less quick CV is <a href="../assets/media/CV.pdf">here</a>.</p>

                    
                </div>
            </Row>

            <Row style={{ 
                    margin: '0 0 5% 0',
                    }}>
                {/* <Col>
                    <Row>
                        <div>
                        <h2 style={{fontSize:'1.4em'}}>Personal Projects</h2>
                        <ul>
                            <li>
                            <Link to="/char-pixel" className="micro-header">Image Char-Pixelization</Link>
                            <p style={{fontSize: 'small'}}>Takes an image and creates a drawing of it using text characters.</p>
                            </li>
                        </ul>
                        </div>
                    </Row>
                </Col> */}

                <Col>
                    <h2 style={{fontSize:'1.4em'}}>Recent Events</h2>
                    <table>
                        <Row>
                        <Col style={{maxWidth:'15%'}}>
                            <thead>2025</thead>
                        </Col>
                        <Col>
                            <tbody>
                                <tr>
                                    <a href='https://2025.ccneuro.org/poster/?id=vubKyNUb5R'>CCN</a> - Training on Ecologically Relevant Tasks Improves Alignment Between Artificial Neural Network and Human Similarity Judgements
                                </tr>
                                <br />
                                <tr>
                                    <a href='https://escholarship.org/uc/item/5jq714hc'>CogSci</a> - The Temporal Evolution of Implicit Bias in Perceptual Decision-Making
                                </tr>
                                <br />
                                <tr>
                                    <a href='https://pmg.joynadmin.org/documents/1050/67be84f67cd0475b3916b6f2.pdf#page=443'>ARO</a> - Cross-Culturally Shared Sensitivity to Harmonic Structure Underlies Aspects of Pitch Discrimination
                                </tr>
                            </tbody>
                        </Col>
                        </Row>
                        
                        
                    </table>
                    <br />
                </Col>
            </Row>
        </Col>
    </div>
  );
}

export default Home;
