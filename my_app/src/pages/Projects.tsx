import { Container, Col, Row, Image, Button, Modal, ModalProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'
import './pages.css';
import { useState } from 'react'
import resume1 from '../images/resume_NoMargin - Copy-1.png';

export function Projects() {
    return (
        <Container fluid>
            <Container className='box'>
                <Container className='mb-5'>
                    <Row>
                        <Container className='generalText'>
                            <h5 className='mb-3 imported'>Ongoing Projects</h5>
                        </Container>
                    </Row>
                    <Row>
                        <Container className='generalText projects'>
                            <h6 >Health Science Announcements : JavaScript, Firebase, Chakra-UI</h6>
                            <p className='projectDetails'>Deployed an ongoing web application that will soon allow a professor to send announcements and
                                reminders to their students. Keeping toll of how many users are interacting with the announcements
                                and the overall application.
                            </p>
                            <h6>Online Portfolio</h6>
                        </Container>
                    </Row>
                </Container>
                <Row>
                    <Container className='generalText'>
                        <h5 className='mb-3 imported'>Completed Projects</h5>
                    </Container>
                </Row>
                <Row>
                    <Container className='generalText projects'>
                        <p>Bitcoin Conversion Calculator</p>
                        <p>Online Shopping Service</p>
                        <p>Instagram Clone</p>
                    </Container>
                </Row>

            </Container>

        </Container>
    )
}

