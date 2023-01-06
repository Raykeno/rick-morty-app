import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterMini from './CharacterMini';
import './Characters.css';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from './Header';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let lien = 'https://rickandmortyapi.com/api/character/';
      while (lien){
        const {data} = await axios.get(lien);
        setCharacters(old => [...old, ...data.results]);
        lien = data.info.next;
      }
    }
    fetchData();

  }, []);
  return (
    <div>
      <div>
        <Header />
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
