import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Episode.css';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Header from './Header';
import CharacterMini from './CharacterMini';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CharacterMiniForEp from './CharacterMiniForEp.js'


export default function Episode() {
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState([]);
  const { episodeId } = useParams()
  var prevButton = null
  var nextButton = null

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
      setEpisode(res.data);
      setCharacters(res.data.characters)
    }
    fetchData();
  }, []);

  if (episodeId > 1) {
    prevButton = <a href={`/episode/${parseInt(episodeId)-1}`} class="btn btn-primary text-light btn-outline-dark btn-lg m-2">Previous</a>
  }

  if (episodeId < 51) {
    nextButton = <a href={`/episode/${parseInt(episodeId)+1}`} class="btn btn-primary text-light btn-outline-dark btn-lg m-2">Next</a>
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <Card style={{ width: '50%', margin: '0 auto'}}>
        <Card.Body>
          <Card.Title>{episode.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{episode.air_date} - {episode.episode}</Card.Subtitle>
        </Card.Body>
      </Card>
      </div>
      <div>
            {prevButton}
            {nextButton}
      </div>
      <div>
        Personnages dans cet episode :
      </div>
      <div>
      <Container fluid>
        <Row>
          {characters.map(character => (  
                <Col>
                  <CharacterMiniForEp
                      lien={character} 
                  /> 
                </Col>  
          ))}
        </Row>
        </Container>
      </div>
    </div>
  );
}
