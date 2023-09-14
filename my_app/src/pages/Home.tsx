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
                    <SocialIcon url="https://www.linkedin.com/in/jose-a-cruziii/" target='_blank' className='social' />
                    <SocialIcon url="https://github.com/joeycrz" target='_blank' className='social' />
                    <SocialIcon url="https://open.spotify.com/user/deathissolution" target='_blank' className='social' />
                    <SocialIcon url="https://www.instagram.com/joey.cz/" target='_blank' />
                </Container>

            </Row>

            
        </Container>

    )
}