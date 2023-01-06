import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';


export default function Location(locationId) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      setLocation(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
      <Card style={{ width: '25%', margin: '0 auto'}}>
      <Card.Img variant="top" src={location.url} alt="Card image cap"/>
        <Card.Body>
          <Card.Title>{location.name}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
