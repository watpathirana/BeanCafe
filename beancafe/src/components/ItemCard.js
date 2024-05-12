import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import '../css/ItemCard.css';


export default function ItemCard(props) {
  return (
    <div>
        <Card>
            <Card.Img variant="top" className='cardImg' src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text className='ItemCardPrice'>Price: Rs.{props.price}</Card.Text>
                <Button variant="primary">Add to Order</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
