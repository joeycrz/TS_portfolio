import { Navbar as NavbarBS, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './comp.css';
export function Navbar() {
    return (
        <NavbarBS className='shadow-lg mb-3'>
            <Container className='justify-content-center'>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        <div className='text'>Home</div>
                    </Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>
                        <div className='text'>Projects</div>
                    </Nav.Link>
                    <Nav.Link to="/resume" as={NavLink}>
                        <div className='text'>Resume</div>
                    </Nav.Link>
                    <Nav.Link to="/aboutme" as={NavLink}>
                        <div className='text'>About Me</div>
                    </Nav.Link>
                    
                </Nav>

            </Container>
        </NavbarBS>
    )
}