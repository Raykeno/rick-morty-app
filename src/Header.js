import { Link } from 'react-router-dom';
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
        <Navbar bg="navbar-dark">
            <Navbar.Brand href="/">
                <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" width="200" height="60" alt=""/>
            </Navbar.Brand>
            <Container>
                <Link to="/favorites" class="btn btn-outline-dark btn-lg m-2">Favoris</Link>
                <Link to="/characters" class="btn btn-outline-dark btn-lg m-2">Personnages</Link>
                <Link to="/episodes" class="btn btn-outline-dark btn-lg m-2">Episodes</Link>
            </Container>
        </Navbar>
  )
}


