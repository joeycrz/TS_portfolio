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
                <Container className='mb-3'>
                    <Row>
                        <Container className='generalText'>
                            <h5 className='mb-3 imported projectCategory '>Ongoing Projects</h5>
                        </Container>
                    </Row>
                    <Row>
                        <Container className='generalText'>

                            <h6 className='projects project'>Health Science Announcements : JavaScript, React, Chakra-UI, Firebase</h6>
                            <ul className='projectDetails details'>
                                <li>Deployed a webpage to allow for interactive announcements to verify activity and participation.
                                </li>
                                <li>
                                    <a href='https://healthscienceannouncements.web.app/' target='_blank'>Announcements Website</a>
                                </li>
                            </ul>

                            <h6 className='projects'>AI Drone Racing : Python, Isaac Gym (Senior Project)</h6>
                            <ul className='projectDetails'>
                                <li>
                                    Experimenting with robotics and reinforcement learning, we are assembling a drone and attempting
                                    to have it fly/race using AI.
                                </li>
                                
                            </ul>

                            <h6 className='projects'>Data Cleaning : STATA, Excel</h6>
                            <ul className='projectDetails'>
                                <li>UTRGV has a program called 'AmeriCorps', dedicated to helping
                                    students apply and enroll to colleges as well as find success.
                                </li>
                            </ul>



                        </Container>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Container className='generalText'>
                            <h5 className='mb-3 imported projectCategory'>Completed Projects</h5>
                        </Container>
                    </Row>
                    <Row>
                        <Container className='generalText'>
                            <h6 className='projects'>Online Portfolio : TypeScript, React, React Bootstrap, Firebase</h6>
                            <ul className='projectDetails'>
                                <li>
                                    Deployed my own online portfolio!
                                </li>
                                <li>
                                    I became more comfortable with Google's Firebase, CSS, and TypeScript.
                                </li>
                            </ul>

                            <h6 className='projects'>AI Dog-Breed Identifier : Python, PyTorch, Google Collab</h6>
                            <ul className='projectDetails'>
                                <li>
                                    Using a CNN model (ResNet), I created an AI program that will determine the breed of dogs using
                                    images provide by a dataset.
                                </li>
                                <li>
                                    Was able to dive into Deep Learning topics and explore AI models!
                                </li>
                            </ul>

                            <h6 className='projects'>Bitcoin Conversion Calculator : Dart, Flutter, Android Studios</h6>
                            <ul className='projectDetails'>
                                <li>
                                    Created a mobile application to allow a user to convert USD to Bitcoin or vice versa.
                                </li>
                                <li>
                                    Worked with an API, and the Flutter framework.
                                </li>
                            </ul>

                            <h6 className='projects'>Online Shopping Service : JavaScript, Node.js, SQL, DB Browser, Bootstrap</h6>
                            <ul className='projectDetails'>
                                <li>
                                    My introduction to SQL and web development.
                                </li>
                                <li>
                                    Was able to obtain a strong foundation of web development along with some security assurance
                                    around database calls with SQL.
                                </li>
                            </ul>

                            <h6 className='projects'>Instagram Clone : Ruby, Ruby on Rails</h6>
                            <ul className='projectDetails'>
                                <li>
                                    My introduction to software engineering practices and methodology.
                                </li>
                                <li>
                                    Using a 'Rails', I worked with an MVC model to create clone of Instagram.
                                </li>
                            </ul>

                        </Container>
                    </Row>
                </Container>

            </Container>

        </Container>
    )
}

