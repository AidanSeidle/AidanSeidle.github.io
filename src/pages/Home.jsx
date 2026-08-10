import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
        <Col>
            <Row>
                <div>
                    <h2>About</h2>
                    <p>
                        I am currently a Cognitive Neuroscience PhD student studying under Dr. Jenelle Feather in the Psychology Department at Carnegie Mellon University.
                        Previously, I worked as a lab manager and research assistant in Dr. Malinda McPherson's Auditory Perception Lab at Purdue University researching auditory perception and individual differences. 
                        Before that, I worked in Dr. Barbara Knowlton's Cognitive Neuroscience Lab at UCLA where I earned my B.S. in Cognitive Science with a Specialization in Computing and a minor in Music Industry.
                    </p>
                    <p>If interested, my less quick CV is <a href="../assets/media/CV.pdf">here</a>.</p>

                    
                </div>
            </Row>

            <Row>
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
                    <h2>Recent Events</h2>
                    <table>
                        <Row>   
                            <Col style={{maxWidth:'7%'}}>
                                <h2 style={{color: '#919797'}}>2026</h2>
                            </Col>
                            <Col>
                                <Card style={{backgroundColor: '#1B1B1B', color: '#919797'}}>
                                    <Card.Header style={{backgroundColor:'#1B1B1B', color: 'white'}} as="h5">ARO</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://aro.org/wp-content/uploads/2026/04/ARO-2026-MWM-Abstract-Book-1.pdf#page=460' target="_blank">
                                            Benchmarking Artificial Neural Network Models of Human Auditory Processing With Sound Similarity Judgements
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                        <p></p>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://aro.org/wp-content/uploads/2026/04/ARO-2026-MWM-Abstract-Book-1.pdf#page=173' target="_blank">
                                            Robustness to Noise Reveals Cross-Culturally Consistent Properties of Pitch Perception for Harmonic and Inharmonic Sounds
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Contributing Author
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>   
                            <Col style={{maxWidth:'7%'}}>
                                <h2 style={{color: '#919797'}}>2025</h2>
                            </Col>
                            <Col>
                                <Card style={{backgroundColor: '#1B1B1B', color: '#919797'}}>
                                    <Card.Header style={{backgroundColor:'#1B1B1B', color: 'white'}} as="h5">APAN</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://www.med.upenn.edu/apan/apan-session-browser-2025.html' target="_blank">
                                            Cross-Culturally Shared Sensitivty to Harmonic Structure Underlies Some Aspects of Pitch Perception
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Contributing Author - Search for 'Seidle'
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{backgroundColor: '#1B1B1B', color: '#919797'}}>
                                    <Card.Header style={{backgroundColor:'#1B1B1B', color: 'white'}} as="h5">CCN</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://2025.ccneuro.org/poster/?id=vubKyNUb5R' target="_blank">
                                            Training on Ecologically Relevant Tasks Improves Alignment Between Artificial Neural Network and Human Similarity Judgements
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{backgroundColor: '#1B1B1B', color: '#919797'}}>
                                    <Card.Header style={{backgroundColor:'#1B1B1B', color: 'white'}} as="h5">CogSci</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://escholarship.org/uc/item/5jq714hc' target="_blank">
                                            The Temporal Evolution of Implicit Bias in Perceptual Decision-Making
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Contributing Author
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card style={{backgroundColor: '#1B1B1B', color: '#919797'}}>
                                    <Card.Header style={{backgroundColor:'#1B1B1B', color: 'white'}} as="h5">ARO</Card.Header>
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'0.9em'}}>
                                            <a href='https://pmg.joynadmin.org/documents/1050/67be84f67cd0475b3916b6f2.pdf#page=443' target="_blank">
                                            Cross-Culturally Shared Sensitivity to Harmonic Structure Underlies Aspects of Pitch Discrimination
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
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
