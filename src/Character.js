import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';

export default function Character({id}) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://rickandmortyapi.com/api/character/1');
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
