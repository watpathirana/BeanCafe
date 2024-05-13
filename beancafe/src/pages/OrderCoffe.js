import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Table,
} from "react-bootstrap";
import { useOrders } from "../context/OrderContext"; 
import CustomButton from "../components/CustomButton";
import Testimonials from "../components/Testimonials";
import MainOptionCards from "../components/MainOptionCards";
import Navigation from "../components/Navigation";
import '../css/OrderCoffe.css';

export default function OrderCoffee() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
    address: "",
  });
  const [error, setError] = useState({
    email: "",
    name: "",
    mobile: "",
    address: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile); // Validates a 10-digit number, adjust the regex as needed for your locale
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newError = {
      email: "",
      name: "",
      mobile: "",
      address: "",
    };

    if (!validateEmail(formData.email)) {
      newError.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.name.trim()) {
      newError.name = "Name is required";
      isValid = false;
    }

    if (!validateMobile(formData.mobile)) {
      newError.mobile = "Invalid mobile number";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newError.address = "Address is required";
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      console.log("All validations passed, processing the data:", formData);
      // Here, you can add further code to process the valid form data
    }
  };

   //const [orders, setOrders] = useState([]);
   const { orders, clearOrders } = useOrders();
   
   // Calculate the total sum of all order totals
   const orderTotal = orders.reduce((total, order) => {
     return total + (order.quantity * parseFloat(order.price));
   }, 0);
  return (
    <Container fluid className="px-0">
      <Navigation orders={orders} />
      <div className="bg-dark text-white text-center py-5 mb-4 banner">
        <div className="bannerTextContainer">
          <h1 className="bannerHeaderText">Welcome to BeanCafe</h1>
          <p className="lead">
            Explore our world-class coffee blends and brews.
          </p>
        </div>
      </div>

      <Container className="my-4">
        <h1>Your Orders</h1>
        {orders.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>Rs. {order.price}</td>
                  <td>{order.quantity}</td>
                  <td>Rs. {(order.quantity * parseFloat(order.price)).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
                <td><strong>Rs. {orderTotal.toFixed(2)}</strong></td>
              </tr>
            </tbody>

          </Table>
        ) : (
          <p>No orders yet.</p>
        )}
        <div className="AllignRight">
          <Button variant="danger" onClick={clearOrders}>
            Clear Orders
          </Button>
        </div>

        <h1>Please submit your details</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              isInvalid={!!error.email}
            />
            <Form.Control.Feedback type="invalid">
              {error.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              isInvalid={!!error.name}
            />
            <Form.Control.Feedback type="invalid">
              {error.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              onChange={handleChange}
              isInvalid={!!error.mobile}
            />
            <Form.Control.Feedback type="invalid">
              {error.mobile}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Enter address"
              onChange={handleChange}
              isInvalid={!!error.address}
            />
            <Form.Control.Feedback type="invalid">
              {error.address}
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          <CustomButton
            type="submit"
            onClick={() => console.log("Sign up for Coffee Club")}
          >
            Order Now
          </CustomButton>
        </Form>
      </Container>

      <div className="joinContainer">
        <Container className="text-center my-5 py-5 joinContainerText">
          <h2>Join our Coffee Club</h2>
          <p>
            Contact Us for our exclusive coffee club and get fresh coffee
            delivered to your door every month.
          </p>
          <CustomButton onClick={() => console.log("Sign up for Coffee Club")}>
            0112 111 111
          </CustomButton>
        </Container>
      </div>
    </Container>
  );
}
