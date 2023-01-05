import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from "react-router-dom";


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
  <div class="container text-center card">
    <div class="row">
      <div class="col">
        {character.name} <br/>
        <img src={character.image} width="120" height="120"/> <br/>
        {character.gender}
      </div>
      <div class="col">
        {character.status}
      </div>
      <div class="col">
        
      </div>
      <div class="col">
        {character.type}
      </div>
    </div>
  </div>

  );
}
