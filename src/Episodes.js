import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import EpisodeMini from './EpisodeMini';
import { Table } from 'react-bootstrap';
import Header from './Header';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let lien = 'https://rickandmortyapi.com/api/episode/';
      while (lien){
        const {data} = await axios.get(lien);
        setEpisodes(old => [...old, ...data.results]);
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
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Nom</th>
          <th>Code</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          {episodes.map(episode => (
              <EpisodeMini
                  id={episode.id} 
                  name={episode.name} 
                  air_date={episode.air_date}
                  episode={episode.episode}
              /> 
          ))}
        </tbody>
        </Table>
    </Container>
    </div>
  );
}
