import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

export default function MainOptionCards(props) {
  return (
    <div>
        <h3>{props.Title}</h3>
        <p>{props.Text}</p>
    </div>
  )
}
