import Card from 'react-bootstrap/Card';

function EpisodeMini({name, air_date, episode}) {
  return (
  
    <tr>
      <th>{name}</th>
      <th>{episode}</th>
      <th>{air_date}</th>
    </tr>

  );
}

export default EpisodeMini;
