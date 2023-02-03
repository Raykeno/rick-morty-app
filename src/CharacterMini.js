import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React from "react";
// import {FavoritesContext} from './Favorites.js'


function CharacterMini({id, name, status, gender, type, origin, image}) {
  
  // const { favorites, setFavorites } = useContext(FavoritesContext);

  /*
  const handleAddClick = () => {
    setFavorites([...favorites, id]);
  };

  const handleRemClick = () => {
    
  };
  */
  
  return (
  <Card style={{ width: '22rem'}}>
  <Card.Img variant="top" src={image} alt="Card image cap"/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{gender} - {status}</Card.Subtitle>
      <Button variant="primary">♡</Button>
    
      <Link to={`/character/${id}`} class="btn btn-outline-dark btn-lg m-2">Page Perso</Link>
    </Card.Body>
  </Card>

  );
}

export default CharacterMini;
