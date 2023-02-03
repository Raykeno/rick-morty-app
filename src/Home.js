
import Header from "./Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./Home.css"
import FiveCharacterMini from './FiveCharacterMini.js'
// import Favorites from './Favorites.js'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from './firebase/firebase';
import Login from './Login';
import Image from 'react-bootstrap/Image'

export default function Home(){

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

    return (
    <div>
      <Header />
      <Container fluid>
      {user 
      ? 
      <>
      <img
        src={user.photoUrl}
        className='img-thumbnail'
        alt='...' 
        width="200"
        height="200"
        />
      <div>Welcome {user.displayName}</div></>
      : 
      ''
      }

      </Container>
    <Container fluid>
        <Row>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
        </Row>
    </Container> 
    </div>
    )

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
