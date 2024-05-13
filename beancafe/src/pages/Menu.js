import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import CustomButton from '../components/CustomButton';
import ItemCard from '../components/ItemCard';
import { useOrders } from '../context/OrderContext';
import '../css/menu.css';



// Sample data for the menu items, now with images
const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong, dark coffee made by forcing steam through ground coffee beans.",
    price: "550.00",
    imageUrl: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Replace with your actual image URL
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "A coffee drink consisting of espresso mixed with steamed milk foam.",
    price: "575.00",
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your actual image URL
  },
  {
    id: 3,
    name: "Latte",
    description: "A coffee drink made with espresso and steamed milk.",
    price: "680.00",
    imageUrl: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Replace with your actual image URL
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso shots diluted with hot water, resembling brewed coffee but with a richer flavor.",
    price: "490.00",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your actual image URL
  },
  {
    id: 5,
    name: "Macchiato",
    description: "Espresso 'stained' with a small amount of steamed milk, creating a bolder coffee flavor.",
    price: "520.00",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your actual image URL
  },
  {
    id: 6,
    name: "Mocha",
    description: "A sweet drink combining espresso, steamed milk, and chocolate syrup or cocoa powder.",
    price: "970.00",
    imageUrl: "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your actual image URL
  },
  
];

const Menu = () => {

 
  const { orders, addOrder } = useOrders();
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const handleAddToOrder = (item) => {
    addOrder(item);
    setShowToast(true);  // Show toast upon adding an item
    setTimeout(() => setShowToast(false), 3000);  // Hide toast after 3 seconds
  };

  return (
    
    <Container fluid className="px-0">
    
      <div>
          <Navigation orders={orders} />
          <div className="bg-dark text-white text-center py-5 mb-4 banner">
              <div className="bannerTextContainer">
                  <h1 className='bannerHeaderText'>Welcome to BeanCafe</h1>
                  <p className="lead">Explore our world-class coffee blends and brews.</p>
              </div>
          </div>
      </div>
    
      <Container className="my-4">
        <h1>Menu</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {menuItems.map(item => (
            <Col key={item.id}>
              {/* <ItemCard imageUrl={item.imageUrl} name={item.name} description={item.description} price={item.price}/> */}
              <ItemCard item={item} onAddToOrder={() => handleAddToOrder(item)} />
            </Col>
          ))}
        </Row>
      </Container>
      

      {/* Toast Container */}
      <ToastContainer className="p-3" position="top-center" style={{width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 1050 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className={`${toastType}-toast`} style={{
            minWidth: '300px',
            maxWidth: '600px',
            width: '300px',
            pointerEvents: 'auto'
        }}>
          <Toast.Header closeButton={false} className={`${toastType}-toast`}>
            <strong className="me-auto">BeanCafe</strong>
          </Toast.Header>
          <Toast.Body>Added to cart successfully!</Toast.Body>
        </Toast>
      </ToastContainer>

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
  );
};

export default Menu;
