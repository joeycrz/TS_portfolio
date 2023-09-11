import { Container, Col, Row, Image, Button, Modal, ModalProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'
import './pages.css';
import me from '../images/me.png';
import { useState } from 'react'
import resume1 from '../images/resume_NoMargin - Copy-1.png';

import { SocialIcon } from 'react-social-icons';
import React from 'react';

export function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid>
            <Row className='mb-3'>
                <Container className='cc1'>
                    <img src={me} className='profilePic'/>
                </Container>

            </Row>
            <Row >
                <Container className='cc'>
                    <div className='description example'>
                        <h3 className='descriptionH'>Welcome to my portfolio!</h3>
                        <p>Hello! My name is Jose Cruz, but my friends call me Joey, I
                            am currently a senior studying computer science at the University of Texas
                            Rio Grande Valley. Feel free to explore the page and check out any information provided.
                            Below you will find my resume and links to my socials!
                        </p>
                    </div>
                </Container>
            </Row>
            <Row className='mb-3'>
                <Container className='resumeButtonCont'>
                    <div className='cc'>
                        <button data-bs-toggle="modal" data-bs-target="#imageExample">Resume</button>
                    </div>


                    <div className='modal fade' id='imageExample' tabIndex={-1} aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content resumeCont'>
                                <div className='modal-body '>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                    <img src={resume1} className='d-block resume ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Row>
            <Row >
                <Container className='cc'>
                    <SocialIcon url="https://www.linkedin.com/in/jose-a-cruziii/" className='social' />
                    <SocialIcon url="https://github.com/joeycrz" className='social' />
                    <SocialIcon url="https://open.spotify.com/user/deathissolution" className='social' />
                    <SocialIcon url="https://www.instagram.com/joey.cz/" />
                </Container>

            </Row>

            {/* <Row className='mb-3'>
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
            </Row> */}
        </Container>

    )
}