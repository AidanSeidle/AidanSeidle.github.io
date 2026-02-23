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
                    <h2 style={{fontSize:'1.4em'}}>About</h2>
                    <p>
                        I am currently working as a lab manager and research assistant in Dr. Malinda McPherson's Auditory Perception Lab at Purdue University researching auditory perception and individual differences. 
                        Previously, I worked in Dr. Barbara Knowlton's Cognitive Neuroscience Lab at UCLA where I earned my B.S. in Cognitive Science with a Specialization in Computing and a minor in Music Industry.
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
                    <h2 style={{fontSize:'1.4em'}}>Recent Events</h2>
                    <table>
                        <Row>   
                            <Col style={{maxWidth:'15%'}}>
                                <h2 style={{fontSize:'1.4em'}}>2026</h2>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Header style={{backgroundColor:'#355E3B', color: 'palegoldenrod'}}  as="h5">ARO</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Benchmarking Artificial Neural Network Models of Human Auditory Processing With Sound Similarity Judgements</Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                        <Button href='https://pmg.joynadmin.org/documents/1050/697a42ba13817023db68dce3.pdf#page=460' target="_blank" variant="custom_card">Abstract</Button>
                                        <Card.Title>Robustness to Noise Reveals Cross-Culturally Consistent Properties of Pitch Perception for Harmonic and Inharmonic Sounds</Card.Title>
                                        <Card.Text>
                                            Contributing Author
                                        </Card.Text>
                                        <Button href='https://pmg.joynadmin.org/documents/1050/697a42ba13817023db68dce3.pdf#page=173' target="_blank" variant="custom_card">Abstract</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>   
                            <Col style={{maxWidth:'15%'}}>
                                <h2 style={{fontSize:'1.4em'}}>2025</h2>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Header style={{backgroundColor:'#355E3B', color: 'palegoldenrod'}} as="h5">CCN</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Training on Ecologically Relevant Tasks Improves Alignment Between Artificial Neural Network and Human Similarity Judgements</Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                        <Button href='https://2025.ccneuro.org/poster/?id=vubKyNUb5R' target="_blank" variant="custom_card">Abstract</Button>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card>
                                    <Card.Header style={{backgroundColor:'#355E3B', color: 'palegoldenrod'}} as="h5">CogSci</Card.Header>
                                    <Card.Body>
                                        <Card.Title>The Temporal Evolution of Implicit Bias in Perceptual Decision-Making</Card.Title>
                                        <Card.Text>
                                            Contributing Author
                                        </Card.Text>
                                        <Button href='https://escholarship.org/uc/item/5jq714hc' target="_blank" variant="custom_card">Abstract</Button>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card>
                                    <Card.Header style={{backgroundColor:'#355E3B', color: 'palegoldenrod'}} as="h5">ARO</Card.Header>
                                    <Card.Body>
                                        <Card.Title> Cross-Culturally Shared Sensitivity to Harmonic Structure Underlies Aspects of Pitch Discrimination</Card.Title>
                                        <Card.Text>
                                            Presenting Author
                                        </Card.Text>
                                        <Button href='https://pmg.joynadmin.org/documents/1050/67be84f67cd0475b3916b6f2.pdf#page=443' target="_blank" variant="custom_card">Abstract</Button>
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
