import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function OrderForm() {
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState('');

  // const validateEmail = (email) => {
  //   console.log("Validating email:", email);  // Debug: check what email is being validated
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitting form with email:", email);  // Debug: check submitted email
  //   if (!validateEmail(email)) {
  //     setError('Invalid email address');
  //     console.log("Validation failed.");  // Debug: log validation failure
  //     return;
  //   }
  //   console.log("Validation successful, proceeding...");  // Debug: log successful validation
  //   setError('');
  //   // Here, you can add further code to process the valid email
  // };

  return (
    <div>
      <h1>Test</h1>
    </div>
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Enter email"
    //       onChange={e => setEmail(e.target.value)}
    //       isInvalid={!!error}
    //     />
    //     <Form.Control.Feedback type="invalid">
    //       {error}
    //     </Form.Control.Feedback>
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
};
