import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged, query, db, collection, where } from './firebase/firebase';
import Login from './Login';
import { Navigate } from 'react-router-dom';
import Header from './Header';
import FiveCharacterMini from './FiveCharacterMini';
import { Container, Row, Col } from 'react-bootstrap';
import { getDocs } from './firebase/firebase';
import { useState } from 'react';


export default function Favorites() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState([]);

  /*
  try {
    const q = query(collection(db, "favorites"));
    const querySnapshot = await getDocs(q)
  } catch (err){
    console.log("Couldn't fetch favs!")
  }
  */

  const auth = getAuth();

  useEffect(() => {
    async function fetchCollection() {
      const q = query(collection(db, "favorites"));
      const querySnapshot = await getDocs(q)
      setFavorites(querySnapshot);
      console.log(querySnapshot)
    }
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          fetchCollection()
        );
      }
    });
    console.log('page loaded');
  }, []);

  return (
    <div className='app'>

      {!user ? (
        <Navigate to="/" replace={true}/>
      ) : (
      <>
      <Header/>      
      <div>
        Bienvenue à vos favoris
        <>
        <Container fluid>
          <Row>
          {favorites.map((fav) => (
            <Col>
              <FiveCharacterMini
              id={fav}
              />
            </Col>
          ))}
          </Row>
        </Container>
        </>
      </div>
      </>
      )}
    </div>
  );
}
    
    