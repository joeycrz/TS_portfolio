import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import './pages.css';

import { Navbar as NavbarBS, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Resume() {
    return (
        <Container className="cc">
            <Container className="resumeBox shadow-lg" >
                <Row>
                    <div className="container">
                        <h1>Jose Angel Cruz III</h1>
                        <p>Pharr, TX 78577 | (956) 667-7983 | cruz.joey2019@gmail.com</p>
                        <p><a href="linkedin.com/in/jose-a-cruzIII">linkedin.com/in/jose-a-cruzIII</a> | <a href="github.com/joeycrz">github.com/joeycrz</a></p>

                        <h3 className="cc">EDUCATION</h3>
                        <p>
                            <strong>University of Texas Rio Grande Valley : </strong>
                            Bachelor of Computer Science – Expected Graduation: Fall 2023
                        </p>
                        <p><strong>South Texas College : </strong>
                            Associate in Interdisciplinary Studies in Sciences – Graduated December 2018</p>

                        <h3 className="cc">SKILLS</h3>
                        <ul>
                            <li>Languages: C++, Python, JavaScript, HTML, CSS, SQL, Ruby, TypeScript, Dart, Java</li>
                            <li>Frameworks: React.JS, Node.JS, Chakra.UI, Bootstrap, Flutter, Ruby on Rails</li>
                            <li>Developer Tools: Git, DB Browser, Render, Heroku, Firebase</li>
                        </ul>

                        <h3 className="cc">EXPERIENCE</h3>
                        <h5>Student Research Assistant | September 2022 – Current</h5>
                        <p><strong>University of Texas Rio Grande Valley – Center for Survey Research</strong></p>
                        <ul >
                            <li>Aid in data collection, data entry, and assisted with the management of over 1000 survey entries.</li>
                        </ul>

                        <h5>Substitute Teacher | January 2021 – August 2022</h5>
                        <p><strong>Edinburg Consolidated Independent School District</strong></p>
                        <ul>
                            <li>Coordinate with teachers and staff to follow and create lesson plans.</li>
                        </ul>

                        <h3 className="cc">PROJECTS</h3>
                        <h5>Health Science Announcements – JavaScript (React.JS), Chakra UI, HTML, Firebase</h5>
                        <ul>
                            <li>Deployed an ongoing web application that allows a professor to send announcements and reminders to their students. Keeping track of how many users are interacting with the announcements and the overall application.</li>
                            <li>Following the agile methodology, I meet with the client every week to discuss the direction of the application. Using the user stories, I adjust the website and present it weekly for further development.</li>
                        </ul>

                        <h5>Bitcoin Conversion Calculator – Dart (Flutter)</h5>
                        <ul>
                            <li>Developed a mobile application that allows the user to enter a value for either US dollars or Bitcoin and convert it using real-time/current exchange rates.</li>
                            <li>Using proper software engineering practices, I was able to experience and complete a project using an API, along with its mock-up testing that comes along with it.</li>
                        </ul>

                        <h5>Online Shopping Service – JavaScript, Node.JS, SQL, HTML</h5>
                        <ul>
                            <li>Developed a web application that retrieves data from a database and displays them in an online shopping service format, allowing the user to select an item and read general information about the product, such as price, reviews, and description.</li>
                        </ul>

                        <h5>Instagram Clone – Ruby (Ruby on Rails), HTML</h5>
                        <ul>
                            <li>Developed a web application of a clone of Instagram that allows the user to post pictures and interact with other photos by liking them.</li>
                            <li>Using proper software engineering practices, I completed the project using test-driven development and by following the agile methodology.</li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}