import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Row style={{
    border: '5px solid black',
    margin: '0',
    padding: '0 5%'
    }}>
    <Row style={{
        border: '5px solid black',
        margin: '5% 0 0 0',
    }}>
        <h2>Academic Interests</h2>
        <div>
        <p>
            Much of the visual system has been broken down and functionally replicated in computational systems while the auditory system has not received the same amount of attention.
            I hope to help develop these computational models of auditory processing.
            I believe that a computational understanding of how humans perceive sound will shed light on the fundamental sonic features required to give rise to complex, rich, experiences like music perception.
        </p>
        </div>
        <br />
        <h2>Free Time</h2>
        <div>
        <p>
            I like to skate and snowboard. I make subpar music, but I did win a rap battle once.
            <br /><br />
            I also enjoy a whole bunch of video games including but not limited to Minecraft, CS:GO, and the riveting Gas Station Simulator.
            <br /><br />
        </p>
        </div>
    </Row>

    <Row style={{ 
            padding : '0',
            margin: '5% 0 0 0',
            }}>
        <Col style={{ 
            border: '5px solid black',
            margin: '0',
            }}>
            <Row>
                <div>
                <h3>Projects</h3>
                <ul>
                    <li>
                    <Link to="/char-pixel" className="micro-header">Image Char-Pixelization</Link>
                    <p style={{fontSize: 'small'}}>Takes an image and creates a drawing of it using text characters.</p>
                    </li>
                </ul>
                </div>
            </Row>
        </Col>

        <Col style={{ 
            border: '5px solid black', 
            margin: 0
            }}>
        <h2>My Quick CV</h2>
        <ul>
            <li>
            <b>Research Assistant ~ Purdue ~ Dr. McPherson</b>
            <ul>
                <li>Psychoacoustic</li>
                <li>Perceptual Differences</li>
                <li>Auditory Preferences</li>
            </ul>
            </li>
            <li>
            <b>Undergrad Research Assistant ~ UCLA ~ Dr. Knowlton</b>
            <ul>
                <li>Perceptual Learning and Memory</li>
                <li>Modeling - DDM</li>
                <li>fMRI</li>
            </ul>
            </li>
            <br/>
            <li>
            <b>Cognitive Science B.S. ~ UCLA</b>
            <ul>
                <li>Specialization in Computing</li>
                <li>Music Industry Minor</li>
            </ul>
            </li>
        </ul>
        <br />
        <p>If interested, here is my less quick <a href="../assets/media/CV.pdf">CV</a>.</p>
        </Col>
    </Row>

    <Row style={{ border: '5px solid black', margin: '5% 0 0 0' }}>
        <Col style={{ border: '5px solid black', display: 'flex', justifyContent: 'center'}}>
            <a href="https://www.linkedin.com/in/aidan-seidle/" target="_blank">
                <img src="../assets/media/icons/LinkedInIcon.png" alt="Aidan Seidle LinkedIn" style={{maxWidth: '120px', width: '100%', height: 'auto', opacity: 0.5}}/>
            </a>            
        </Col>
        <Col style={{ border: '5px solid black', display: 'flex', justifyContent: 'center'}}>
            <a href="https://www.instagram.com/aidanseidle/" target="_blank">
                <img src="../assets/media/icons/InstagramIcon.png" alt="Aidan Seidle Instagram" style={{maxWidth: '120px', width: '100%', height: 'auto', opacity: 0.5}}/>
            </a>            
        </Col>
        {/* <Col></Col>
        <Col style={{ background: 'black', border: '5px solid black', margin: '0' }}>
        <div>
            <p>CRAZY MODE LINK DOOR</p>
        </div>
        </Col>
        <Col></Col> */}
    </Row>
    </Row>
  );
}

export default Home;
