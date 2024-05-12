import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/ItemCard.css';

export default function ItemCard({ item, onAddToOrder }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" className='cardImg' src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className='ItemCardPrice'>Price: Rs.{item.price}</Card.Text>
          <Button variant="primary" onClick={() => onAddToOrder(item)}>Add to Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
