import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import './pages.css';

export function AboutMe() {
    return (
        <Container className="generalText" fluid>
            <Container>
                <Row>
                    <h2 className="cc">Introduction</h2>
                    <p className="ubuntu aboutme">To anyone taking the time to learn a bit about me, welcome! My name is Joey Cruz,
                        I was born and raised in South Texas. I am part of a loving family of 7, of which I have 2 amazing parents and 4 ok sisters.
                        I have also been blessed to have an amazing girlfriend of 4 years, and the same group of close friends for 12+ years.
                    </p>
                </Row>
                <Row className='mb-3'>
                <Col xs lg={6}>
                    <Container className='sectionBack shadow-lg'>
                        <div className='example2'>
                            <h5 className='hobbyH'>Current Hobbies</h5>
                            <ul className='generalText'>
                                <li>Video Games</li>
                                <li>Weightlifting</li>
                                <li>Anime</li>
                                <li>Programming</li>
                                <li>Robotics</li>
                            </ul>

                        </div>
                    </Container>
                </Col>

                <Col xs lg={6}>
                    <Container className='sectionBack shadow-lg'>
                        <div className='example2'>
                            <h5 className='ubuntu'>Current Albums</h5>
                            <ul className='generalText '>
                                <li>
                                    <a className='Alink' href='https://www.youtube.com/watch?v=gI7TS1p2fc0&list=PLPk3o2y1Lr7qfYQDmswhukXTLcMdBaPl-' target="_blank" title="My favorite song from this album is 'Denver'.">Jackman</a>
                                </li>
                                <li>
                                    <a className='Alink' href='https://www.youtube.com/watch?v=pNDB4iy0viM&list=PLFpq0c-We4_wiL3yCp3PTcCqXFdiQvzva' target="_blank" title="My favorite song from this album is 'Drugs N Hella Melodies'.">Life of a Don</a>
                                </li>
                                <li>
                                    <a className='Alink' href='https://www.youtube.com/watch?v=u92g3L33Foc&list=PL1-eQOG75OnQLEzpB5wpLKyeOzi-w3WXE' target="_blank" title="My favorite song from this album is 'Walkin'.">Melt My Eyez See Your Future</a>
                                </li>
                                <li>
                                    <a className='Alink' href='https://www.youtube.com/watch?v=3ISHE5Mp628&list=PLVtE4eR5mAVHdTd1Ij9w75x_b-D0-3mgK' target="_blank" title="My favorite song from this album is 'Want U Around'.">Apolonio</a>
                                </li>
                                <li>
                                    <a className='Alink' href='https://www.youtube.com/watch?v=R1BHcneo-Ks&list=PLPk3o2y1Lr7pw5E7msZEXTZyWoW-nsg5h' target="_blank" title="My favorite song from this album is 'Keep It Light'.">Thats What They All Say</a>
                                </li>
                            </ul>
                        </div>
                    </Container>

                </Col>
            </Row>
            <Row md='auto'>
                <Container className='sectionBack shadow-lg'>
                    <div className='example2'>
                        <h4 className='ubuntu'>Professional Aspirations</h4>
                        <p className='ubuntu'>With having the privilage of working with many forms of applied programming such as web development, deep learning, AI models, 
                        and software engineering, I have reached a point where I can find joy in any of these fields. After tapping on the 'Projects' tab at the top of the page, 
                        you should be able to obtain a better understanding of what I have been able to work with. This portfolio webpage being one of them!</p>
                    </div>
                </Container>
            </Row>
            </Container>


        </Container>
    )
}