import { Navbar as NavbarBS, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './comp.css';
export function Navbar() {
    return (
        <NavbarBS className='bg-dark shadow-lg mb-3'>
            <Container className='justify-content-center'>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        <div className='text'>Home</div>
                    </Nav.Link>
                    <Nav.Link to="/socials" as={NavLink}>
                        <div className='text'>Projects</div>
                    </Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>
                        <div className='text'>Socials</div>
                    </Nav.Link>
                </Nav>

            </Container>
        </NavbarBS>
    )
}