import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Container fluid>
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">
                <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" width="200" height="60" alt=""/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/favorites" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Favoris</Link></Nav.Link>
                <Nav.Link><Link to="/characters" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Personnages</Link></Nav.Link>
                <Nav.Link><Link to="/episodes" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Episodes</Link></Nav.Link>
            </Nav>
        </Navbar>
    </Container>
  )
}


