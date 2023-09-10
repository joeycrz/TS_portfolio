import { Container, Col, Row, Image } from 'react-bootstrap';
import './pages.css';
import me from '../images/me.png';
export function Home() {
    return (
        <Container fluid>
            <Row className='mb-3'>
                <Container className='cc'>
                    <div className='profilePic'>
                        {/* <img src={me} className='profilePic' /> */}
                    </div>
                </Container>

            </Row>
            <Row md='auto'>
                <Container className='cc'>
                    <div className='description example'>
                        <h3 className='descriptionH'>Welcome to my portfolio!</h3>
                        <p>To whoever is reading this, welcome! My name is Jose Cruz, but my friends call me Joey, I am currently a senior studying at the University of Texas 
                            Rio Grande Valley. Feel free to explore the page and check out any information provided.
                        </p>
                    </div>
                </Container>
            </Row>
            <Row>
                <Col className='bg-danger' xs lg={6}>
                    <Container>
                        <div>
                            <h4>Hobbies</h4>
                        </div>
                    </Container>
                </Col>

                <Col className='bg-white' xs lg={6}>
                    <div>
                        <h4>Music</h4>
                    </div>
                </Col>
            </Row>
            <Row className='bg-warning' md='auto'>
                <Container className='cc'>
                    <div>
                        <h4>Professional Aspirations</h4>
                        <p>With having </p>
                    </div>
                </Container>
            </Row>
        </Container>
    )
}