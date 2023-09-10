import { Container, Col, Row, Image } from 'react-bootstrap';
import './pages.css';
import me from '../images/me.png';
export function Home() {
    return (
        <Container fluid>
            <Row className='mb-3'>
                <Container className='cc'>
                    <div className='profilePic'></div>
                </Container>

            </Row>
            <Row md='auto'>
                <Container className='cc'>
                    <div className='description example'>
                        <h3 className='descriptionH'>Welcome to my portfolio!</h3>
                        <p>To whoever is reading this, welcome! My name is Jose Cruz, but my friends call me Joey, I
                            am currently a senior studying computer science at the University of Texas
                            Rio Grande Valley. Feel free to explore the page and check out any information provided.
                        </p>
                    </div>
                </Container>
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
                            <h5 className='musicH'>Current Listens</h5>
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
                        <h4 className='musicH'>Professional Aspirations</h4>
                        <p className='description'>With having the privilage of working with many forms of applied programming such as web development, deep learning, AI models, 
                        and software engineering, I have reached a point where I can find joy in any of these fields. After tapping on the 'Projects' tab at the top of the page, 
                        you should be able to obtain a better understanding of what I have been able to work with. This portfolio webpage being one of them!</p>
                    </div>
                </Container>
            </Row>
        </Container>
    )
}