import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from './firebase/firebase';

export default function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    console.log('page loaded');
  }, []);

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  return user ? (
    <Container fluid>
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">
                <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" width="200" height="60" alt=""/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/favoris" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Favoris</Link></Nav.Link>
                <Nav.Link><Link to="/characters/1" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Personnages</Link></Nav.Link>
                <Nav.Link><Link to="/episodes" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Episodes</Link></Nav.Link>
                <Nav.Link><button onClick={logoutOfApp} class="btn btn-dark text-info btn-outline-light btn-lg m-2">Logout</button></Nav.Link>
            </Nav>
        </Navbar>
    </Container>
  ) : (
    <Container fluid>
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">
                <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" width="200" height="60" alt=""/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/favorites" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Favoris</Link></Nav.Link>
                <Nav.Link><Link to="/characters/1" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Personnages</Link></Nav.Link>
                <Nav.Link><Link to="/episodes" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Episodes</Link></Nav.Link>
                <Nav.Link><Link to="/login" class="btn btn-dark text-info btn-outline-light btn-lg m-2">Login</Link></Nav.Link>   
            </Nav>
        </Navbar>
    </Container>
  )
}


