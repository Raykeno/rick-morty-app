import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function FiveCharacterMini(id) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(res.data);
    }
    fetchData();
  }, []);

  return (
  <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={character.image} alt="Card image cap"/>
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{character.gender} - {character.status}</Card.Subtitle>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
  </Card>
  );
}
