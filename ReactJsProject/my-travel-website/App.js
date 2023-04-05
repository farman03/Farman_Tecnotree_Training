import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const destinations = [
  {
    title: 'Paris',
    image: 'https://picsum.photos/id/1005/300/200',
    description: 'Visit the Eiffel Tower, the Louvre, and many more iconic landmarks in the beautiful city of Paris.',
    price: 'Visit Now'
  },
  {
    title: 'New York City',
    image: 'https://picsum.photos/id/1018/300/200',
    description: 'Explore the bustling city of New York, home to the Statue of Liberty, Central Park, and countless museums and galleries.',
    price: 'Visit Now'
  },
  {
    title: 'Tokyo',
    image: 'https://picsum.photos/id/1042/300/200',
    description: 'Experience the unique culture of Tokyo, from the vibrant neighborhoods of Shibuya and Shinjuku to the peaceful gardens of the Imperial Palace.',
    price: 'Visit Now'
  }
];

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Explore Our Top Destinations</h1>
      <Row>
        {destinations.map(destination => (
          <Col key={destination.title} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={destination.image} />
              <Card.Body>
                <Card.Title>{destination.title}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <Button variant="primary">{destination.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
