import {Navbar as NavbarBS, Container, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export function Navbar(){
    return(
        <NavbarBS className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/socials" as={NavLink}>
                        Projects
                    </Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>
                        Socials
                    </Nav.Link>
                </Nav>
                
            </Container>
        </NavbarBS>
    )
}