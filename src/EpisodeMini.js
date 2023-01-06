import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function EpisodeMini({id, name, air_date, episode}) {
  return (
  
    <tr>
      <th>{name}</th>
      <th>{episode}</th>
      <th>{air_date}</th>
      <th><Link to={`/episode/${id}`} class="btn btn-outline-dark m-2">Page Episode</Link></th>
    </tr>

  );
}

export default EpisodeMini;
