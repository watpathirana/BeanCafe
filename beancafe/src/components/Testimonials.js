import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

export default function Testimonials(props) {
  return (
    <div>
        <Card className="mb-4">
            <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
