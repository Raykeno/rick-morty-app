import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterMini from './CharacterMini';
import './Characters.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from './Header';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const { page } = useParams()
  const [prev, setPrev] = useState([])
  const [next, setNext] = useState([])
  var prevButton = null;
  var nextButton = null;

  useEffect(() => {
    async function fetchData() {    
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      setPrev(res.data.info.prev)
      setNext(res.data.info.next)
      setCharacters(res.data.results);
    }
    fetchData();

  }, []);

  if (prev) {
    prevButton = <a href={`/characters/${parseInt(page)-1}`} class="btn btn-primary text-light btn-outline-dark btn-lg m-2">Previous</a>
  }

  if (next) {
    nextButton = <a href={`/characters/${parseInt(page)+1}`} class="btn btn-primary text-light btn-outline-dark btn-lg m-2">Next</a>
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
            {prevButton}
            {nextButton}
      </div>
    <Container fluid>
      <Row>
        {characters.map(character => (  
              <Col>
                <CharacterMini
                    id={character.id} 
                    name={character.name} 
                    status={character.status} 
                    gender={character.gender}
                    type={character.type}
                    origin={{name: character.origin.name, url: character.origin.url }}
                    image={character.image}
                /> 
              </Col>  
        ))}
      </Row>
    </Container>
    </div>
  );
}

{/*
let lien = 'https://rickandmortyapi.com/api/character/';
      while (lien){
        const {data} = await axios.get(lien);
        setCharacters(old => [...old, ...data.results]);
        lien = data.info.next;
      } 
*/}