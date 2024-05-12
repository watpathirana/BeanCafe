import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import CustomButton from '../components/CustomButton';
import Testimonials from '../components/Testimonials';
import MainOptionCards from '../components/MainOptionCards';
import Navigation from '../components/Navigation';
import '../css/home.css';

export default function Home() {
  const Navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  return (
  

    <Container fluid className="px-0">
      <Navigation orders={orders} />
      <div className="bg-dark text-white text-center py-5 mb-4 banner">
        <div className="bannerTextContainer">
          <h1 className='bannerHeaderText'>Welcome to BeanCafe</h1>
          <p className="lead">Explore our world-class coffee blends and brews.</p>
          <CustomButton onClick={()=> Navigate("/OrderCoffee")}>
            Order Now
          </CustomButton>
        </div>
      </div>

      <Container className="my-5">
        <Row className="text-center">
          <Col md={4} sm={12} className="mb-4">
            <MainOptionCards Title="Freshly Brewed" Text="Enjoy the freshest coffee brewed from the best beans sourced from around the world." />
          </Col>
          <Col md={4} sm={12} className="mb-4">
            <MainOptionCards Title="24/7 Orders" Text="Order anytime, anywhere. We deliver your favorite coffee right to your doorstep." />
          </Col>
          <Col md={4} sm={12}>
            <MainOptionCards Title="Quality Guaranteed" Text="Each cup is made with love and precision, ensuring the highest quality every time." />
          </Col>
        </Row>
      </Container>

      <div className='aboutContainer'>
        <Container className="my-5 py-5">
          <Row className="align-items-center">
            <Col md={6} sm={12}>
              <h2>About BeanCafe</h2>
              <p>We are passionate about delivering the best handpicked beans from sustainable farms around the globe. Our commitment to quality starts from the source and ends with your satisfaction with every sip.</p>
              <Button variant="outline-primary">Learn More</Button>
            </Col>
            <Col md={6} sm={12}>
              <Image src="https://www.roastworks.co.uk/cdn/shop/files/Will_720x.jpg?v=1664199324" fluid />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container className="my-5 py-5 bg-light">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <Row>
          <Col md={4}>
            <Testimonials Title="John Doe" Text="The best coffee shop in town! The flavors are always amazing and the service is top-notch!"/>
          </Col>
          <Col md={4}>
            <Testimonials Title="Jane Smith" Text="I love starting my day with a cup from BeanCafe. Their subscription service is a lifesaver!"/>
          </Col>
          <Col md={4}>
            <Testimonials Title="Alex Johnson" Text="Great variety and excellent service. Highly recommend their special blend!"/>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className='joinContainer'>
        <Container className="text-center my-5 py-5 joinContainerText">
          <h2>Join our Coffee Club</h2>
          <p>Contact Us for our exclusive coffee club and get fresh coffee delivered to your door every month.</p>
          <CustomButton onClick={() => console.log("Sign up for Coffee Club")}>
            0112 111 111
          </CustomButton>
        </Container>
      </div>
    </Container>
  )
};
