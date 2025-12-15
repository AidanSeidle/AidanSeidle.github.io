import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Col>
            <Row>
                <h2 style={{fontSize:'1.4em'}}>Caffeination Over Coachella</h2>
                <p>
                    &emsp;I have been honing my exact caffeine preferences for over a year now. 
                    As logged in the header of this website, I have tracked every caffeinated product I have consumed since 11/6/2024. 
                    The activate counter was a fun project and will be described in another post, and over the course of that documenting I quantified 
                    just how much caffeine I actually consume on a regular basis. However, caffeine is also helpful for events that do not fall 'on a regular basis'. 
                    One such event I attend yearly with my college friends in the Coachella Valley Music and Arts Festival, affectionality and hereby called Coachella.
                    This three day music festival occurs in April and the music is performed from roughly 1pm to 1am, though with travel time to and from the grounds 
                    it is more of a 3pm to 3am endeavour. Thus, the benefits of caffeine can be truly realized. With my log of caffeine running during this most recent 2025 festival 
                    I thought it would be interesting to track dosage over the course of the festival. In conjunction with an Ultrahuman ring tracking my heart rate, I was able to produce 
                    graphs that showed my caffeination and associated heart rate over the duration of the festival. I also shaded the sets I attended in different colors to show the general 
                    activity during that time.
                </p>
                <p>
                    &emsp;To create a cumulative dosage timeline, a vector spanning the entire duration of the festival is intialized with a variable time resolution. I chose 1 minute for visual 
                    smoothness. Then, each entry of
                    caffeine intake in the caffeine log is added to the time line to ensure overlapping doses correctly sum. For each entry, a new timeline spanning the entire festival 
                    is created and the dose half life is calculated based on intake time from the log. The half life of caffeine in the body is roughly 5 hours and the simulated dose was 
                    cut off once &lt;1mg remained. The half life equation used:
                </p>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <img src='../assets/media/half_life_equation.png'></img>
                    </Col>
                </Row>
                <p></p>
                <p>
                    &emsp;In addition to caffeine, I superimposed my heart rate over the duration of festival onto the dose graphs. The heart rate data was much less consistent due to the collection 
                    device that often spun on my finger or would have lapses in collection based on interal functions designed to increase resolution once a 'workout' event is detected. 
                    Additionaly, the ring's method is not continual monitroing, but rather routine check ins 4 minutes apart. So, if you dance for a 3 minute song and then don't 
                    dance for the next, the check in could miss a song and not accurately represent short bursts of increased heart rate. For this reason, I was relatively certain that moment 
                    to moment heart rate tracking was already too low resolution for any changes within a performance. So, for greater legibility, I smoothed the heart rate data with a 
                    rolling mean with a kernel size of 30 minutes without much concern over data loss.
                </p>
                <p>
                    &emsp;The resultant graphs show the level of caffeine in my body at every minute on the left y-axis and my heart rate on the right y-axis across minutes of festival on the x-axis. 
                    Sets are shaded and labeled in the legend of each day's graph. 
                </p>
                <p>
                    &emsp;As a bonus, on the third day, the graph extends to show my caffeination level up to my 9:30am flight home after the festival. Several energy drinks were had on the 
                    drive from the hotel to the airport after the last set. I successfully made it to the airport at 7am, but it was quite a haul.
                </p>

                <h3 style={{fontSize:'1.4em'}}>Day 1</h3>
                <img src='../assets/media/coachella_day_1_hr.png'></img>
                <h3 style={{fontSize:'1.4em'}}>Day 2</h3>
                <img src='../assets/media/coachella_day_2_hr.png'></img>
                <h3 style={{fontSize:'1.4em'}}>Day 3</h3>
                <img src='../assets/media/coachella_day_3_hr.png'></img>   
            </Row>
        </Col>
    </div>
  );
}

export default Home;
