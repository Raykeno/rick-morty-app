import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterMini from './CharacterMini';
import './Characters.css';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://rickandmortyapi.com/api/character/');
      setCharacters(res.data.results);
    }
    fetchData();
  }, []);

  return (
    <Container fluid>
        <Stack direction="horizontal">
        {characters.map(character => (
            <Row>
            <CharacterMini
                id={character.id} 
                name={character.name} 
                status={character.status} 
                gender={character.gender}
                type={character.type}
                origin={{name: character.origin.name, url: character.origin.url }}
                image={character.image}
            /> 
            </Row>
        ))}
        baba
        </Stack>
    </Container>
  );
}
