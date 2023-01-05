import Card from 'react-bootstrap/Card';

function CharacterMini({name, status, gender, type, origin, image}) {
  return (
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={image} alt="Card image cap"/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{gender} - {status}</Card.Subtitle>
      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
  </Card>

  );
}

export default CharacterMini;
