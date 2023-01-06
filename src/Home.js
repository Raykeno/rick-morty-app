
import Header from "./Header"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterMini from './CharacterMini';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./Home.css"
import FiveCharacterMini from './FiveCharacterMini.js'

export default function Home(){

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    async function fetchData() {
      let lien = 'https://rickandmortyapi.com/api/character/';
      while (lien){
        const {data} = await axios.get(lien);
        setCharacters(old => [...old, ...data.results]);
        lien = data.info.next;
      }
      setCharacters(old => (old.sort(() => Math.random() - 0.5)).slice(0, 5));
    }

    fetchData();
    }, []);

    return (
    <div>
      <Header />
      <Container fluid>
        <Row>
        {characters.map(character => (
              <Col>
                <FiveCharacterMini
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
    )

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
