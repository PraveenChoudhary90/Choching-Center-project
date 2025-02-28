
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopNav = ()=>{
    return(
        <>
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Choching Center</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="registraction">Teacher Registraction</Nav.Link>
            <Nav.Link as={Link} to="Search">Search Subject Teacher</Nav.Link>
            <Nav.Link as={Link} to="Login"> Teacher Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default TopNav;