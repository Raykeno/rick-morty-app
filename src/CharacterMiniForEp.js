import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharacterMini({lien}) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(lien);
      setCharacter(res.data);
    }
    fetchData();
  }, []);

  
  return (
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={character.image} alt="Card image cap"/>
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Button variant="primary">♡</Button>
      <Link to={`/character/${character.id}`} class="btn btn-outline-dark btn-lg m-2">Page Perso</Link>
    </Card.Body>
  </Card>

  );
}

export default CharacterMini;
