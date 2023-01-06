import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';


export default function Character() {
  const [character, setCharacter] = useState([]);
  const {characterId} = useParams()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
      setCharacter(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <Card style={{ width: '25%'}}>
      <Card.Img variant="top" src={character.image} alt="Card image cap"/>
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{character.gender} - {character.status}</Card.Subtitle>
          <Button variant="primary">♡</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
