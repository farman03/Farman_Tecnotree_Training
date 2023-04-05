import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Destination = ({ title, image, description, price }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Destination;
